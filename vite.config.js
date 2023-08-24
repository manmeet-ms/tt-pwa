import { VitePWA } from 'vite-plugin-pwa';
export default {
  plugins: [
    VitePWA({
      // generates 'manifest.webmanifest' file on build
      manifest: {
        // caches the assets/icons mentioned (assets/* includes all the assets present in your src/ directory) 
        includeAssets: ["favicon.ico", "apple-touch-icon.png", "assets/*"],
        name: 'Time Table - 5th Semester',
        short_name: 'Time Table',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#111827',
        icons: [
          {
            src: '/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // defining cached files formats
        globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
      }
    })
  ]
};