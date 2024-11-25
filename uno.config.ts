import { defineConfig } from "unocss";
import { presetUno } from "@unocss/preset-uno";
import { presetAttributify } from "@unocss/preset-attributify";

export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        "src/**/*.{js,ts}",
      ],
      // exclude files
      // exclude: []
    },
  },
});
