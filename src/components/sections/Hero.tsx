"use client";

import Image from "next/image";
import { PointerEvent, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { heroSlides } from "@/data/hero-slides";
import { createWhatsAppLink } from "@/lib/whatsapp";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [pointerStartX, setPointerStartX] = useState<number | null>(null);
  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, []);

  const goToPreviousSlide = () => {
    setActiveSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToNextSlide = () => {
    setActiveSlide((current) => (current + 1) % heroSlides.length);
  };

  const finishDrag = (startX: number, endX: number) => {
    const distance = startX - endX;

    if (Math.abs(distance) > 48) {
      if (distance > 0) {
        goToNextSlide();
      } else {
        goToPreviousSlide();
      }
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLElement>) => {
    setPointerStartX(event.clientX);
  };

  const handlePointerUp = (event: PointerEvent<HTMLElement>) => {
    if (pointerStartX === null) {
      return;
    }

    finishDrag(pointerStartX, event.clientX);
    setPointerStartX(null);
  };

  return (
    <section
      id="inicio"
      className="relative touch-pan-y overflow-hidden bg-[var(--color-secondary)]"
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <div className="relative h-[640px] w-full sm:h-[620px] md:h-[600px] lg:h-[560px] xl:h-[clamp(560px,44.8vw,860px)]">
        {heroSlides.map((item, index) => (
          <Image
            key={item.id}
            src={item.image}
            alt={item.imageAlt}
            fill
            unoptimized
            priority={index === 0}
            sizes="100vw"
            className={`object-cover object-[78%_center] transition duration-700 sm:object-[74%_center] lg:object-[68%_center] xl:object-fill ${
              activeSlide === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,249,242,0.94)_0%,rgba(245,233,218,0.76)_48%,rgba(245,233,218,0.08)_84%)] sm:bg-[linear-gradient(90deg,rgba(255,249,242,0.9)_0%,rgba(245,233,218,0.62)_45%,rgba(245,233,218,0.04)_76%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_58%,rgba(0,0,0,0.24)_100%)]" />

        <div className="relative z-10 mx-auto flex h-[640px] w-full max-w-7xl items-center px-6 py-14 sm:h-[620px] sm:px-8 md:h-[600px] lg:h-[560px] lg:px-10 xl:h-[clamp(560px,44.8vw,860px)]">
          <div className="max-w-[22rem] sm:max-w-xl" aria-live="polite">
            <h1
              key={slide.id}
              className="max-w-2xl text-4xl font-bold tracking-normal text-[var(--color-text)] sm:text-5xl lg:text-[68px] lg:leading-[1.02]"
            >
              {slide.title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={slide.primaryHref}>{slide.primaryLabel}</Button>
              <Button href={createWhatsAppLink()} variant="outline">
                {slide.secondaryLabel}
              </Button>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={goToPreviousSlide}
          className="group absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/25 shadow-[0_14px_40px_rgba(59,42,33,0.18)] backdrop-blur-md transition hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-dark)]/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] md:flex lg:left-7 lg:h-12 lg:w-12"
          aria-label="Voltar capa"
        >
          <span className="h-3.5 w-3.5 -rotate-45 border-l-2 border-t-2 border-white transition group-hover:-translate-x-0.5" />
        </button>
        <button
          type="button"
          onClick={goToNextSlide}
          className="group absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-black/25 shadow-[0_14px_40px_rgba(59,42,33,0.18)] backdrop-blur-md transition hover:border-[var(--color-primary-light)] hover:bg-[var(--color-primary-dark)]/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] md:flex lg:right-7 lg:h-12 lg:w-12"
          aria-label="Avançar capa"
        >
          <span className="h-3.5 w-3.5 rotate-45 border-r-2 border-t-2 border-white transition group-hover:translate-x-0.5" />
        </button>

        <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={`h-2.5 rounded-full transition ${
                activeSlide === index
                  ? "w-9 bg-[var(--color-primary-dark)]"
                  : "w-2.5 bg-[var(--color-primary-light)] hover:bg-[var(--color-primary)]"
              }`}
              aria-label={`Ir para capa ${index + 1}`}
              aria-current={activeSlide === index ? "true" : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
