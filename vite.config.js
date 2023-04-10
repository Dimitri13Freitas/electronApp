// import dotenv from "dotenv";
import { defineConfig } from "vite";
// dotenv.config();
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 6969,
  },
});

