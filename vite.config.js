import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/auto-ins",
  server: {
    proxy: {
      "/api": {
        target: "https://web.eua.in.ua/eua/api/v15",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    corse: false,
  },
});
