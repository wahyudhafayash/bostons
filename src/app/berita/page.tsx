import { getAllNews } from "@/sanity/lib/client";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { NewsItem } from "@/lib/utils";

export const metadata = {
  title: "All News",
};

const AllNewsPage = async () => {
  const newsData: NewsItem[] = await getAllNews();

  return (
    <div className="my-6 mx-4 md:mx-20">
      <h1 className="font-extrabold text-4xl text-center mb-10">All News</h1>

      {/* List of all news */}
      <div className="flex flex-col gap-8">
        {newsData.map((item) => (
          <div
            key={item._id}
            className="flex flex-col w-full md:w-[450px] p-4 md:h-[auto] bg-[#1F1F1F] rounded-sm"
          >
            {/* Gambar */}
            {item.gambar1 && item.gambar1.asset.url && (
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
              <Link href={`/baca/${item.slug?.current}`}>
                <button className="flex items-center gap-2 text-sm font-semibold text-[#E55615] hover:text-white/80 transition-colors duration-200 cursor-pointer self-start mt-auto group">
                  Baca Selengkapnya{" "}
                  <span className="text-md font-bold group-hover:translate-x-2 group transition-transform duration-200">
                    <FaArrowRightLong size={18} />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllNewsPage;
