import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, FileText } from "lucide-react";
import { COMPANY, NAV_LINKS, assetUrl } from "@/data/site";
import { CORE_PRODUCTS } from "@/data/products";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-white border-t border-brand-darkline" data-testid="site-footer">
      <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <Link to="/" className="inline-block" data-testid="footer-logo-link" aria-label="AOT UAE — Home">
              <img
                src={assetUrl("AOT-logo-outline-v6.png")}
                alt="AOT UAE — Asian Oil Tech logo"
                className="h-14 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-white/60">
              {COMPANY.legalName} — a Sharjah-based manufacturer, exporter and supplier of oilfield
              equipment and industrial products, established in {COMPANY.established}.
            </p>
            <p className="mt-5 font-heading text-lg uppercase tracking-widest text-white/80">
              “Quality is not an act <span className="text-brand-red">— it’s a habit</span>”
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
              Navigate
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    data-testid={`footer-link-${l.to === "/" ? "home" : l.to.replaceAll("/", "").replaceAll("-", "")}`}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
              Products
            </h3>
            <ul className="mt-5 space-y-3">
              {CORE_PRODUCTS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/products/${p.slug}`}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                    data-testid={`footer-product-${p.slug}`}
                  >
                    {p.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                <span>
                  {COMPANY.address.line1},<br />
                  {COMPANY.address.line2},<br />
                  {COMPANY.address.city}
                </span>
              </li>
              <li>
                <a href={`tel:${COMPANY.phoneHref}`} className="flex gap-3 hover:text-white transition-colors" data-testid="footer-phone">
                  <Phone className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${COMPANY.email}`} className="flex gap-3 hover:text-white transition-colors" data-testid="footer-email">
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a href={COMPANY.domain} className="flex gap-3 hover:text-white transition-colors" data-testid="footer-website">
                  <Globe className="h-4 w-4 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                  www.aotuae.com
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.brochure}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm text-white transition-colors hover:border-brand-red hover:bg-brand-red"
                  data-testid="footer-brochure-download"
                >
                  <FileText className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Download Brochure
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-brand-darkline pt-6">
          <p className="font-mono-tech text-xs text-white/40" data-testid="footer-copyright">
            © {new Date().getFullYear()} {COMPANY.legalName}. All rights reserved.
          </p>
          <p className="font-mono-tech text-xs uppercase tracking-[0.2em] text-white/40">
            Est. {COMPANY.established} — Sharjah, UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
