import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { theme } from "@/config/theme.config";
import { getSiteMetadata } from "@/lib/seo";

export const metadata: Metadata = getSiteMetadata();

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="font-sans"
        style={
          {
            "--color-primary": theme.primary,
            "--color-secondary": theme.secondary,
            "--color-background": theme.background,
            "--color-muted": theme.muted,
            "--color-text": theme.text,
            "--color-text-muted": theme.textMuted,
            "--color-primary-dark": theme.primaryDark,
            "--color-primary-light": theme.primaryLight,
            "--color-accent": theme.accent,
            "--color-premium": theme.premium,
            "--color-footer": theme.footer,
            "--color-surface": theme.surface,
            "--radius-card": theme.radius,
            "--radius-large": theme.radiusLarge,
            "--section-spacing": theme.sectionSpacing,
            "--font-family": theme.fontFamily
          } as React.CSSProperties
        }
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
