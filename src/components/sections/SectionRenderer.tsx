import type { ComponentType } from "react";
import { About } from "@/components/sections/About";
import { Catalog } from "@/components/sections/Catalog";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Location } from "@/components/sections/Location";
import { Services } from "@/components/sections/Services";
import { SocialLinks } from "@/components/sections/SocialLinks";
import { layoutConfig } from "@/config/layout.config";
import type { SectionId } from "@/types/layout";

const sections: Record<SectionId, ComponentType> = {
  hero: Hero,
  about: About,
  services: Services,
  catalog: Catalog,
  location: Location,
  social: SocialLinks,
  cta: CTA,
  faq: FAQ
};

export function SectionRenderer() {
  return layoutConfig.sectionOrder
    .filter((sectionId) => layoutConfig.enabledSections[sectionId])
    .map((sectionId) => {
      const Section = sections[sectionId];
      return <Section key={sectionId} />;
    });
}
