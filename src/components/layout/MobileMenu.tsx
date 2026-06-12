"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { createWhatsAppLink } from "@/lib/whatsapp";

type MobileMenuProps = {
  links: Array<{ href: string; label: string }>;
};

export function MobileMenu({ links }: MobileMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex h-11 min-w-11 items-center justify-center rounded-[var(--radius-card)] border border-[var(--color-muted)] bg-[var(--color-surface)] px-3 text-sm font-bold text-[var(--color-text)]"
      >
        {open ? "Fechar" : "Menu"}
      </button>
      {open ? (
        <div className="absolute left-4 right-4 top-20 rounded-[var(--radius-card)] border border-[var(--color-muted)] bg-[var(--color-surface)] p-4 shadow-soft">
          <nav className="grid gap-2">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-semibold text-[var(--color-text-muted)] hover:bg-[var(--color-secondary)] hover:text-[var(--color-text)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={createWhatsAppLink()} className="mt-4 w-full">
            Falar no WhatsApp
          </Button>
        </div>
      ) : null}
    </div>
  );
}
