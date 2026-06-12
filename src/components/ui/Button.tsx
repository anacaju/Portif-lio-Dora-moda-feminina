import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--color-primary)] text-white shadow-sm hover:bg-[var(--color-primary-dark)] focus-visible:outline-[var(--color-primary)]",
  secondary:
    "bg-[var(--color-accent)] text-white shadow-sm hover:brightness-95 focus-visible:outline-[var(--color-accent)]",
  outline:
    "border border-[var(--color-muted)] bg-[var(--color-surface)] text-[var(--color-text)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)]",
  ghost:
    "text-[var(--color-text)] hover:bg-[var(--color-secondary)] focus-visible:outline-[var(--color-primary)]"
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-11 items-center justify-center rounded-[var(--radius-card)] px-5 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`;

  if (!href) {
    return <span className={classes}>{children}</span>;
  }

  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      className={classes}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
}
