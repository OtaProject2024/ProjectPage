import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    base: process.env.NODE_ENV === "production" ? "/2024/05/" : "./",
    plugins: [vue()],
    build: {
        outDir: "docs",
        chunkSizeWarningLimit: 550,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
                passes: 2,
            },
            mangle: {
                toplevel: true,
            },
            format: {
                comments: false,
            },
        },
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
