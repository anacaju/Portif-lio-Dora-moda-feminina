import Link from "next/link";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { createWhatsAppLink } from "@/lib/whatsapp";
import type { SectionId } from "@/types/layout";

const sectionLinks: Partial<Record<SectionId, { href: string; label: string }>> = {
  about: { href: "#sobre", label: "Sobre" },
  services: { href: "#servicos", label: "Diferenciais" },
  catalog: { href: "#catalogo", label: "Catálogo" },
  location: { href: "#localizacao", label: "Localização" },
  faq: { href: "#faq", label: "FAQ" }
};

export function Header() {
  const navLinks = layoutConfig.sectionOrder
    .filter((sectionId) => layoutConfig.enabledSections[sectionId] && sectionLinks[sectionId])
    .map((sectionId) => sectionLinks[sectionId]!);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-muted)] bg-[var(--color-background)] shadow-sm">
      <Container className="flex h-20 items-center justify-between gap-4">
        <Link
          href="/"
          aria-label={`${siteConfig.businessName} - início`}
          className="group flex min-w-0 items-center gap-3"
        >
          <div className="flex min-w-0 items-center gap-3">
            <span
              className="relative inline-flex shrink-0 pr-5 text-[var(--color-text)] transition group-hover:text-[var(--color-primary-dark)]"
            >
              <span
                className="brand-wordmark text-[38px] font-bold leading-none sm:text-[42px]"
              >
                Dora
              </span>
              <span
                aria-hidden="true"
                className="absolute right-0 top-0 text-lg leading-none text-[var(--color-primary-dark)]"
              >
                ✦
              </span>
            </span>
          </div>
          <span className="hidden h-8 w-px bg-[var(--color-muted)] md:block" />
          <p className="hidden shrink-0 whitespace-nowrap text-xs text-[var(--color-text-muted)] md:block">
            {siteConfig.slogan}
          </p>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-bold text-[var(--color-text)] transition hover:text-[var(--color-primary-dark)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href={createWhatsAppLink()} variant="secondary">
            Entrar em contato
          </Button>
        </div>
        <MobileMenu links={navLinks} />
      </Container>
    </header>
  );
}
