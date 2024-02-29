import { glob } from "glob";
import * as path from "path";

export const routeMap = {
  "/categories": "categories/*.md",
};

export const otherRoutes = [];

export default defineNuxtConfig({
  app: { pageTransition: { name: "page", mode: "out-in" } },
  target: "static",
  generate: {
    routes: ([] as string[]).concat(getDynamicPaths(routeMap)),
  },
  iis: {
    // merges in a pre-exisiting web.config file to the nitro default file
    mergeConfig: true,
    // overrides the default nitro web.config file all together
    overrideConfig: false,
  },
  shim: false,
  modules: ["@vueuse/nuxt", "@nuxt/content"],
  css: [
    "~/assets/fonts/poppins/poppins.css",
    "~/assets/fonts/endoc-icons/endoc-icons.css",
    "~/assets/base.css",
    "~/node_modules/primeflex/primeflex.css",
  ],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) =>
        ["swiper-container", "swiper-slide"].includes(tag),
    },
  },
});

function getDynamicPaths(urlFilepathTable: any): string[] {
  return ([] as string[]).concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: "content" })
        .map((filepath: any) => {
          return `${url}/${path.basename(filepath, ".md")}`;
        });
    })
  );
}
