import type { Metadata } from "next";
import { siteConfig } from "@/config/site.config";

export function getSiteMetadata(): Metadata {
  const canonical = `https://${siteConfig.domain}`;

  return {
    metadataBase: new URL(canonical),
    title: siteConfig.seo.title,
    description: siteConfig.seo.description,
    keywords: siteConfig.seo.keywords,
    alternates: {
      canonical
    },
    openGraph: {
      title: siteConfig.seo.title,
      description: siteConfig.seo.description,
      url: canonical,
      siteName: siteConfig.businessName,
      locale: "pt_BR",
      type: "website"
    }
  };
}
