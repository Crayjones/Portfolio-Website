// https://astro.build/config
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://crayjones.github.io',
  base: process.env.CI ? '/Portfolio-Website' : '/',
  vite: {
    plugins: [tailwindcss()]
  }
});