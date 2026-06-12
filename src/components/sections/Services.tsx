import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { services } from "@/data/services";

export function Services() {
  const columns =
    layoutConfig.servicesColumns === 4
      ? "lg:grid-cols-4"
      : layoutConfig.servicesColumns === 2
        ? "lg:grid-cols-2"
        : "lg:grid-cols-3";

  return (
    <section id="servicos" className="py-[var(--section-spacing)]">
      <Container>
        <SectionTitle
          eyebrow={siteConfig.content.services.eyebrow}
          title={siteConfig.content.services.title}
          subtitle={siteConfig.content.services.subtitle}
          align="center"
        />
        <div className={`mt-10 grid gap-5 md:grid-cols-2 ${columns}`}>
          {services.map((service) => (
            <Card key={service.id} className="h-full">
              {service.icon ? (
                <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
                  {service.icon}
                </span>
              ) : null}
              <h3 className="text-xl font-bold text-[var(--color-text)]">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
