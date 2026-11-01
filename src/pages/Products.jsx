import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { PRODUCTS } from "@/data/products";
import { FadeUp, Overline } from "@/components/Reveal";
import ProductCard from "@/components/ProductCard";

const FILTERS = [
  { id: "all", label: "All Products" },
  { id: "core", label: "Core Range" },
  { id: "extended", label: "Extended Lines" },
];

export default function Products() {
  useSeo({
    title: "Product Catalog",
    description:
      "Explore the AOT UAE product catalog — flanges, crosses & tees, spools, hammer unions, manifolds, swivel joints, ring joint gaskets, plug valves, pup joints, chiksans, integral fittings, adapters & crossovers and more oilfield equipment manufactured in Sharjah, UAE.",
    path: "/products",
  });

  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  const list = useMemo(() => {
    let l = PRODUCTS;
    if (filter === "core") l = l.filter((p) => p.core);
    if (filter === "extended") l = l.filter((p) => !p.core);
    const q = query.trim().toLowerCase();
    if (q) l = l.filter((p) => (p.name + " " + p.short).toLowerCase().includes(q));
    return l;
  }, [filter, query]);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-charcoal grain pt-40 pb-16" data-testid="catalog-hero">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Overline light>Product Catalog</Overline>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Oilfield equipment,
              <br />
              specified properly<span className="text-brand-red">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/65">
              Every line below is documented in our catalogue. Where a specification matters and
              isn&rsquo;t listed, ask us — we respond with verified details only.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20" data-testid="catalog-section">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 border-b border-brand-line pb-6">
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter products" data-testid="catalog-filters">
              {FILTERS.map((f) => (
                <button
                  key={f.id}
                  role="tab"
                  aria-selected={filter === f.id}
                  onClick={() => setFilter(f.id)}
                  className={`px-5 py-2.5 font-mono-tech text-xs font-semibold uppercase tracking-[0.15em] border transition-colors duration-200 rounded-full ${
                    filter === f.id
                      ? "bg-brand-charcoal text-white border-brand-charcoal"
                      : "bg-white text-brand-text2 border-brand-line hover:border-brand-red hover:text-brand-red"
                  }`}
                  data-testid={`catalog-filter-${f.id}`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-brand-text2" aria-hidden="true" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products… e.g. hammer union"
                aria-label="Search products"
                className="w-full border border-brand-line bg-white py-3 pl-10 pr-4 text-sm outline-none transition-colors focus:border-brand-red rounded-full"
                data-testid="catalog-search-input"
              />
            </div>
          </div>

          {list.length === 0 ? (
            <div className="py-24 text-center" data-testid="catalog-empty-state">
              <p className="font-heading text-3xl font-semibold uppercase text-brand-charcoal">
                No products match “{query}”
              </p>
              <p className="mt-3 text-sm text-brand-text2">
                Try a different term — or ask us directly about your requirement.
              </p>
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" data-testid="catalog-grid">
              {list.map((p, i) => (
                <FadeUp key={p.slug} delay={0.04 * (i % 3)}>
                  <ProductCard product={p} index={i} />
                </FadeUp>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
