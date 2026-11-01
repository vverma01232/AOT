import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { FadeUp } from "@/components/Reveal";

const STEPS = [
  { n: "01", t: "Idea", d: "Put your product development on the fast track — bring us the concept." },
  { n: "02", t: "Design", d: "Tap into our in-house capabilities and engineering experience." },
  { n: "03", t: "Prototype", d: "From concept to prototype at a speed you never thought possible." },
  { n: "04", t: "Manufacturing", d: "Forging, casting and machining capability under one roof." },
  { n: "05", t: "Quality Control", d: "Advanced technologies in equipment and quality control." },
  { n: "06", t: "Delivery", d: "Cost-effective production, delivered with complete communication." },
];

const CAPABILITIES = [
  "Manufacturing",
  "Fabrication",
  "Supply Chain Management",
  "Forging",
  "Casting",
  "Machining",
  "Quality Control",
  "Product Development",
];

const DashOverline = ({ children, light = false }) => (
  <p
    className={`flex items-center gap-3 font-mono-tech text-xs font-semibold uppercase tracking-[0.25em] ${
      light ? "text-brand-red" : "text-brand-red"
    }`}
    data-testid="section-overline"
  >
    <span className="h-px w-10 bg-brand-red" aria-hidden="true" />
    {children}
  </p>
);

export default function CustomDevelopment() {
  useSeo({
    title: "Custom Product Development",
    description:
      "Custom product development at AOT UAE, Sharjah — take your idea from concept to design, prototype, manufacturing, quality control and delivery, leveraging in-house capabilities in forging, casting and machining.",
    path: "/custom-development",
  });

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-charcoal grain pt-44 pb-24" data-testid="custom-dev-hero">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <DashOverline light>Custom / Product Development</DashOverline>
            <h1 className="mt-8 font-heading font-extrabold uppercase tracking-tight leading-[0.92] text-[13vw] sm:text-7xl lg:text-[96px]">
              <span className="block text-white">Your idea.</span>
              <span className="block text-brand-red">Our infrastructure.</span>
            </h1>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl">
              <p className="text-base leading-relaxed text-white/65">
                Put your product development on the fast track by leveraging AOT&rsquo;s experience
                and infrastructure. Tap into our in-house capabilities and take your idea from
                concept, to design, to prototype, to final product at a speed you never thought
                possible.
              </p>
              <p className="text-base leading-relaxed text-white/65">
                Already have a product and need to improve quality and reduce cost? AOT will put
                our expertise in manufacturing, fabrication and supply chain management to work for
                you — using our capability in forging, casting and machining to achieve cost
                reductions while improving quality and delivery. AOT works with a network of
                reliable, high-quality suppliers who can meet almost any requirement of your
                company.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* 01 / The Pipeline */}
      <section className="relative bg-brand-light py-20 lg:py-28" data-testid="custom-dev-pipeline">
        <div className="absolute inset-0 blueprint-grid-light" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <DashOverline>01 / The Pipeline</DashOverline>
            <h2 className="mt-8 font-heading font-extrabold uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal">
              Six stages. One
              <br />
              responsible partner.
            </h2>
          </FadeUp>

          <div className="relative mt-14">
            <div
              className="absolute left-0 right-0 top-[22px] hidden xl:block h-px bg-brand-red/25"
              aria-hidden="true"
            />
            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
              {STEPS.map((s, i) => (
                <FadeUp key={s.n} delay={0.06 * i}>
                  <div
                    className="group h-full border border-brand-line bg-white p-6 rounded-2xl transition-all duration-300 hover:border-brand-red hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1"
                    data-testid={`custom-dev-step-${s.n}`}
                  >
                    <span className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-charcoal font-mono-tech text-xs font-semibold tracking-widest text-brand-red">
                      {s.n}
                    </span>
                    <h3 className="mt-5 font-heading text-xl font-semibold uppercase tracking-tight text-brand-charcoal">
                      {s.t}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-text2">{s.d}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 / In-House Capabilities */}
      <section className="relative bg-brand-charcoal grain py-20 lg:py-28" data-testid="custom-dev-capabilities">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <FadeUp>
              <DashOverline light>02 / In-House Capabilities</DashOverline>
              <h2 className="mt-8 font-heading font-extrabold uppercase tracking-tight leading-[0.95] text-4xl sm:text-5xl lg:text-6xl text-white">
                Advanced technology.
                <br />
                Proven processes.
              </h2>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-white/60">
                Our reputation comes from advanced technologies used in equipment and quality
                control, processes and procedures which address improved manufacturing and cost
                effectiveness, and open communication with our customers.
              </p>
              <div
                className="mt-8 max-w-lg flex items-start gap-4 rounded-2xl border border-brand-red/40 bg-brand-redsoft p-5"
                data-testid="custom-dev-confidentiality-note"
              >
                <ShieldCheck className="h-5 w-5 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-white/70">
                  AOT handles all your information with uncompromised confidentiality and security.
                  We understand the value of intellectual property and its importance to our
                  customers — and do everything to protect it.
                </p>
              </div>
              <Link
                to="/contact"
                className="group mt-10 inline-flex items-center gap-2 bg-brand-red px-8 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
                data-testid="custom-dev-cta-button"
              >
                Send Your Requirement
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
              </Link>
            </FadeUp>
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" data-testid="custom-dev-capability-grid">
              {CAPABILITIES.map((c, i) => (
                <FadeUp key={c} delay={0.05 * (i % 2)} className="h-full">
                  <div
                    className="group flex h-full min-h-[128px] flex-col justify-between gap-6 rounded-2xl border border-brand-darkline bg-white/[0.03] p-6 transition-all duration-300 hover:border-brand-red/60 hover:bg-white/[0.06]"
                    data-testid={`custom-dev-capability-${i + 1}`}
                  >
                    <span className="font-mono-tech text-xs font-semibold tracking-[0.2em] text-brand-red">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-heading text-xl sm:text-2xl font-semibold uppercase tracking-tight text-white">
                      {c}
                    </p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
