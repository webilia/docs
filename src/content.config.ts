import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        header_button: z
          .object({
            label: z.string(),
            url: z.string().url(),
          })
          .optional(),
      }),
    }),
  }),
};
