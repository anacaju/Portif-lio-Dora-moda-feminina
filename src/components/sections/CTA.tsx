import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function CTA() {
  return (
    <section className="bg-[var(--color-muted)] pt-0 pb-14">
      <Container className="max-w-5xl">
        <div className="rounded-b-[24px] border border-t-0 border-[var(--color-primary-light)]/80 bg-[var(--color-premium)] px-5 py-6 text-white shadow-[0_18px_38px_rgba(59,42,33,0.15)] ring-1 ring-[var(--color-secondary)]/20 sm:px-8 lg:px-10">
          <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-2 text-xs font-bold uppercase text-[var(--color-primary-light)]">
                Atendimento personalizado
              </p>
              <h2 className="text-2xl font-bold tracking-normal sm:text-3xl">{siteConfig.content.cta.title}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-secondary)]/90">
                {siteConfig.content.cta.subtitle}
              </p>
            </div>
            <Button href={createWhatsAppLink()} variant="outline" className="min-h-11 border-[var(--color-primary-light)] bg-[var(--color-secondary)] text-[var(--color-primary-dark)] hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-text)]">
              {siteConfig.content.cta.buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
