import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { siteConfig } from "@/config/site.config";
import { faqs } from "@/data/faqs";

export function FAQ() {
  return (
    <section id="faq" className="bg-[var(--color-muted)] py-[var(--section-spacing)]">
      <Container>
        <SectionTitle
          eyebrow={siteConfig.content.faq.eyebrow}
          title={siteConfig.content.faq.title}
          subtitle={siteConfig.content.faq.subtitle}
          align="center"
        />
        <div className="mx-auto mt-10 grid max-w-3xl gap-4">
          {faqs.map((faq) => (
            <Card key={faq.question}>
              <h3 className="font-bold text-[var(--color-text)]">{faq.question}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--color-text-muted)]">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
