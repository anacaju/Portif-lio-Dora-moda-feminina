import { siteConfig } from "@/config/site.config";
import type { CatalogItem } from "@/types/catalog";

export function formatWhatsAppNumber(number = siteConfig.whatsapp): string {
  return number.replace(/\D/g, "");
}

export function getDefaultWhatsAppMessage(): string {
  return siteConfig.whatsappDefaultMessage;
}

export function createWhatsAppLink(
  message = getDefaultWhatsAppMessage(),
  number = siteConfig.whatsapp
): string {
  const phone = formatWhatsAppNumber(number);
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function createPublicAssetUrl(path: string): string {
  return createPublicAssetUrlForOrigin(path);
}

export function createPublicAssetUrlForOrigin(path: string, origin?: string): string {
  const browserOrigin = typeof window !== "undefined" ? window.location.origin : "";
  const siteUrl =
    origin?.replace(/\/$/, "") ||
    browserOrigin ||
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    `https://${siteConfig.domain}`;

  return new URL(path, `${siteUrl}/`).toString();
}

export function createCatalogItemWhatsAppMessage(item: CatalogItem, origin?: string): string {
  const imageUrl = createPublicAssetUrlForOrigin(item.image, origin);
  const details = [
    `Olá, vim pelo site e gostaria de consultar esta peça: ${item.name}.`,
    item.price ? `Valor: ${item.price}` : null,
    item.fabric ? `Tecido: ${item.fabric}` : null,
    item.sizes?.length ? `Tamanhos: ${item.sizes.join(", ")}` : null,
    `Foto da peça: ${imageUrl}`
  ].filter(Boolean);

  return details.join("\n");
}
