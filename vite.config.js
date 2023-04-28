import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*"],
    },
      includeAssets:[
        "**/*"
      ],
      manifest: {
        background_color: '#ffffff',
        categories: [
          'education',
          'music',
          'security',
          'shopping',
          'social',
          'utilities',
          'weather',
          'business',
        ],
        description:
          'Aplicación para venta de tinacos, plantas de tratamiento de aguas residuales, biodigestores y tratamiento de agua pluvial',
        dir: 'ltr',
        display_override: ['standalone', 'fullscreen'],
        display: 'standalone',
        icons: [
          {
            src: 'assets/images/kvplast.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'assets/images/256.png',
            sizes: '256x256',
            type: 'image/png',
          },
          {
            src: 'assets/images/512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'vite.svg',
            sizes: 'any',
          },
        ],
        lang: 'es-MX',
        name: 'KV PLAST',
        prefer_related_applications: true,
        start_url: '/',
        short_name: 'KV PLAST',
        theme_color: '#ffffff',
      },
    }),
  ],
});