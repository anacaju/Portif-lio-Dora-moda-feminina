export type CatalogCategory = {
  id: string;
  label: string;
};

export type CatalogItem = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  fabric?: string;
  sizes?: string[];
  aspect?: "square" | "portrait" | "tall" | "wide";
  price?: string;
  priceValue?: number;
  badge?: string;
  featured?: boolean;
  whatsappMessage?: string;
};
