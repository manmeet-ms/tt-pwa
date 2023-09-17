import { VitePWA } from "vite-plugin-pwa";
export default {
    plugins: [
        VitePWA({
            registerType: "autoUpdate",
            devOptions: {
                enabled: true,
            },
            includeAssets: ["**/*.png"],
            manifest: {
                name: "Time Table",
                start_url: "/",
                short_name: "Time Table - 5th Sem",
                description: "5 Semester Schedule",
                icons: [
                    {
                        src: "favicon.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
            },
        }),
    ],
};
