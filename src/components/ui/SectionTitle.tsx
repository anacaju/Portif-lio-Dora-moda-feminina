type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

function renderTitleWithBrand(title: string) {
  const brand = "Dora";
  const parts = title.split(brand);

  if (parts.length === 1) {
    return title;
  }

  return parts.map((part, index) => (
    <span key={`${part}-${index}`}>
      {part}
      {index < parts.length - 1 ? <span className="brand-wordmark">{brand}</span> : null}
    </span>
  ));
}

export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-normal text-[var(--color-text)] sm:text-4xl">
        {renderTitleWithBrand(title)}
      </h2>
      {subtitle ? (
        <p className="mt-4 text-base leading-7 text-[var(--color-text-muted)]">{subtitle}</p>
      ) : null}
    </div>
  );
}
