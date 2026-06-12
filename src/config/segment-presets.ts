import type { ThemeName } from "@/config/theme.config";
import type { LayoutConfig } from "@/types/layout";
import type { SiteConfig } from "@/types/site";

type SegmentPreset = {
  label: string;
  description: string;
  recommendedTheme: ThemeName;
  siteSegment: SiteConfig["segment"];
  layout: Pick<
    LayoutConfig,
    "sectionOrder" | "enabledSections" | "heroVariant" | "catalogVariant" | "showPrices"
  >;
};

export const segmentPresets: Record<"varejo" | "servicos" | "alimentacao", SegmentPreset> = {
  varejo: {
    label: "Loja e varejo",
    description: "Catálogo visual com preço opcional e consulta de produtos pelo WhatsApp.",
    recommendedTheme: "varejoVibrante",
    siteSegment: "retail",
    layout: {
      sectionOrder: ["hero", "catalog", "about", "services", "social", "location", "cta", "faq"],
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
      showPrices: true
    }
  },
  servicos: {
    label: "Prestador de serviços",
    description: "Destaque de serviços, diferenciais, prova de confiança e contato rápido.",
    recommendedTheme: "servicosConfiavel",
    siteSegment: "services",
    layout: {
      sectionOrder: ["hero", "services", "about", "catalog", "cta", "location", "faq", "social"],
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
      heroVariant: "centered",
      catalogVariant: "compact",
      showPrices: false
    }
  },
  alimentacao: {
    label: "Alimentação",
    description: "Cardápio visual, categorias e pedidos iniciados pelo WhatsApp.",
    recommendedTheme: "gastronomiaAcolhedora",
    siteSegment: "food",
    layout: {
      sectionOrder: ["hero", "catalog", "cta", "about", "location", "faq", "social", "services"],
      enabledSections: {
        hero: true,
        about: true,
        services: false,
        catalog: true,
        location: true,
        social: true,
        cta: true,
        faq: true
      },
      heroVariant: "showcase",
      catalogVariant: "grid",
      showPrices: true
    }
  }
};
