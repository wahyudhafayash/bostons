import { type SchemaTypeDefinition } from "sanity";
import { Berita } from "./schemas/berita";
import { Testimoni } from "./schemas/testmoni";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Berita, Testimoni],
};
