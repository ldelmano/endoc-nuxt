import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Category extends ParsedContent {
  title?: string;
  icon?: string;
  showOnHome?: boolean;
}
