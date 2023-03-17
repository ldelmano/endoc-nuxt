import { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface Category extends ParsedContent {
  title?: string;
  icon?: string;
  showOnHome?: boolean;
  slug?: string;
}

export interface Product extends ParsedContent {
  id?: number;
  title?: string;
  productSlug?: string;
  categorySlug?: string;
  description?: string;
  thumbnail?: string;
  pictures?: ProductPicture[];
  attributes?: ProductAttribute[];
}

interface ProductPicture {
  url: string;
}

interface ProductAttribute {
  label: string;
  value: string;
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
