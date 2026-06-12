import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site.config";

function ClockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7.5v5l3.2 2" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
      <path
        d="M8.2 5.5 6.9 6.8c-.7.7-.8 1.8-.2 2.7 1.8 3 4.1 5.3 7.1 7.1.9.6 2 .5 2.7-.2l1.3-1.3c.5-.5.5-1.3 0-1.8l-1.7-1.7c-.4-.4-1.1-.5-1.6-.2l-1.2.7c-1.5-.9-2.6-2-3.5-3.5l.7-1.2c.3-.5.2-1.2-.2-1.6L9.9 5.5c-.5-.5-1.3-.5-1.7 0Z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-[var(--color-background)] py-[var(--section-spacing)]">
      <Container className="grid gap-8 lg:grid-cols-[0.98fr_1fr] lg:items-end">
        <div className="grid gap-6">
          <div className="max-w-xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
              {siteConfig.content.about.eyebrow}
            </p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-normal text-[var(--color-text)] sm:text-5xl lg:text-6xl">
              {siteConfig.content.about.title}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-text-muted)]">
              {siteConfig.content.about.subtitle}
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[26px] border border-[var(--color-primary-light)]/55 bg-[var(--color-surface)] shadow-[0_18px_40px_rgba(59,42,33,0.10)]">
            <Image
              src="/images/dona-dora.jfif"
              alt="Rejane Miranda, fundadora da Dora"
              width={900}
              height={1600}
              className="h-[460px] w-full object-cover object-[center_18%] sm:h-[560px] lg:h-[610px]"
              sizes="(min-width: 1024px) 42vw, 100vw"
              priority={false}
            />
            <div className="pointer-events-none absolute right-2 top-3 w-[132px] rounded-[14px] border border-[var(--color-primary-light)]/80 bg-[rgba(255,249,242,0.82)] p-0.5 shadow-[0_8px_18px_rgba(59,42,33,0.13)] backdrop-blur-[3px] sm:right-4 sm:top-4 sm:w-[164px]">
              <div className="rounded-[11px] border border-[var(--color-primary)]/35 px-2 py-1 text-center sm:px-2.5 sm:py-1.5">
                <p className="brand-wordmark text-base font-bold leading-none text-[var(--color-primary-dark)] sm:text-lg">
                  Fundadora e CEO
                </p>
                <div className="mt-1 flex items-center justify-center gap-1 text-[var(--color-primary)]">
                  <span className="h-px w-6 bg-[var(--color-primary-light)] sm:w-8" />
                  <span className="text-[8px] leading-none sm:text-[9px]">✤</span>
                  <span className="h-px w-6 bg-[var(--color-primary-light)] sm:w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[26px] border border-[var(--color-primary-light)]/70 bg-[var(--color-surface)] p-6 shadow-[0_18px_44px_rgba(59,42,33,0.09)] sm:p-8 lg:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.35em] text-[var(--color-primary)]">
            Sobre a Dora
          </p>
          <h3 className="mt-6 text-3xl font-bold leading-tight tracking-normal text-[var(--color-text)] sm:text-4xl">
            Elegância com propósito
          </h3>

          <div className="mt-7 flex items-center gap-3 text-[var(--color-primary)]">
            <span className="text-2xl leading-none">✦</span>
            <span className="h-px w-24 bg-[var(--color-primary-light)]" />
          </div>

          <p className="mt-7 text-base leading-8 text-[var(--color-text-muted)]">
            {siteConfig.content.about.body}
          </p>

          <div className="mt-8 border-t border-[var(--color-muted)] pt-8">
            <div className="inline-flex max-w-full items-center gap-3 rounded-[14px] bg-[var(--color-secondary)]/60 px-3 py-3 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-text-muted)]">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                ✤
              </span>
              <span>Curadoria cuidadosa</span>
              <span className="text-[var(--color-primary)]">•</span>
              <span>Moda feminina atemporal</span>
            </div>
          </div>

          <div className="mt-9 grid gap-6 sm:grid-cols-2 sm:divide-x sm:divide-[var(--color-muted)]">
            <div className="flex gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary-dark)]">
                <ClockIcon />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text)]">
                  Atendimento
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">
                  Segunda a sábado,
                  <br />
                  das 08h às 16h
                  <br />
                  <span className="italic">Domingo fechado</span>
                </p>
              </div>
            </div>
            <div className="flex gap-4 sm:pl-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-secondary)] text-[var(--color-primary-dark)]">
                <PhoneIcon />
              </span>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-text)]">
                  Contato direto
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-text-muted)]">{siteConfig.phone}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
