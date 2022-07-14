import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Category extends ParsedContent {
  title?: string;
  icon?: string;
  showOnHome?: boolean;
  slug?: string;
}

export interface Product extends ParsedContent {
  title?: string;
  description?: string;
  id?: string;
  thumbnail?: string;
  category?: string;
  attributes?: ProductAttributes;
}

interface ProductAttributes {
  hasSecurityTint?: boolean;
  envelopeSize?: string;
  windowStyle?: string;
  adhesionType?: string;
  compatibility?: string;
  features?: string;
  additional?: string;
}
