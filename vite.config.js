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
                short_name: "Time Table - 6th Sem",
                description: "6 Semester Schedule",
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
