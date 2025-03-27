import { defineField, defineType } from "sanity";

export const Testimoni = defineType({
  name: "testimoni",
  title: "Testimoni",
  type: "document",
  fields: [
    defineField({
      name: "testimoni",
      title: "Gambar Testimoni",
      type: "image",
    }),
  ],
});
