import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Footer() {
  const socials = Object.entries(siteConfig.social).filter(([, url]) => Boolean(url));

  return (
    <footer className="border-t border-[var(--color-muted)] bg-[var(--color-footer)] py-12 text-[var(--color-text)]">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="brand-wordmark text-3xl font-bold text-[var(--color-text)]">
              {siteConfig.businessName}
            </p>
            <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-text-muted)]">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-sm font-semibold text-[var(--color-primary-dark)]">
              {siteConfig.slogan}
            </p>
          </div>

          <div>
            <p className="font-semibold text-[var(--color-primary-dark)]">Contato</p>
            <div className="mt-3 grid gap-2 text-sm text-[var(--color-text-muted)]">
              <Link
                href={createWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[var(--color-primary-dark)]"
              >
                WhatsApp: {siteConfig.phone}
              </Link>
              {siteConfig.email ? (
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="transition hover:text-[var(--color-primary-dark)]"
                >
                  {siteConfig.email}
                </Link>
              ) : null}
              <span>{siteConfig.address}</span>
              <span>{siteConfig.businessHours}</span>
            </div>
          </div>

          <div>
            <p className="font-semibold text-[var(--color-primary-dark)]">Redes sociais</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm text-[var(--color-text-muted)]">
              {socials.length > 0 ? (
                socials.map(([name, url]) => (
                  <Link
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[var(--color-muted)] bg-[var(--color-surface)] px-3 py-1 capitalize transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)]"
                  >
                    {name}
                  </Link>
                ))
              ) : (
                <span>Configure as redes sociais no site.config.ts.</span>
              )}
            </div>
          </div>
        </div>

        <p className="mt-10 border-t border-[var(--color-muted)] pt-6 text-sm text-[var(--color-text-muted)]">
          © {new Date().getFullYear()} {siteConfig.businessName}. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
