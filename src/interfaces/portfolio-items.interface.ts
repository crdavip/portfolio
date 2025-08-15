export interface PorfolioItem {
  title: string;
  category: ValidCategories;
  tools: string[];
  tags: string[];
  cover: string;
}

export type ValidCategories = "Desarrollo" | "Diseño";
