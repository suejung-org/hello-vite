import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { codecovVitePlugin } from "@codecov/vite-plugin";

export default defineConfig({
    build: {
        rollupOptions: {
            input: "./src/main.tsx", // Your main entry file
            output: [
                {
                    format: "es", // Output as ES Module
                    entryFileNames: "[name].mjs",
                    dir: "dist",
                },
                {
                    format: "cjs", // Output as CommonJS Module
                    entryFileNames: "[name].cjs",
                    dir: "dist",
                },
                {
                    format: "umd", // Output as UMD (or you could use iife, etc.)
                    entryFileNames: "[name].js",
                    name: "MyLibrary", // Global variable name for UMD/IIFE
                    dir: "dist",
                },
            ],
        },
    },
    plugins: [
        react(),
        codecovVitePlugin({
            enableBundleAnalysis: true,
            bundleName: "hello-vite",
            uploadToken: process.env.VITE_UPLOAD_TOKEN,
            apiUrl: process.env.VITE_API_URL,
            debug: true,
        }),
    ],
});
