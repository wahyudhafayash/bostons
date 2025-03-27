"use client";
import React, { useState, useEffect } from "react";
import { getAllNews } from "@/sanity/lib/client"; // Ensure path matches
import { urlFor } from "@/sanity/lib/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import { NewsItem } from "@/lib/utils";

export const metadata = {
  title: "NAME",
};

const NewsSection: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchNews = async () => {
      const newsData = await getAllNews();

      const sortedNews = newsData.sort(
        (a: NewsItem, b: NewsItem) =>
          new Date(b.tanggalPenerbitan).getTime() -
          new Date(a.tanggalPenerbitan).getTime()
      );

      setNews(sortedNews.slice(0, 3));
    };

    fetchNews();
  }, []);

  const handleReadMore = (slug: string) => {
    router.push(`/baca/${slug}`);
  };

  return (
    <div className="flex flex-col items-center justify-center my-6 md:mx-20">
      {/* Header Section */}
      <div className="flex flex-col items-center md:items-start md:mb-20">
        <h1 className="font-extrabold text-md md:pl-20 my-6 md:mt-12 text-[#E55615]">
          02.
        </h1>
        <div className="w-screen md:h-16 flex flex-col md:flex-row md:justify-between items-center md:px-20">
          <h1 className="font-extrabold text-4xl md:text-6xl text-center md:text-left">
            Berita
          </h1>
          <button className="flex items-center justify-center py-4 px-8 my-14 text-sm md:text-md font-bold bg-[#292929] hover:bg-[#E55615] rounded-sm uppercase cursor-pointer transition-colors duration-300">
            Lihat Semua Berita
          </button>
        </div>
      </div>

      {/* Services Cards */}
      <div className="flex w-full gap-8">
        {news.map((item) => (
          <div
            key={item._id}
            className="flex flex-col w-full md:w-[450px] p-4 md:h-[auto] bg-[#1F1F1F] rounded-sm"
          >
            {/* Gambar */}
            {item.gambar1 && (
              <div className="w-full h-[200px] rounded">
                <img
                  src={urlFor(item.gambar1).width(500).url()}
                  alt={item.headline}
                  className="w-full h-full object-cover rounded"
                  loading="lazy"
                />
              </div>
            )}

            {/* Konten berita */}
            <div className="flex flex-col flex-grow justify-between">
              {/* Tanggal Penerbitan */}
              <p className="text-sm text-gray-400 my-3">
                {new Date(item.tanggalPenerbitan).toLocaleDateString("id-ID", {
                  weekday: "long",
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </p>

              {/* Headline */}
              <h1 className="text-xl mb-2 font-bold line-clamp-2 hover:text-[#E55615] cursor-pointer">
                {item.headline}
              </h1>

              {/* Paragraf 1 */}
              <p className="text-sm text-white/70 mb-2 tracking-tighter leading-5 overflow-hidden max-h-[80px] line-clamp-3">
                {item.paragraph1}
              </p>

              {/* Tombol Baca Selengkapnya */}
              <button
                onClick={() => handleReadMore(item.slug?.current)} // Use handleReadMore for navigation
                className="flex items-center gap-2 text-sm font-semibold text-[#E55615] hover:text-white/80 transition-colors duration-200 cursor-pointer self-start mt-auto group"
              >
                Baca Selengkapnya{" "}
                <span className="text-md font-bold group-hover:translate-x-2 group transition-transform duration-200">
                  <FaArrowRightLong size={18} />
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
