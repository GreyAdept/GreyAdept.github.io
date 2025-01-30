import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import cloudflare from '@astrojs/cloudflare';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) =>
        page !== 'https://tyhjyydenvalu.com/gallery_1513' &&
        page !== 'https://tyhjyydenvalu.com/tekijat' &&
        page !== 'https://tyhjyydenvalu.com/essee' ,
    }),
  ],
  output: 'server',
  //site: 'https://GreyAdept.github.io',
  //base: '/greyadept.github.io',
  adapter: cloudflare()
});