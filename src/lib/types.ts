export type ContentTag = "ice" | "ev" | "both" | "general";

export type ContentType =
  | "guide"
  | "reference"
  | "comparison"
  | "diagnostic"
  | "calculator"
  | "checklist"
  | "deep-dive"
  | "my-lexi";

export interface ArticleFrontmatter {
  title: string;
  description: string;
  domain: string;
  contentType: ContentType;
  contentTag: ContentTag;
  order: number;
  lastUpdated: string;
  keywords?: string[];
  relatedArticles?: string[];
}

export interface Article {
  slug: string;
  domain: string;
  frontmatter: ArticleFrontmatter;
  content: string;
}

export interface DomainConfig {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  color: string;
  order: number;
}

export interface LexiSpec {
  category: string;
  items: { label: string; value: string }[];
}

export interface MotorModel {
  id: string;
  name: string;
  brand: string;
  type: "ice" | "ev";
  year: number;
  priceOTR: number;
  engine: string;
  power: string;
  torque: string;
  fuelConsumption?: number;
  evConsumption?: number;
  batteryCapacity?: number;
  range?: number;
  weight: number;
  seatHeight: number;
  fuelTank?: number;
  features: string[];
}

export interface ServiceItem {
  km: number;
  items: string[];
  estimatedCost: { dealer: number; bengkel: number };
}

export interface DepreciationCurve {
  category: string;
  rates: number[];
}
