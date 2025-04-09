import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // relative path allows electron to properly use the built files
  build: {
    outDir: "build",
  },
});
