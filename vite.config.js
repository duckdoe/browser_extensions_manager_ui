import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        "dark-gradient": "linear-gradient(180deg, #040918 0%, #091540 100%)",
        "light-gradient": "linear-gradient(180deg, #ebf2fc 0%, #eef8f9 100%)",
      },
    },
  },
};
