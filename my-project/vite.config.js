import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@compoments": path.resolve(__dirname, "./src/compoment"),
      "@data": path.resolve(__dirname, "./src/data"),
    },
  },
})
