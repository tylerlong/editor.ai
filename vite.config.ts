import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  root: "./client",
  server: {
    port: 8000,
  },
  plugins: [react()],
  base: "/",
  build: {
    outDir: "../dist",
    emptyOutDir: true, // also necessary
  },
});
