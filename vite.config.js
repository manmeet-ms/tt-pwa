import { VitePWA } from "vite-plugin-pwa";
export default {
    plugins: [
        VitePWA({
            // generates 'manifest.webmanifest' file on build
            manifest: {
                name: "Time Table - 5th Semester",
                short_name: "Time Table",
                start_url: "/",
                background_color: "#111827",
                theme_color: "#111827",
                icons: [
                    {
                        src: "/public/favicon.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
            workbox: {
                // defining cached files formats
                globPatterns: ["**/*.{js,css,html,ico,png,svg,webmanifest}"],
            },
        }),
    ],
};
