import { MARQUEE_ITEMS } from "@/data/site";

export default function Marquee() {
  const row = (ariaHidden) => (
    <div
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center"
      data-testid={ariaHidden ? undefined : "marquee-track"}
    >
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="font-heading text-2xl md:text-3xl font-semibold uppercase tracking-wide text-white/90 px-6 whitespace-nowrap">
            {item}
          </span>
          <span className="inline-block h-2 w-2 rounded-full bg-brand-red" aria-hidden="true" />
        </span>
      ))}
    </div>
  );
  return (
    <div
      className="relative overflow-hidden border-y border-brand-darkline bg-brand-charcoal py-5"
      data-testid="product-marquee"
    >
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
