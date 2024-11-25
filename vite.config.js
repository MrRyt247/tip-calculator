import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/tip-calculator/",
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      jquery: "jquery/dist/jquery.min.js",
    },
  },
  optimizeDeps: {
    include: ["jquery"],
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
  },
});
