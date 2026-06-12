"use client";

import { useMemo, useState } from "react";
import { CatalogCard } from "@/components/catalog/CatalogCard";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { layoutConfig } from "@/config/layout.config";
import { siteConfig } from "@/config/site.config";
import { catalogItems } from "@/data/catalog";
import { categories } from "@/data/categories";
import type { CatalogItem } from "@/types/catalog";

type SortMode = "relevance" | "price-asc" | "price-desc" | "name";

const priceValues = catalogItems
  .map((item) => item.priceValue)
  .filter((price): price is number => typeof price === "number");

const priceBounds = {
  min: Math.floor(Math.min(...priceValues)),
  max: 1000
};

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  maximumFractionDigits: 0
});

const sizeOrder = ["38", "40", "42", "44", "46", "48", "M", "G", "GG"];

function getCategoryLabel(categoryId: string) {
  return categories.find((category) => category.id === categoryId)?.label ?? categoryId;
}

function sortItems(items: CatalogItem[], sortMode: SortMode) {
  return [...items].sort((firstItem, secondItem) => {
    if (sortMode === "price-asc") {
      return (firstItem.priceValue ?? 0) - (secondItem.priceValue ?? 0);
    }

    if (sortMode === "price-desc") {
      return (secondItem.priceValue ?? 0) - (firstItem.priceValue ?? 0);
    }

    if (sortMode === "name") {
      return firstItem.name.localeCompare(secondItem.name, "pt-BR");
    }

    return catalogItems.findIndex((item) => item.id === firstItem.id) -
      catalogItems.findIndex((item) => item.id === secondItem.id);
  });
}

export function Catalog() {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [activeFabric, setActiveFabric] = useState("todos");
  const [activeSizes, setActiveSizes] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(priceBounds.min);
  const [maxPrice, setMaxPrice] = useState(priceBounds.max);
  const [sortMode, setSortMode] = useState<SortMode>("relevance");
  const [filtersOpen, setFiltersOpen] = useState(true);

  const fabrics = useMemo(
    () =>
      Array.from(new Set(catalogItems.map((item) => item.fabric).filter(Boolean))).sort(),
    []
  );

  const sizes = useMemo(() => {
    const availableSizes = Array.from(
      new Set(catalogItems.flatMap((item) => item.sizes ?? []))
    );

    return availableSizes.sort(
      (firstSize, secondSize) => sizeOrder.indexOf(firstSize) - sizeOrder.indexOf(secondSize)
    );
  }, []);

  const filteredItems = catalogItems.filter((item) => {
    const matchesCategory = activeCategory === "todos" || item.category === activeCategory;
    const matchesFabric = activeFabric === "todos" || item.fabric === activeFabric;
    const matchesSize =
      activeSizes.length === 0 ||
      activeSizes.some((size) => item.sizes?.includes(size));
    const price = item.priceValue ?? priceBounds.min;
    const matchesPrice = price >= minPrice && price <= maxPrice;

    return matchesCategory && matchesFabric && matchesSize && matchesPrice;
  });

  const visibleItems = sortItems(filteredItems, sortMode);
  const categoryLabel = getCategoryLabel(activeCategory);
  const priceFilterIsActive = minPrice !== priceBounds.min || maxPrice !== priceBounds.max;
  const hasActiveFilters =
    activeCategory !== "todos" ||
    activeFabric !== "todos" ||
    activeSizes.length > 0 ||
    priceFilterIsActive;
  const activeFilterCount =
    (activeCategory !== "todos" ? 1 : 0) +
    (activeFabric !== "todos" ? 1 : 0) +
    activeSizes.length +
    (priceFilterIsActive ? 1 : 0);

  const rangeDistance = priceBounds.max - priceBounds.min;
  const minPercent = ((minPrice - priceBounds.min) / rangeDistance) * 100;
  const maxPercent = ((maxPrice - priceBounds.min) / rangeDistance) * 100;

  const toggleSize = (size: string) => {
    setActiveSizes((currentSizes) =>
      currentSizes.includes(size)
        ? currentSizes.filter((currentSize) => currentSize !== size)
        : [...currentSizes, size]
    );
  };

  const resetFilters = () => {
    setActiveCategory("todos");
    setActiveFabric("todos");
    setActiveSizes([]);
    setMinPrice(priceBounds.min);
    setMaxPrice(priceBounds.max);
  };

  return (
    <section id="catalogo" className="bg-[var(--color-secondary)] py-[var(--section-spacing)]">
      <Container>
        <SectionTitle
          eyebrow={siteConfig.content.catalog.eyebrow}
          title={siteConfig.content.catalog.title}
          subtitle={siteConfig.content.catalog.subtitle}
          align="center"
        />

        <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-primary-light)] bg-[var(--color-background)] p-4 shadow-soft sm:p-5">
          <div className="flex flex-col gap-3 border-b border-[var(--color-primary-light)] pb-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-lg font-bold text-[var(--color-text)]">Coleção feminina</p>
              <p className="mt-1 text-sm text-[var(--color-text-muted)]">
                {visibleItems.length}{" "}
                {visibleItems.length === 1 ? "peça encontrada" : "peças encontradas"}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                aria-expanded={filtersOpen}
                onClick={() => setFiltersOpen((current) => !current)}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-text)] px-4 text-sm font-bold text-[var(--color-background)] shadow-sm transition hover:bg-[var(--color-primary-dark)]"
              >
                {filtersOpen ? "Ocultar filtros" : "Mostrar filtros"}
                <span className="rounded-full bg-white/15 px-2 py-0.5 text-xs">
                  {activeFilterCount}
                </span>
                <span
                  aria-hidden="true"
                  className={`text-xs transition-transform duration-300 ${
                    filtersOpen ? "rotate-180" : ""
                  }`}
                >
                  v
                </span>
              </button>

              <label className="relative w-full sm:w-auto">
                <span className="sr-only">Ordenar catálogo</span>
                <select
                  value={sortMode}
                  onChange={(event) => setSortMode(event.target.value as SortMode)}
                  className="h-10 w-full appearance-none rounded-full border border-[var(--color-primary-light)] bg-[var(--color-surface)] px-4 pr-9 text-sm font-semibold text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)] sm:min-w-[170px]"
                >
                  <option value="relevance">Ordenar: Relevância</option>
                  <option value="price-asc">Menor preço</option>
                  <option value="price-desc">Maior preço</option>
                  <option value="name">Nome da peça</option>
                </select>
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                  v
                </span>
              </label>

              <button
                type="button"
                onClick={resetFilters}
                className="h-10 rounded-full border border-[var(--color-primary-light)] bg-[var(--color-surface)] px-4 text-sm font-bold text-[var(--color-text)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Limpar filtros
              </button>
            </div>
          </div>

          {!filtersOpen ? (
            <div className="flex flex-wrap items-center gap-3 py-4 text-sm text-[var(--color-text-muted)]">
              <span className="rounded-full border border-[var(--color-primary-light)] bg-[var(--color-surface)] px-4 py-2 font-semibold">
                {activeFilterCount === 0
                  ? "Nenhum filtro ativo"
                  : `${activeFilterCount} ${
                      activeFilterCount === 1 ? "filtro ativo" : "filtros ativos"
                    }`}
              </span>
              <span>{categoryLabel}</span>
              <span>
                {currencyFormatter.format(minPrice)} - {currencyFormatter.format(maxPrice)}
              </span>
            </div>
          ) : null}

          <div
            className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
              filtersOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <div className="grid gap-5 py-5">
                <div>
                  <p className="mb-3 text-xs font-bold uppercase text-[var(--color-primary-dark)]">
                    Categoria
                  </p>
                  <div className="flex flex-wrap gap-3" aria-label="Categorias do catálogo">
                    {categories.map((category) => {
                      const active = category.id === activeCategory;

                      return (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setActiveCategory(category.id)}
                          className={`h-10 rounded-full border px-4 text-sm font-bold transition ${
                            active
                              ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                              : "border-[var(--color-primary-light)] bg-[var(--color-surface)] text-[var(--color-primary-dark)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                          }`}
                        >
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-5 lg:grid-cols-[0.9fr_1.15fr_1.8fr] lg:items-start">
                  <label className="grid gap-3">
                    <span className="text-xs font-bold uppercase text-[var(--color-primary-dark)]">
                      Tecido
                    </span>
                    <span className="relative">
                      <select
                        value={activeFabric}
                        onChange={(event) => setActiveFabric(event.target.value)}
                        className="h-11 w-full appearance-none rounded-[var(--radius-card)] border border-[var(--color-primary-light)] bg-[var(--color-surface)] px-4 pr-10 text-sm font-semibold text-[var(--color-text)] outline-none transition focus:border-[var(--color-accent)]"
                      >
                        <option value="todos">Todos os tecidos</option>
                        {fabrics.map((fabric) => (
                          <option key={fabric} value={fabric}>
                            {fabric}
                          </option>
                        ))}
                      </select>
                      <span className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-[var(--color-text-muted)]">
                        v
                      </span>
                    </span>
                  </label>

                  <div>
                    <p className="mb-3 text-xs font-bold uppercase text-[var(--color-primary-dark)]">
                      Tamanho
                    </p>
                    <div className="flex flex-wrap gap-3" aria-label="Tamanhos disponíveis">
                      {sizes.map((size) => {
                        const active = activeSizes.includes(size);

                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() => toggleSize(size)}
                            className={`h-11 min-w-11 rounded-[var(--radius-card)] border px-3 text-sm font-bold transition ${
                              active
                                ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                                : "border-[var(--color-primary-light)] bg-[var(--color-surface)] text-[var(--color-primary-dark)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <p className="text-xs font-bold uppercase text-[var(--color-primary-dark)]">
                        Faixa de preço
                      </p>
                      <p className="text-sm font-bold text-[var(--color-primary-dark)]">
                        {currencyFormatter.format(minPrice)} - {currencyFormatter.format(maxPrice)}
                      </p>
                    </div>

                    <div className="rounded-[var(--radius-card)] border border-[var(--color-primary-light)] bg-[var(--color-surface)] px-4 py-3">
                      <div className="grid grid-cols-2 gap-4 text-sm text-[var(--color-text-muted)] sm:grid-cols-4">
                        <span>Mín.</span>
                        <strong className="text-[var(--color-text)]">
                          {currencyFormatter.format(minPrice)}
                        </strong>
                        <span>Máx.</span>
                        <strong className="text-[var(--color-text)]">
                          {currencyFormatter.format(maxPrice)}
                        </strong>
                      </div>

                      <div className="relative mt-4 h-6">
                        <div className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full bg-[var(--color-muted)]" />
                        <div
                          className="absolute top-1/2 h-2 -translate-y-1/2 rounded-full bg-[var(--color-accent)]"
                          style={{
                            left: `${minPercent}%`,
                            right: `${100 - maxPercent}%`
                          }}
                        />
                        <input
                          type="range"
                          min={priceBounds.min}
                          max={priceBounds.max}
                          value={minPrice}
                          onChange={(event) => {
                            const nextValue = Number(event.target.value);
                            setMinPrice(Math.min(nextValue, maxPrice));
                          }}
                          aria-label="Preço mínimo"
                          className="catalog-price-range"
                        />
                        <input
                          type="range"
                          min={priceBounds.min}
                          max={priceBounds.max}
                          value={maxPrice}
                          onChange={(event) => {
                            const nextValue = Number(event.target.value);
                            setMaxPrice(Math.max(nextValue, minPrice));
                          }}
                          aria-label="Preço máximo"
                          className="catalog-price-range"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--color-primary-light)] pt-4">
                <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                  <p className="text-sm font-semibold text-[var(--color-primary-dark)]">
                    Filtros ativos
                  </p>
                  <div className="flex flex-1 flex-wrap gap-3">
                    {!hasActiveFilters ? (
                      <span className="rounded-full border border-[var(--color-primary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text-muted)]">
                        Nenhum filtro aplicado
                      </span>
                    ) : null}

                    {activeCategory !== "todos" ? (
                      <button
                        type="button"
                        onClick={() => setActiveCategory("todos")}
                        className="rounded-full border border-[var(--color-primary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
                      >
                        Categoria: {categoryLabel} x
                      </button>
                    ) : null}

                    {activeFabric !== "todos" ? (
                      <button
                        type="button"
                        onClick={() => setActiveFabric("todos")}
                        className="rounded-full border border-[var(--color-primary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
                      >
                        Tecido: {activeFabric} x
                      </button>
                    ) : null}

                    {activeSizes.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => toggleSize(size)}
                        className="rounded-full border border-[var(--color-primary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
                      >
                        Tamanho: {size} x
                      </button>
                    ))}

                    {priceFilterIsActive ? (
                      <button
                        type="button"
                        onClick={() => {
                          setMinPrice(priceBounds.min);
                          setMaxPrice(priceBounds.max);
                        }}
                        className="rounded-full border border-[var(--color-primary-light)] px-4 py-2 text-sm font-semibold text-[var(--color-text)] transition hover:border-[var(--color-accent)]"
                      >
                        Preço: {currencyFormatter.format(minPrice)}-
                        {currencyFormatter.format(maxPrice)} x
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {visibleItems.length > 0 ? (
          <div
            className={`mt-8 grid gap-3 ${
              layoutConfig.catalogVariant === "compact"
                ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            }`}
          >
            {visibleItems.map((item) => (
              <CatalogCard
                key={item.id}
                item={item}
                compact={layoutConfig.catalogVariant === "compact"}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-[var(--radius-card)] border border-[var(--color-muted)] bg-[var(--color-surface)] p-8 text-center">
            <p className="text-lg font-bold text-[var(--color-text)]">
              Nenhuma peça encontrada
            </p>
            <p className="mt-2 text-sm text-[var(--color-text-muted)]">
              Ajuste categoria, tecido, tamanho ou faixa de preço para ver mais opções.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
