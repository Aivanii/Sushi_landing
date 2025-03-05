import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { md } from "vite-plugin-md";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), md()],
  root: "src/app",
});
