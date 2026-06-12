export type SocialLinks = {
  instagram?: string;
  facebook?: string;
  tiktok?: string;
};

export type SiteConfig = {
  segment: "retail" | "services" | "food" | "general";
  businessName: string;
  slogan: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  whatsapp: string;
  phone: string;
  email: string;
  address: string;
  mapsUrl: string;
  mapsLink: string;
  wazeLink: string;
  domain: string;
  logo: string;
  heroImage: string;
  businessHours: string;
  whatsappDefaultMessage: string;
  content: {
    about: { eyebrow: string; title: string; subtitle: string; body: string };
    services: { eyebrow: string; title: string; subtitle: string };
    catalog: {
      eyebrow: string;
      title: string;
      subtitle: string;
      itemButtonLabel: string;
    };
    location: { eyebrow: string; title: string; subtitle: string };
    social: { eyebrow: string; title: string; subtitle: string };
    cta: { title: string; subtitle: string; buttonLabel: string };
    faq: { eyebrow: string; title: string; subtitle: string };
  };
  social: SocialLinks;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};
