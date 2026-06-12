import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";

export function Location() {
  return (
    <section id="localizacao" className="py-[var(--section-spacing)]">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionTitle
            eyebrow={siteConfig.content.location.eyebrow}
            title={siteConfig.content.location.title}
            subtitle={siteConfig.content.location.subtitle}
          />
          <div className="mt-6 grid gap-2 text-[var(--color-text-muted)]">
            <p>{siteConfig.address}</p>
            <p>{siteConfig.businessHours}</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button href={siteConfig.mapsLink} variant="secondary">
              Abrir no Google Maps
            </Button>
            <Button href={siteConfig.wazeLink} variant="outline">
              Abrir no Waze
            </Button>
          </div>
        </div>
        <Card className="min-h-[320px] overflow-hidden bg-[var(--color-muted)] p-0">
          <iframe
            title={`Mapa da ${siteConfig.businessName}`}
            src={siteConfig.mapsUrl}
            className="h-[320px] w-full border-0 sm:h-[380px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Card>
      </Container>
    </section>
  );
}
