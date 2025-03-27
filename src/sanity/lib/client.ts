// src/sanity/lib/client.ts
import { createClient } from "next-sanity";
import { apiVersion, dataset, projectId } from "../env";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

export const getAllNews = async () => {
  const query = `*[_type == "berita"] | order(tanggalPenerbitan desc) {
    _id,
    headline,
    slug,
    gambar1,
    gambar2,
    gambar3,
    gambar4,
    gambar5,
    deskripsigambar1,
    deskripsigambar2,
    deskripsigambar3,
    deskripsigambar4,
    deskripsigambar5,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    imagesource1,
    imagesource2,
    imagesource3,
    imagesource4,
    imagesource5,
    tanggalPenerbitan
  }`;

  try {
    const newsData = await client.fetch(query);
    return newsData;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export async function getNewsBySlug(slug: string) {
  const query = `*[_type == "berita" && slug.current == $slug][0]{
    _id,
    headline,
    paragraph1,
    paragraph2,
    paragraph3,
    paragraph4,
    paragraph5,
    tanggalPenerbitan,
    "gambar1": {
      "asset": gambar1.asset->{
        _ref,
        url,
        _id
      }
    },
    "gambar2": {
      "asset": gambar2.asset->{
        _ref,
        url,
        _id
      }
    },
    "gambar3": {
      "asset": gambar3.asset->{
        _ref,
        url,
        _id
      }
    },
    "gambar4": {
      "asset": gambar4.asset->{
        _ref,
        url,
        _id
      }
    },
    "gambar5": {
      "asset": gambar5.asset->{
        _ref,
        url,
        _id
      }
    },
    deskripsigambar1,
    deskripsigambar2,
    deskripsigambar3,
    deskripsigambar4,
    deskripsigambar5,
    imagesource1,
    imagesource2,
    imagesource3,
    imagesource4,
    imagesource5,
    penulis,
    slug
  }`;

  return await client.fetch(query, { slug });
}

export const getAllTestimoni = async () => {
  const query = `*[_type == "testimoni"]  {
    _id,
    testimoni
  }`;

  try {
    const newsData = await client.fetch(query);
    return newsData;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
