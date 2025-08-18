export interface PorfolioItem {
  title: string;
  category: ValidCategories;
  tools: string[];
  tags: string[];
  images: string[];
}

export type ValidCategories = "Desarrollo" | "Diseño";
