import { defineNuxtConfig } from "nuxt";
import glob from "glob";
import path from "path";

export const routeMap = {
  "/categories": "categories/*.md",
  "/products": "products/*.md",
};

export const otherRoutes = [];

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
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
});

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url];
      return glob.sync(filepathGlob, { cwd: "content" }).map((filepath) => {
        return `${url}/${path.basename(filepath, ".md")}`;
      });
    })
  );
}

