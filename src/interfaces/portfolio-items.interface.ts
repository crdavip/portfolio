export interface PorfolioItem {
  title: string;
  category: ValidCategories;
  tools: string[];
  tags: string[];
  images: string[];
  demo?: string;
  code?: string;
}

export type ValidCategories = "development" | "design";
