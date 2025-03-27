import { defineField, defineType } from "sanity";

export const Berita = defineType({
  name: "berita",
  title: "Berita",
  type: "document",
  fields: [
    defineField({
      name: "headline",
      title: "Headline",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "headline",
        maxLength: 100,
      },
    }),
    defineField({
      name: "penulis",
      title: "Dipublikasikan Oleh",
      type: "string",
    }),
    defineField({
      name: "tanggalPenerbitan",
      title: "Tanggal Penerbitan",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),

    // Gambar 1
    defineField({
      name: "gambar1",
      title: "Gambar 1",
      type: "image",
    }),
    defineField({
      name: "imagesource1",
      title: "Sumber Foto 1",
      type: "string",
    }),
    defineField({
      name: "paragraph1",
      title: "Paragraph 1",
      type: "text",
    }),
    defineField({
      name: "deskripsigambar1",
      title: "Deskripsi Gambar 1",
      type: "text",
    }),

    // Gambar 2
    defineField({
      name: "gambar2",
      title: "Gambar 2 (TIDAK WAJIB)",
      type: "image",
    }),
    defineField({
      name: "imagesource2",
      title: "Sumber Foto 2 (TIDAK WAJIB)",
      type: "string",
    }),
    defineField({
      name: "paragraph2",
      title: "Paragraph 2 (TIDAK WAJIB)",
      type: "text",
    }),
    defineField({
      name: "deskripsigambar2",
      title: "Deskripsi Gambar 2 (TIDAK WAJIB)",
      type: "text",
    }),

    // Gambar 3
    defineField({
      name: "gambar3",
      title: "Gambar 3 (TIDAK WAJIB)",
      type: "image",
    }),
    defineField({
      name: "imagesource3",
      title: "Sumber Foto 3 (TIDAK WAJIB)",
      type: "string",
    }),
    defineField({
      name: "paragraph3",
      title: "Paragraph 3 (TIDAK WAJIB)",
      type: "text",
    }),
    defineField({
      name: "deskripsigambar3",
      title: "Deskripsi Gambar 3 (TIDAK WAJIB)",
      type: "text",
    }),

    // Gambar 4
    defineField({
      name: "gambar4",
      title: "Gambar 4 (TIDAK WAJIB)",
      type: "image",
    }),
    defineField({
      name: "imagesource4",
      title: "Sumber Foto 4 (TIDAK WAJIB)",
      type: "string",
    }),
    defineField({
      name: "paragraph4",
      title: "Paragraph 4 (TIDAK WAJIB)",
      type: "text",
    }),
    defineField({
      name: "deskripsigambar4",
      title: "Deskripsi Gambar 4 (TIDAK WAJIB)",
      type: "text",
    }),

    // Gambar 5
    defineField({
      name: "gambar5",
      title: "Gambar 5 (TIDAK WAJIB)",
      type: "image",
    }),
    defineField({
      name: "imagesource5",
      title: "Sumber Foto 5 (TIDAK WAJIB)",
      type: "string",
    }),
    defineField({
      name: "paragraph5",
      title: "Paragraph 5 (TIDAK WAJIB)",
      type: "text",
    }),
    defineField({
      name: "deskripsigambar5",
      title: "Deskripsi Gambar 5 (TIDAK WAJIB)",
      type: "text",
    }),
  ],
});
