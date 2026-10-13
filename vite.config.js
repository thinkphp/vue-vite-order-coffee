import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vueJsx()],
  base: "/vue-vite-order-coffee/",
});
