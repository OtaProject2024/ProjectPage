import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/2024/05/" : "./",
    plugins: [vue()],
    build: {
        outDir: "docs",
        chunkSizeWarningLimit: 550,
        rollupOptions: {
            output: {
                manualChunks: {
                    vue: ["vue", "vue-router", "vue-gtag"],
                    three: ["three"],
                },
            },
        },
    },
});
