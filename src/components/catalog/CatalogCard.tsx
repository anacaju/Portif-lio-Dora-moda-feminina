"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { createCatalogItemWhatsAppMessage, createWhatsAppLink } from "@/lib/whatsapp";
import type { CatalogItem } from "@/types/catalog";

type CatalogCardProps = {
  item: CatalogItem;
  compact?: boolean;
};

const aspectClasses: Record<NonNullable<CatalogItem["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[4/5]",
  tall: "aspect-[2/3]",
  wide: "aspect-[4/3]"
};

export function CatalogCard({ item, compact = false }: CatalogCardProps) {
  const message = item.whatsappMessage ?? createCatalogItemWhatsAppMessage(item);
  const aspect = compact ? "aspect-[4/5]" : aspectClasses[item.aspect ?? "portrait"];

  return (
    <article className="group overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)]">
      <div className={`relative overflow-hidden ${aspect}`}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-95" />

        <div className="absolute left-3 right-3 top-3 flex items-start justify-between gap-2">
          {item.badge ? (
            <span className="rounded-full bg-[var(--color-surface)] px-3 py-1 text-xs font-bold text-[var(--color-text)]">
              {item.badge}
            </span>
          ) : (
            <span />
          )}
          {layoutConfig.showPrices && item.price ? (
            <span className="rounded-full bg-[var(--color-primary)] px-3 py-1 text-xs font-bold text-white">
              {item.price}
            </span>
          ) : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 text-white">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-5 text-white/85">{item.description}</p>
          <Button
            href={createWhatsAppLink(message)}
            variant="outline"
            className="mt-4 min-h-10 w-full border-white/70 bg-white text-[var(--color-text)] hover:border-white hover:text-[var(--color-text)]"
          >
            {siteConfig.content.catalog.itemButtonLabel}
          </Button>
        </div>
      </div>
    </article>
  );
}
