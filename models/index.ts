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

export interface BaseFileContent {
  _dir: string;
  _draft: boolean;
  _extension: string;
  _file: string;
  _id: string;
  _locale: string;
  _partial: boolean;
  _path: string;
  _source: string;
  _type: string;
}
