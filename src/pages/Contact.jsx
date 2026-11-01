import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { MapPin, Phone, Mail, Globe, MessageCircle, Clock3, FileText } from "lucide-react";
import useSeo from "@/hooks/useSeo";
import { COMPANY } from "@/data/site";
import { FadeUp, Overline } from "@/components/Reveal";
import QuoteForm from "@/components/QuoteForm";

export default function Contact() {
  const [params] = useSearchParams();
  const product = params.get("product") || "";

  useSeo({
    title: "Contact Us & Request a Quote",
    description:
      "Contact AOT UAE — Asian Oil & Gas Field Equipment Manufacturing Co. LLC, Industrial Area No.7, Sharjah, UAE. Request a quotation for flanges, hammer unions, swivel joints, manifolds and more oilfield equipment.",
    path: "/contact",
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section className="relative overflow-hidden bg-brand-charcoal grain pt-40 pb-16" data-testid="contact-hero">
        <div className="absolute inset-0 blueprint-grid" aria-hidden="true" />
        <div className="absolute left-0 top-0 h-full w-1 bg-brand-red" aria-hidden="true" />
        <div className="relative mx-auto max-w-none px-4 sm:px-6 lg:px-8">
          <FadeUp>
            <Overline light>Contact Us</Overline>
            <h1 className="mt-4 font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight leading-[0.95] text-white">
              Request a quote<span className="text-brand-red">.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/65">
              Tell us your product, sizes and quantities — our team responds with a quotation.
              Prefer to talk? Call, email or message us on WhatsApp.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24" data-testid="contact-body">
        <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Details */}
          <div className="lg:col-span-5 space-y-10">
            <FadeUp>
              <Overline>Company Details</Overline>
              <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-brand-charcoal">
                {COMPANY.brand}
              </h2>
              <p className="mt-1 text-sm text-brand-text2">{COMPANY.legalName}</p>
              <ul className="mt-7 space-y-5">
                <li className="flex gap-4" data-testid="contact-address">
                  <MapPin className="h-5 w-5 mt-0.5 shrink-0 text-brand-red" aria-hidden="true" />
                  <span className="text-base leading-relaxed text-brand-graphite">
                    {COMPANY.address.line1},
                    <br />
                    {COMPANY.address.line2},
                    <br />
                    {COMPANY.address.city}
                  </span>
                </li>
                <li data-testid="contact-phone">
                  <a href={`tel:${COMPANY.phoneHref}`} className="flex gap-4 items-center text-base text-brand-graphite hover:text-brand-red transition-colors">
                    <Phone className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                    {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li data-testid="contact-whatsapp">
                  <a
                    href={`https://wa.me/${COMPANY.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex gap-4 items-center text-base text-brand-graphite hover:text-brand-red transition-colors"
                  >
                    <MessageCircle className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                    WhatsApp: {COMPANY.phoneDisplay}
                  </a>
                </li>
                <li data-testid="contact-email">
                  <a href={`mailto:${COMPANY.email}`} className="flex gap-4 items-center text-base text-brand-graphite hover:text-brand-red transition-colors">
                    <Mail className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                    {COMPANY.email}
                  </a>
                </li>
                <li data-testid="contact-website">
                  <a href={COMPANY.domain} className="flex gap-4 items-center text-base text-brand-graphite hover:text-brand-red transition-colors">
                    <Globe className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                    www.aotuae.com
                  </a>
                </li>
                <li data-testid="contact-brochure-link">
                  <a href={COMPANY.brochure} download className="flex gap-4 items-center text-base text-brand-graphite hover:text-brand-red transition-colors">
                    <FileText className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                    Download Company Brochure (PDF)
                  </a>
                </li>
              </ul>
            </FadeUp>

            <FadeUp delay={0.08}>
              <div className="border border-brand-line bg-brand-light p-5 flex items-start gap-4 rounded-2xl" data-testid="contact-response-note">
                <Clock3 className="h-5 w-5 shrink-0 text-brand-red" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-brand-text2">
                  Submitting the form opens your email app or WhatsApp with your request
                  pre-filled — nothing is sent automatically, and your details stay in the message
                  you confirm.
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <div className="border border-brand-line rounded-2xl overflow-hidden" data-testid="contact-map">
                <iframe
                  title="AOT UAE location — Industrial Area No.7, Sharjah, UAE"
                  src={COMPANY.mapEmbed}
                  className="w-full h-72"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.05}>
              <div
                className="border border-brand-line bg-white shadow-2xl shadow-black/5 p-7 md:p-10 border-t-4 border-t-brand-red rounded-2xl"
                data-testid="contact-quote-form-panel"
              >
                <Overline>Quotation Request</Overline>
                <h2 className="mt-4 font-heading text-3xl font-bold uppercase tracking-tight text-brand-charcoal">
                  Tell us what you need.
                </h2>
                <p className="mt-2 mb-8 text-sm text-brand-text2">
                  Fields marked * are required. After preparing your request, send it via email or
                  WhatsApp — whichever suits your workflow.
                </p>
                <QuoteForm defaultProduct={product} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
