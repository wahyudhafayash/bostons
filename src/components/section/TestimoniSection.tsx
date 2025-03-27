import { getAllTestimoni } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import React from "react";
import { TestimoniProps } from "@/lib/utils";

const Testimoni: React.FC = async () => {
  const testimonis: TestimoniProps[] = await getAllTestimoni();

  return (
    <div className="container mx-auto my-32 px-6">
      <h1 className="font-extrabold text-4xl md:text-6xl text-center mb-20">
        Testimoni Dari Klien Kami
      </h1>

      <div className="grid grid-cols-4 ">
        {testimonis.map((item) => (
          <div
            key={item._id}
            className="flex flex-col items-center rounded-lg shadow-md"
          >
            {/* Gambar Testimoni */}
            {item.testimoni && (
              <div className="w-[250px] aspect-[9/16] rounded overflow-hidden">
                <img
                  src={urlFor(item.testimoni).width(800).url()}
                  alt="Testimoni"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimoni;
