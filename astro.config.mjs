import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://aashrithaHQ.github.io',
  base: '/mayanga',
  integrations: [mdx()],
  build: {
    assets: 'asset',
  },
});
