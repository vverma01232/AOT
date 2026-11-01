import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function TechPlaceholder({ label }) {
  const initials = label
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  return (
    <div
      className="flex h-full w-full items-center justify-center bg-brand-charcoal blueprint-grid"
      aria-hidden="true"
    >
      <div className="relative flex items-center justify-center">
        <span className="font-heading text-5xl font-bold uppercase tracking-widest text-white/15">
          {initials}
        </span>
        <span className="absolute h-10 w-10 border border-brand-red/60 rotate-45" />
      </div>
    </div>
  );
}

export default function ProductCard({ product, index }) {
  const num = String(index + 1).padStart(2, "0");
  return (
    <article
      className="group relative flex h-full flex-col border border-brand-line bg-white transition-all duration-300 hover:border-brand-red hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 rounded-2xl overflow-hidden"
      data-testid={`product-card-${product.slug}`}
    >
      <div className="relative block overflow-hidden border-b border-brand-line">
        <Link to={`/products/${product.slug}`} aria-label={`View ${product.name}`} data-testid={`product-image-link-${product.slug}`}>
          <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-brand-light">
            {product.image ? (
              <img
                src={product.image}
                alt={`${product.name} — oilfield equipment manufactured by AOT UAE`}
                loading="lazy"
                className="h-full w-full object-contain p-5 sm:p-7"
              />
            ) : (
              <TechPlaceholder label={product.name} />
            )}
          </div>
        </Link>
        <span className="absolute top-3 left-3 bg-brand-charcoal px-3 py-1 font-mono-tech text-[11px] font-semibold tracking-[0.2em] text-white rounded-full">
          {num}
        </span>
        {product.core && (
          <span className="absolute top-3 right-3 bg-brand-red px-3 py-1 font-mono-tech text-[11px] font-semibold tracking-[0.2em] text-white rounded-full">
            CORE RANGE
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight text-brand-charcoal">
          <Link
            to={`/products/${product.slug}`}
            className="transition-colors group-hover:text-brand-red"
            data-testid={`product-title-${product.slug}`}
          >
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-brand-text2">{product.short}</p>
        <div className="mt-6 flex items-center justify-between border-t border-brand-line pt-4">
          <Link
            to={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 font-mono-tech text-xs font-semibold uppercase tracking-[0.15em] text-brand-charcoal transition-colors hover:text-brand-red"
            data-testid={`product-explore-${product.slug}`}
          >
            Explore Product <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to={`/contact?product=${encodeURIComponent(product.name)}`}
            className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold uppercase tracking-[0.15em] text-brand-red hover:text-brand-redhover"
            data-testid={`product-quote-${product.slug}`}
          >
            Quote <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
