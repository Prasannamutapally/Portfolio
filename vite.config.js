import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base "./" keeps asset paths relative so the build works on Netlify,
  // Vercel, and GitHub Pages (project subpaths) without extra config.
  base: "./",
});
