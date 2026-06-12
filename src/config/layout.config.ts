import type { LayoutConfig } from "@/types/layout";

export const layoutConfig: LayoutConfig = {
  sectionOrder: [
    "hero",
    "catalog",
    "about",
    "services",
    "location",
    "social",
    "cta",
    "faq"
  ],
  enabledSections: {
    hero: true,
    about: true,
    services: true,
    catalog: true,
    location: true,
    social: true,
    cta: true,
    faq: true
  },
  heroVariant: "split",
  catalogVariant: "grid",
  servicesColumns: 3,
  showFloatingWhatsApp: true,
  showPrices: true
};
