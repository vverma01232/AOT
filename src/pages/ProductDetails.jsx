import { Link, useParams } from "react-router-dom";
import { ChevronRight, ArrowLeft, ArrowRight, Phone, Mail, FileText } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { getProduct, PRODUCTS } from "@/data/products";
import { COMPANY } from "@/data/site";
import { FadeUp, Overline } from "@/components/Reveal";
import ProductCard, { TechPlaceholder } from "@/components/ProductCard";
import NotFound from "@/pages/NotFound";

export default function ProductDetail() {
  const { slug } = useParams();
  const product = getProduct(slug);

  useSeo({
    title: product ? product.name : "Product Not Found",
    description: product ? product.short : undefined,
    path: product ? `/products/${product.slug}` : "/products",
  });

  if (!product) return <NotFound />;

  const related = product.related.map(getProduct).filter(Boolean);
  const idx = PRODUCTS.indexOf(product);
  const prev = PRODUCTS[(idx - 1 + PRODUCTS.length) % PRODUCTS.length];
  const next = PRODUCTS[(idx + 1) % PRODUCTS.length];

  return (
    <>
      {/* Breadcrumb header */}
      <section className="relative overflow-hidden bg-brand-charcoal grain pt-40 pb-14" data-testid="product-detail-hero">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white/50" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-white" data-testid="breadcrumb-home">Home</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <Link to="/products" className="hover:text-white" data-testid="breadcrumb-products">Products</Link>
            <ChevronRight className="h-3 w-3" aria-hidden="true" />
            <span className="text-brand-red">{product.name}</span>
          </nav>
          <div className="mt-6 flex flex-wrap items-end justify-between gap-6">
            <FadeUp>
              <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
                {product.name}
              </h1>
              {product.core && (
                <span className="mt-4 inline-block bg-brand-red px-3 py-1.5 font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-white rounded-full">
                  Core Range
                </span>
              )}
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" data-testid="product-detail-body">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main column */}
          <div className="lg:col-span-8">
            <FadeUp>
              <div className="corner-ticks relative border border-brand-line bg-brand-light p-2">
                <div className="aspect-[16/10] overflow-hidden">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={`${product.name} — manufactured and supplied by AOT UAE, Sharjah`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <TechPlaceholder label={product.name} />
                  )}
                </div>
              </div>
              {product.brochureImage && product.brochureImage !== product.image && (
                <div className="mt-5 flex items-center gap-5 border border-brand-line bg-white p-4 rounded-2xl">
                  <img
                    src={product.brochureImage}
                    alt={`${product.name} — image from the AOT UAE catalogue`}
                    loading="lazy"
                    className="h-24 w-24 object-contain bg-white rounded-xl"
                  />
                  <div>
                    <p className="flex items-center gap-2 font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red">
                      <FileText className="h-3.5 w-3.5" /> From our catalogue
                    </p>
                    <p className="mt-1 text-sm text-brand-text2">
                      The reference photograph of this product line, as published in the official AOT UAE brochure.
                    </p>
                  </div>
                </div>
              )}
            </FadeUp>

            <FadeUp delay={0.05}>
              <h2 className="mt-12 font-heading text-3xl font-bold uppercase tracking-tight text-brand-charcoal">
                Overview
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-brand-graphite max-w-3xl">
                {product.overview}
              </p>
            </FadeUp>

            {product.specs?.length > 0 && (
              <FadeUp delay={0.08}>
                <h2 className="mt-12 font-heading text-3xl font-bold uppercase tracking-tight text-brand-charcoal">
                  Specifications
                </h2>
                <table className="mt-5 w-full border-collapse border border-brand-line text-left" data-testid="product-specs-table">
                  <tbody>
                    {product.specs.map((s, i) =>
                      s.k ? (
                        <tr key={i} className="border-b border-brand-line last:border-0">
                          <th
                            scope="row"
                            className="w-[38%] bg-brand-light px-4 py-3.5 align-top font-mono-tech text-[11px] font-semibold uppercase tracking-[0.15em] text-brand-text2"
                          >
                            {s.k}
                          </th>
                          <td className="px-4 py-3.5 font-mono-tech text-sm text-brand-charcoal">{s.v}</td>
                        </tr>
                      ) : (
                        <tr key={i} className="border-b border-brand-line last:border-0">
                          <td colSpan={2} className="px-4 py-3 font-mono-tech text-sm text-brand-charcoal">
                            <span className="mr-2 text-brand-red" aria-hidden="true">—</span>
                            {s.v}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </FadeUp>
            )}

            {product.applications && (
              <FadeUp delay={0.1}>
                <h2 className="mt-12 font-heading text-3xl font-bold uppercase tracking-tight text-brand-charcoal">
                  Applications
                </h2>
                <p className="mt-4 border-l-2 border-brand-red bg-brand-light p-5 rounded-r-2xl text-base leading-relaxed text-brand-graphite max-w-3xl">
                  {product.applications}
                </p>
              </FadeUp>
            )}

            <FadeUp delay={0.12}>
              <div className="mt-12 border border-brand-line bg-brand-light p-6 rounded-2xl" data-testid="product-spec-contact-note">
                <p className="font-heading text-2xl font-semibold uppercase tracking-tight text-brand-charcoal">
                  Need a specification that isn&rsquo;t listed?
                </p>
                <p className="mt-2 text-sm leading-relaxed text-brand-text2">
                  We publish only verified details. Contact our team with your requirement — sizes,
                  figures, materials or pressure ratings — and we will confirm what we can supply.
                </p>
              </div>
            </FadeUp>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4">
            <div className="lg:sticky lg:top-24 space-y-6">
              <FadeUp delay={0.06}>
                <div className="border border-brand-line bg-white shadow-xl shadow-black/5 border-t-4 border-t-brand-red p-7 rounded-2xl" data-testid="product-quote-panel">
                  <Overline>Request a Quote</Overline>
                  <p className="mt-4 text-sm leading-relaxed text-brand-text2">
                    Tell us what you need — sizes, figures, quantities and destination — and our
                    team will respond with a quotation.
                  </p>
                  <Link
                    to={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="mt-6 flex w-full items-center justify-center gap-2 bg-brand-red px-6 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
                    data-testid="product-request-quote-button"
                  >
                    Request a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                  <div className="mt-5 space-y-3 border-t border-brand-line pt-5">
                    <a
                      href={`tel:${COMPANY.phoneHref}`}
                      className="flex items-center gap-3 font-mono-tech text-sm text-brand-charcoal hover:text-brand-red"
                      data-testid="product-call-link"
                    >
                      <Phone className="h-4 w-4 text-brand-red" /> {COMPANY.phoneDisplay}
                    </a>
                    <a
                      href={`mailto:${COMPANY.email}?subject=${encodeURIComponent(`Product Inquiry — ${product.name}`)}`}
                      className="flex items-center gap-3 font-mono-tech text-sm text-brand-charcoal hover:text-brand-red"
                      data-testid="product-email-link"
                    >
                      <Mail className="h-4 w-4 text-brand-red" /> {COMPANY.email}
                    </a>
                  </div>
                  <a
                    href={COMPANY.brochure}
                    download
                    className="mt-5 flex w-full items-center justify-center gap-2 border-2 border-brand-charcoal px-6 py-3.5 font-heading text-base font-semibold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white rounded-full"
                    data-testid="product-brochure-download"
                  >
                    <FileText className="h-4 w-4" /> Download Company Brochure
                  </a>
                </div>
              </FadeUp>
            </div>
          </aside>
        </div>
      </section>

      {/* Related products */}
      {related.length > 0 && (
        <section className="border-t border-brand-line bg-brand-light py-16 lg:py-24" data-testid="product-related-section">
          <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
            <FadeUp>
              <Overline>Related Products</Overline>
              <h2 className="mt-4 font-heading text-4xl font-bold uppercase tracking-tight text-brand-charcoal">
                Often sourced together
              </h2>
            </FadeUp>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {related.map((p, i) => (
                <FadeUp key={p.slug} delay={0.05 * i}>
                  <ProductCard product={p} index={i} />
                </FadeUp>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Prev / next */}
      <section className="border-t border-brand-line bg-white" data-testid="product-prevnext">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2">
          <Link
            to={`/products/${prev.slug}`}
            className="group flex items-center gap-4 border-b sm:border-b-0 sm:border-r border-brand-line py-8 pr-6 transition-colors hover:bg-brand-light/60"
            data-testid="product-prev-link"
          >
            <ArrowLeft className="h-5 w-5 text-brand-red transition-transform duration-300 group-hover:-translate-x-1" />
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-brand-text2">Previous</p>
              <p className="font-heading text-2xl font-semibold uppercase tracking-tight text-brand-charcoal group-hover:text-brand-red">
                {prev.name}
              </p>
            </div>
          </Link>
          <Link
            to={`/products/${next.slug}`}
            className="group flex items-center justify-end gap-4 py-8 pl-6 text-right transition-colors hover:bg-brand-light/60"
            data-testid="product-next-link"
          >
            <div>
              <p className="font-mono-tech text-[11px] uppercase tracking-[0.2em] text-brand-text2">Next</p>
              <p className="font-heading text-2xl font-semibold uppercase tracking-tight text-brand-charcoal group-hover:text-brand-red">
                {next.name}
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-brand-red transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </>
  );
}
