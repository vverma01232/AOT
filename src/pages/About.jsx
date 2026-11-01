import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { COMPANY, IMAGES } from "@/data/site";
import { FadeUp, Overline, AccentLine } from "@/components/Reveal";
import Marquee from "@/components/Marquee";

const FACTS = [
  { k: "Established", v: COMPANY.established },
  { k: "Location", v: "Sharjah, United Arab Emirates" },
  { k: "Activities", v: "Manufacturing, exporting & supplying oilfield equipment and industrial products" },
  { k: "Portfolio", v: "Flanges, crosses & tees, spools, hammer unions, manifolds, swivel joints, ring joint gaskets — and 20+ further lines" },
];

export default function About() {
  useSeo({
    title: "About Us",
    description:
      "Asian Oil & Gas Field Equipment Manufacturing Co. LLC (AOT UAE) — a Sharjah-based oilfield equipment manufacturer, exporter and supplier established in 2022. Profile, infrastructure, quality approach and product portfolio.",
    path: "/about",
  });

  return (
    <>
      {/* Page hero */}
      <section className="relative overflow-hidden bg-brand-charcoal grain pt-40 pb-16" data-testid="about-hero">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Overline light>About AOT UAE</Overline>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Precision-made in
              <br />
              Sharjah, UAE<span className="text-brand-red">.</span>
            </h1>
            <div className="mt-7">
              <AccentLine />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Overview editorial */}
      <section className="bg-white py-20 lg:py-28" data-testid="about-overview">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-7">
            <FadeUp>
              <Overline>Company Overview</Overline>
              <div className="mt-6 space-y-5 text-base sm:text-lg leading-relaxed text-brand-graphite">
                <p>
                  {COMPANY.legalName} is a business entity based out of Sharjah (UAE), established
                  in {COMPANY.established}. We are engaged in the production and distribution of a
                  diverse range of oilfield equipment and other industrial products.
                </p>
                <p>
                  We are recognized as a trusted manufacturer, exporter and supplier of flanges,
                  crosses and tees, spools, hammer unions, manifolds, swivel joints and ring joint
                  gaskets. Alongside the core range, we manufacture steel forging materials,
                  pipeline adapters and crossovers, high-pressure low-torque plug valves and
                  integral fittings — and supply all kinds of spare parts for the products we make.
                </p>
                <p>
                  By dealing with transparency and maintaining ethical practices, we have developed
                  cordial relations with numerous clients. With a well-established supply chain
                  system, we assure on-time deliveries — and our clients have always been extremely
                  satisfied with the quality and range of the products that we deliver.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <ul className="mt-10 space-y-4">
                {FACTS.map((f) => (
                  <li key={f.k} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-6 border-b border-brand-line pb-4" data-testid="about-fact-item">
                    <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-red pt-1">
                      {f.k}
                    </span>
                    <span className="text-sm sm:text-base text-brand-charcoal">{f.v}</span>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>

          <div className="lg:col-span-5">
            <FadeUp delay={0.1}>
              <div className="border border-brand-line bg-white p-2 rounded-2xl overflow-hidden">
                <img
                  src={IMAGES.rigSunset}
                  alt="Offshore oil rig — the industry AOT UAE serves"
                  loading="lazy"
                  className="w-full aspect-[4/5] object-cover rounded-xl"
                />
              </div>
              <p className="mt-4 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-brand-text2">
                The energy industry — our field of work
              </p>
              <div className="mt-10 border-l-2 border-brand-red bg-brand-light p-6 rounded-r-2xl">
                <p className="font-heading text-3xl font-bold uppercase leading-tight text-brand-charcoal">
                  “Quality is not an act <span className="text-brand-red">— it&rsquo;s a habit.</span>”
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <Marquee />

      {/* Infrastructure recap */}
      {/* Custom Development */}
      <section className="relative bg-brand-charcoal py-20 lg:py-28 grain" data-testid="about-custom-dev">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <Overline light>Custom Product Development</Overline>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Your product, on the fast track.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
              Put your product development on the fast track by leveraging AOT&rsquo;s experience
              and infrastructure — taking your idea from concept, to design, to prototype, to final
              product at a speed you never thought possible.
            </p>
            <Link
              to="/custom-development"
              className="group mt-9 inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
              data-testid="about-custom-dev-link"
            >
              Explore Custom Development
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="border border-brand-darkline bg-brand-charcoal/60 p-2 rounded-2xl overflow-hidden">
              <img
                src={IMAGES.manufacturing}
                alt="Custom product development at AOT UAE"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-light py-16 border-y border-brand-line" data-testid="about-cta">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <FadeUp>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase tracking-tight text-brand-charcoal">
              Discuss your equipment requirements.
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
              data-testid="about-cta-button"
            >
              Contact Our Team
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
