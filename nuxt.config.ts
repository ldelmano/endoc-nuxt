import { sync } from "glob";
import * as path from "path";
import type { NuxtConfig } from "nuxt/schema";

export const routeMap = {
  "/categories": "categories/*.md",
};

export const otherRoutes = [];

export default defineNuxtConfig({
  app: { pageTransition: { name: "page", mode: "out-in" } },
  nitro: {
    prerender: {
      routes: ([] as string[]).concat(getDynamicPaths(routeMap)),
    },
  },

  modules: ["@vueuse/nuxt", "@nuxt/content"],

  css: [
    "~/assets/fonts/poppins/poppins.css",
    "~/assets/fonts/endoc-icons/endoc-icons.css",
    "~/assets/base.css",
    "~/node_modules/primeflex/primeflex.css",
  ],

  vue: {
    compilerOptions: {
      isCustomElement: (tag: string) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },

  compatibilityDate: "2025-04-21",
}) satisfies NuxtConfig;

function getDynamicPaths(urlFilepathTable: Record<string, string>): string[] {
  return ([] as string[]).concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      return sync(filepathGlob, { cwd: "content" }).map((filepath: string) => {
        return `${url}/${path.basename(filepath, ".md")}`;
      });
    })
  );
}
