import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`rounded-[var(--radius-card)] border border-[var(--color-muted)] bg-[var(--color-surface)] p-6 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
