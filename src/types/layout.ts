export type SectionId =
  | "hero"
  | "about"
  | "services"
  | "catalog"
  | "location"
  | "social"
  | "cta"
  | "faq";

export type LayoutConfig = {
  sectionOrder: SectionId[];
  enabledSections: Record<SectionId, boolean>;
  heroVariant: "split" | "centered" | "showcase";
  catalogVariant: "grid" | "compact";
  servicesColumns: 2 | 3 | 4;
  showFloatingWhatsApp: boolean;
  showPrices: boolean;
};
