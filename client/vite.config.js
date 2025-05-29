import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "cat",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "cat/index.html"),
      },
    },
  },
});
