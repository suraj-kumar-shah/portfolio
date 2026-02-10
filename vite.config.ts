import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  // 🔑 REQUIRED for GitHub Pages
  base: "/portfolio/",

  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist", // ✅ gh-pages expects dist by default
    target: "esnext",
  },

  server: {
    port: 3000,
    open: true,
  },
});
