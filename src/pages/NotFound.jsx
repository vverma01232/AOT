import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import useSeo from "@/hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found (404)",
    description: "The page you are looking for does not exist. Explore AOT UAE's oilfield equipment catalog.",
    path: "/404",
  });

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-brand-charcoal grain pt-24" data-testid="notfound-page">
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
      <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8 w-full py-24">
        <p className="font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
          Error 404 — Page Not Found
        </p>
        <p className="mt-6 font-heading text-[26vw] sm:text-[180px] font-extrabold uppercase leading-none text-white/10 select-none" aria-hidden="true">
          404
        </p>
        <h1 className="-mt-10 sm:-mt-24 font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
          This line runs dry<span className="text-brand-red">.</span>
        </h1>
        <p className="mt-5 max-w-md text-base leading-relaxed text-white/60">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Head back to the
          homepage, or browse our oilfield equipment catalog.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
            data-testid="notfound-home-button"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <Link
            to="/products"
            className="inline-flex items-center border border-white/30 px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:border-brand-red hover:bg-brand-red rounded-full"
            data-testid="notfound-products-button"
          >
            View Products
          </Link>
        </div>
      </div>
    </section>
  );
}
