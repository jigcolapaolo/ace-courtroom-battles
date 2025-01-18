// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import auth from 'auth-astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), auth()],
  output: 'server',
  devToolbar: {
    enabled: false
  },

  base: '/',
  adapter: vercel()
});