import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Base URL for the site (using root path for custom domain)
  plugins: [react()],
});
