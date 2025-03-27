import { getAllNews, getNewsBySlug } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import React from "react";
import { ImageProps, NewsDetailProps, NewsItem } from "@/lib/utils";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const formattedTitle = params.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return {
    title: formattedTitle,
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const newsData: NewsItem[] = await getAllNews();
  return newsData.map((item: NewsItem) => ({
    slug: item.slug.current,
  }));
}

const ImageWithSource: React.FC<{
  image?: ImageProps;
  imagelabel?: string;
  imagesource?: string;
}> = ({ image, imagelabel, imagesource }) => {
  if (!image?.asset?._ref && !image?.asset?.url) return null;

  return (
    <div className="mb-6">
      <img
        src={
          image.asset?.url ||
          (image.asset?._ref ? urlFor(image.asset).width(800).url() : undefined)
        }
        alt="News Image"
        className="w-full h-[400px] object-cover rounded-md"
      />
      {imagelabel && (
        <p className="text-xs text-gray-400 pl-1 mt-2">
          {imagelabel}
          {imagesource && (
            <span className="font-bold text-zinc-500"> ({imagesource})</span>
          )}
        </p>
      )}
    </div>
  );
};

export default async function NewsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const news = await getNewsBySlug(params.slug);
  let allNews = await getAllNews();

  if (!news) {
    notFound();
  }

  const relatedNews = allNews
    .filter((item: NewsItem) => item.slug.current !== params.slug)
    .slice(0, 5);

  return (
    <div className="container mx-auto px-6 mt-24 bg-[#1F1F1F] py-8 rounded-md">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
        {news.headline}
      </h1>

      <p className="mb-2">
        Dipublikasikan Oleh:
        <span className="font-bold text-white/80"> {news.penulis}</span>
      </p>

      <p className="text-gray-300 text-sm mb-12">
        {new Date(news.tanggalPenerbitan).toLocaleDateString("id-ID", {
          weekday: "long",
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <React.Fragment key={num}>
              <ImageWithSource
                image={news[`gambar${num}` as keyof typeof news] as ImageProps}
                imagelabel={
                  news[`deskripsigambar${num}` as keyof typeof news] as string
                }
                imagesource={
                  news[`imagesource${num}` as keyof typeof news] as string
                }
              />
              {news[`paragraph${num}` as keyof typeof news] && (
                <div className="text-white text-lg mb-6">
                  <p>
                    {news[`paragraph${num}` as keyof typeof news] as string}
                  </p>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="pt-[450px] h-full rounded-md">
          <h2 className="text-white font-semibold text-xl mb-4">
            Baca Berita Lainnya
          </h2>
          <div className="space-y-6">
            {relatedNews.map((item: NewsItem) => (
              <Link key={item.slug.current} href={`/baca/${item.slug.current}`}>
                <div className="group flex gap-4 items-start hover:cursor-pointer p-2 rounded-md transition">
                  {item.gambar1 && (
                    <img
                      src={
                        item.gambar1.asset?.url ||
                        (item.gambar1.asset?._ref
                          ? urlFor(item.gambar1.asset)
                              .width(150)
                              .height(100)
                              .url()
                          : undefined)
                      }
                      alt="Thumbnail"
                      className="w-[150px] h-[100px] object-cover rounded-md"
                    />
                  )}
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-sm line-clamp-4 overflow-hidden overflow-ellipsis group-hover:text-[#E55615]">
                      {item.headline}
                    </h3>
                    <p className="text-gray-400 text-xs">
                      {new Date(item.tanggalPenerbitan).toLocaleDateString(
                        "id-ID",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/berita">
              <button className="px-4 py-2 bg-[#E55615] text-white rounded-md hover:bg-[#C54512] cursor-pointer">
                Lihat Semua Berita
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
