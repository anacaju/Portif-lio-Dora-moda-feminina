import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site.config";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 64 64"
      className="h-14 w-14"
    >
      <defs>
        <radialGradient id="instagram-gradient" cx="30%" cy="107%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="64" height="64" rx="18" fill="url(#instagram-gradient)" />
      <rect
        x="17"
        y="17"
        width="30"
        height="30"
        rx="9"
        fill="none"
        stroke="white"
        strokeWidth="4"
      />
      <circle cx="32" cy="32" r="8" fill="none" stroke="white" strokeWidth="4" />
      <circle cx="42.5" cy="21.5" r="2.8" fill="white" />
    </svg>
  );
}

export function SocialLinks() {
  const instagramUrl = siteConfig.social.instagram;
  if (!instagramUrl) return null;

  return (
    <section className="bg-[var(--color-muted)] pt-10 pb-0">
      <Container className="max-w-5xl">
        <div className="grid gap-5 rounded-t-[24px] border border-b-0 border-[var(--color-primary-light)]/80 bg-[var(--color-background)] p-5 shadow-[0_14px_34px_rgba(59,42,33,0.07)] md:grid-cols-[1fr_172px] md:items-center lg:p-7">
          <SectionTitle
            eyebrow={siteConfig.content.social.eyebrow}
            title={siteConfig.content.social.title}
            subtitle={siteConfig.content.social.subtitle}
          />

          <div className="flex flex-col items-start gap-3 rounded-[20px] border border-[var(--color-primary-light)]/70 bg-[var(--color-surface)] p-4 shadow-[0_10px_24px_rgba(59,42,33,0.06)] md:items-center">
            <Link
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir Instagram da Dora"
              className="rounded-[20px] transition hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]"
            >
              <InstagramIcon />
            </Link>
            <Button
              href={instagramUrl}
              variant="outline"
              className="min-h-11 rounded-[var(--radius-card)] border-[var(--color-primary-light)] bg-[var(--color-background)] text-[var(--color-primary-dark)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              Ver perfil
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
