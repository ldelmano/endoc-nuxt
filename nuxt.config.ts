import glob from "glob";
import path from "path";

export const routeMap = {
  "/categories": "categories/*.md",
};

export const otherRoutes = [];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: { pageTransition: { name: "page", mode: "out-in" } },
  target: "static",
  generate: {
    routes: [].concat(getDynamicPaths(routeMap)),
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

/**
 * Create an array of URLs from a list of files
 * @param {Array} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable: any) {
  return [].concat(
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
