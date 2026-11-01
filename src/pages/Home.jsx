import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLogoSpot } from "@/components/LogoSpot";
import { ArrowRight, ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { COMPANY, IMAGES, assetUrl } from "@/data/site";
import { CORE_PRODUCTS } from "@/data/products";
import { MaskedLines, FadeUp, AccentLine, Overline } from "@/components/Reveal";
import Marquee from "@/components/Marquee";
import ProductCard from "@/components/ProductCard";


const HERO_IMG = IMAGES.hero;

function HeroLogo() {
  const { ready, setSpot, releaseSpot } = useLogoSpot();
  const heroLogoRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const [rects, setRects] = useState(null);

  useEffect(() => {
    const spot = document.querySelector('[data-testid="nav-logo-link"]');
    const hero = heroLogoRef.current;
    if (!spot || !hero) return;
    const measure = () => {
      const s = spot.getBoundingClientRect();
      const h = hero.getBoundingClientRect();
      setRects({
        sx: s.left + s.width / 2,
        sy: s.top + s.height / 2,
        sw: s.width,
        hx: h.left + h.width / 2,
        hy: h.top + h.height / 2,
        hw: h.width,
      });
    };
    measure();
    const t = window.setTimeout(measure, 700);
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const readyRef = useRef(false);
  useEffect(() => {
    const apply = (v) => {
      const switched = v >= 260;
      if (switched !== readyRef.current) {
        readyRef.current = switched;
        if (switched) setSpot();
        else releaseSpot();
      }
    };
    apply(scrollY.get());
    const unsub = scrollY.on("change", apply);
    return unsub;
  }, [scrollY, setSpot, releaseSpot]);

  const dx = rects && !ready ? rects.sx - rects.hx : 0;
  const dy = rects && !ready ? rects.sy - rects.hy : 0;
  const scale = rects ? Math.max(rects.sw / rects.hw, 0.12) : 0.12;

  const x = useTransform(scrollY, [40, 320], [0, reduce ? 0 : dx]);
  const y = useTransform(scrollY, [40, 320], [0, reduce ? 0 : dy]);
  const s = useTransform(scrollY, [40, 320], [1, scale]);
  const o = useTransform(scrollY, [200, 320], [1, 0]);

  return (
    <div ref={heroLogoRef} className="mb-4 w-56 sm:w-72 lg:w-80" data-testid="hero-logo-block">
      <motion.img
        src={assetUrl("AOT-logo-outline-v6.png")}
        alt="AOT UAE — Asian Oil Tech logo"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="w-full h-auto"
        style={{
          x,
          y,
          scale: s,
          opacity: o,
          willChange: "transform",
        }}
      />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-brand-charcoal grain" data-testid="hero-section">
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Molten steel forging — industrial manufacturing environment"
          className="h-full w-full scale-[1.18] object-cover object-center"
          style={{ transformOrigin: "left center" }}
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-transparent to-brand-charcoal/60" />
      <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-1 bg-brand-red/90" aria-hidden="true" />

      <div className="relative z-10 mx-auto w-full max-w-none px-4 sm:px-6 lg:px-8 pb-16 pt-40">
        <HeroLogo />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-6 flex items-center gap-3 font-mono-tech text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-white/70"
          data-testid="hero-overline"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-brand-red" aria-hidden="true" />
          {COMPANY.legalName} — Sharjah, UAE
        </motion.p>

        <h1 className="font-heading font-extrabold uppercase leading-[0.95] tracking-tightest text-white text-[15vw] sm:text-7xl lg:text-[104px]">
          <MaskedLines
            lines={[
              "Engineered for",
              <>
                Performance<span className="text-brand-red" aria-hidden="true">.</span>
              </>,
              "Built for the energy industry.",
            ]}
            lineClass="pb-1"
          />
        </h1>

        <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.7, delay: 0.85, ease: [0.22, 1, 0.36, 1] }} style={{ transformOrigin: "left" }}>
          <div className="mt-8 h-[3px] w-20 bg-brand-red rounded-full" aria-hidden="true" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-white/75"
          data-testid="hero-subcopy"
        >
          Oilfield equipment and industrial solutions from Sharjah, UAE. Discover a product
          portfolio built around quality, precision, and dependable supply.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.12 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-redhover rounded-full"
            data-testid="hero-explore-button"
          >
            Explore Our Products
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-white/40 px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:border-brand-red hover:bg-brand-red rounded-full"
            data-testid="hero-quote-button"
          >
            Request a Quote
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/15 pt-5 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white/50"
        >
          <span>Est. {COMPANY.established}</span>
          <span className="text-brand-red">/</span>
          <span>Oilfield Equipment &amp; Industrial Products</span>
          <span className="text-brand-red">/</span>
          <span>Manufacturer — Exporter — Supplier</span>
        </motion.div>
      </div>
    </section>
  );
}

const VALUES = [
  { t: "Product quality", d: "Clients have consistently been satisfied with the quality and range of the products we deliver." },
  { t: "Ethical business practices", d: "We deal with transparency and maintain ethical practices in every engagement." },
  { t: "Transparent customer relationships", d: "Cordial, long-term client relations built on clear and honest dealings." },
  { t: "Supply-chain coordination", d: "A well-established supply chain system underpins every order we take." },
  { t: "Timely deliveries", d: "We assure on-time deliveries to clients, order after order." },
];

export default function Home() {
  useSeo({
    title: null,
    description:
      "AOT UAE — Asian Oil & Gas Field Equipment Manufacturing Co. LLC. Sharjah-based manufacturer, exporter and supplier of flanges, hammer unions, swivel joints, manifolds, spools, crosses & tees and ring joint gaskets. Established 2022.",
  });

  return (
    <>
      <Hero />
      <Marquee />

      {/* Product categories */}
      <section className="bg-white py-20 lg:py-28" data-testid="home-products-section">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <FadeUp>
              <Overline>Product Portfolio</Overline>
              <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-brand-charcoal">
                Seven core lines.
                <br />
                <span className="text-brand-red">One source of supply.</span>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-brand-charcoal hover:text-brand-red"
                data-testid="home-view-catalog-link"
              >
                View complete catalog
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </FadeUp>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CORE_PRODUCTS.map((p, i) => (
              <FadeUp key={p.slug} delay={0.05 * (i % 3)}>
                <ProductCard product={p} index={i} />
              </FadeUp>
            ))}
            <FadeUp delay={0.1} className="h-full">
              <Link
                to="/products"
                className="group flex h-full min-h-[320px] flex-col justify-between bg-brand-charcoal blueprint-grid p-8 transition-colors duration-300 hover:bg-black rounded-2xl"
                data-testid="home-catalog-cta-card"
              >
                <span className="font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
                  Full Catalog
                </span>
                <div>
                  <p className="font-heading text-4xl font-semibold uppercase leading-tight text-white">
                    20+ product
                    <br />
                    lines
                  </p>
                  <p className="mt-3 text-sm text-white/60">
                    Plug valves, pup joints, chiksans, integral fittings, adapters &amp; crossovers — and more.
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Browse all products
                    <ArrowUpRight className="h-4 w-4 text-brand-red transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* About editorial */}
      <section className="border-y border-brand-line bg-brand-light py-20 lg:py-28" data-testid="home-about-section">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <FadeUp>
            <Overline>The Company</Overline>
            <h2 className="mt-4 font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-brand-charcoal">
              A Sharjah-based oilfield equipment manufacturer.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-brand-graphite max-w-xl">
              <p>
                {COMPANY.legalName} is a business entity based out of Sharjah (UAE), established in{" "}
                {COMPANY.established}. We are engaged in the production and distribution of a diverse
                range of oilfield equipment and other industrial products.
              </p>
              <p>
                We are recognized as a trusted manufacturer, exporter and supplier of flanges,
                crosses and tees, spools, hammer unions, manifolds, swivel joints and ring joint
                gaskets — backed by manufacturing, warehousing and quality departments.
              </p>
            </div>
            <ul className="mt-8 space-y-3 font-mono-tech text-xs uppercase tracking-[0.18em] text-brand-charcoal">
              {[
                ["Established", COMPANY.established],
                ["Headquarters", "Sharjah, United Arab Emirates"],
                ["Business", "Manufacturing · Export · Supply"],
              ].map(([k, v]) => (
                <li key={k} className="flex items-center gap-4 border-b border-brand-line pb-3" data-testid="about-fact-row">
                  <span className="w-32 shrink-0 text-brand-text2">{k}</span>
                  <span className="font-semibold">{v}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 font-mono-tech text-xs font-semibold uppercase tracking-[0.2em] text-brand-red hover:text-brand-redhover"
              data-testid="home-about-more-link"
            >
              More about AOT UAE
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="relative">
              <div className="corner-ticks relative border border-brand-line bg-white p-2">
                <img
                  src={IMAGES.rigSunset}
                  alt="Offshore oil rig at sunset — the energy industry AOT UAE supplies"
                  loading="lazy"
                  className="w-full aspect-[4/3] object-cover rounded-xl"
                />
              </div>
              <div className="absolute -bottom-5 -left-5 -z-0 hidden sm:block h-40 w-40 border-2 border-brand-red rounded-2xl" aria-hidden="true" />
              <p className="absolute -bottom-4 right-4 bg-brand-charcoal px-4 py-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white rounded-full">
                Serving energy operations from Sharjah
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Custom Development */}
      <section className="relative bg-brand-charcoal py-20 lg:py-28 grain" data-testid="home-custom-dev-section">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <Overline light>Custom Product Development</Overline>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Your product, on the fast track.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
              Put your product development on the fast track by leveraging AOT&rsquo;s experience
              and infrastructure — from concept to design, prototype, manufacturing, quality
              control and delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {["Idea", "Design", "Prototype", "Manufacturing", "Quality Control", "Delivery"].map(
                (step) => (
                  <span
                    key={step}
                    className="border border-brand-darkline bg-brand-charcoal/60 px-4 py-2 font-mono-tech text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80 rounded-full"
                    data-testid="home-custom-dev-step"
                  >
                    {step}
                  </span>
                )
              )}
            </div>
            <Link
              to="/custom-development"
              className="group mt-9 inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
              data-testid="home-custom-dev-link"
            >
              Explore Custom Development
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </FadeUp>
          <FadeUp delay={0.12}>
            <div className="border border-brand-darkline bg-brand-charcoal/60 p-2 rounded-2xl overflow-hidden">
              <img
                src={IMAGES.customDevelopment}
                alt="CNC machine precisely machining a metal component"
                loading="lazy"
                className="w-full aspect-[4/3] object-cover rounded-xl"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Quality & reliability */}
      <section className="bg-white py-20 lg:py-28" data-testid="home-quality-section">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <FadeUp>
              <Overline>Quality &amp; Reliability</Overline>
              <p className="mt-6 font-heading text-5xl sm:text-6xl font-bold uppercase leading-[0.95] tracking-tight text-brand-charcoal">
                Quality is not an act
                <span className="text-brand-red"> — it&rsquo;s a habit.</span>
              </p>
              <div className="mt-8">
                <AccentLine />
              </div>
              <p className="mt-6 max-w-md text-base leading-relaxed text-brand-text2">
                Our way of working is summarised in one line. Behind it sit the commitments that
                govern every order we accept and every component we ship.
              </p>
            </FadeUp>
          </div>
          <div className="lg:col-span-7">
            <ul>
              {VALUES.map((v, i) => (
                <FadeUp key={v.t} delay={0.05 * i}>
                  <li className="group flex items-start gap-6 border-b border-brand-line py-5 px-4 -mx-4 rounded-2xl transition-colors hover:bg-brand-light" data-testid="quality-value-row">
                    <span className="font-mono-tech text-xs font-semibold text-brand-red pt-1.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="font-heading text-2xl font-semibold uppercase tracking-tight text-brand-charcoal group-hover:text-brand-red transition-colors">
                        {v.t}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-brand-text2">{v.d}</p>
                    </div>
                  </li>
                </FadeUp>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="relative overflow-hidden bg-brand-charcoal" data-testid="home-cta-section">
        <img
          src={IMAGES.pipesRow}
          alt="Industrial pipeline installation"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/85 to-brand-charcoal/50" />
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <FadeUp>
            <Overline light>Business Inquiries</Overline>
            <h2 className="mt-4 max-w-3xl font-heading text-4xl sm:text-6xl font-bold uppercase tracking-tight text-white">
              Looking for reliable oilfield equipment supply?
            </h2>
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/70">
              Connect with our team to discuss your product requirements and request a quotation.
              Procurement teams, distributors, contractors and industrial buyers are all welcome.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-redhover rounded-full"
                data-testid="home-cta-contact-button"
              >
                Contact Our Team
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <a
                href={`tel:${COMPANY.phoneHref}`}
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 font-mono-tech text-sm text-white transition-colors hover:border-brand-red rounded-full"
                data-testid="home-cta-phone-link"
              >
                <Phone className="h-4 w-4 text-brand-red" /> {COMPANY.phoneDisplay}
              </a>
              <a
                href={`mailto:${COMPANY.email}`}
                className="inline-flex items-center gap-2 border border-white/30 px-6 py-4 font-mono-tech text-sm text-white transition-colors hover:border-brand-red rounded-full"
                data-testid="home-cta-email-link"
              >
                <Mail className="h-4 w-4 text-brand-red" /> {COMPANY.email}
              </a>
            </div>
            <p className="mt-8 flex items-center gap-2 font-mono-tech text-[11px] uppercase tracking-[0.2em] text-white/40">
              <MapPin className="h-3.5 w-3.5 text-brand-red" />
              {COMPANY.address.line1}, {COMPANY.address.line2}, {COMPANY.address.city}
            </p>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
