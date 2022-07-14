import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  target: "static",
  generate: {
    fallback: "index.html",
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

