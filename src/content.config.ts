import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const camisetas = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/camisetas" }),
  schema: z.object({
    club: z.string(),
    temporada: z.string(),
    tipo: z.string().optional(),
    marca: z.string().optional(),
    patrocinador: z.string().optional(),
    pais: z.string().optional(),
    fotos: z.number(),
    orden: z.number(),
  }),
});

export const collections = { camisetas };
