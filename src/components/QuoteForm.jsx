import { useMemo, useState } from "react";
import { Mail, MessageCircle, AlertCircle, ExternalLink } from "lucide-react";
import { COMPANY } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function QuoteForm({ defaultProduct = "", dark = false }) {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product: defaultProduct,
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);

  const set = (k) => (e) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const validate = () => {
    const er = {};
    if (!form.name.trim()) er.name = "Please enter your full name";
    if (!form.email.trim()) er.email = "Please enter your business email";
    else if (!EMAIL_RE.test(form.email.trim())) er.email = "Please enter a valid email address";
    if (!form.phone.trim()) er.phone = "Please enter your phone number";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const compose = useMemo(() => {
    const lines = [
      `Name: ${form.name.trim()}`,
      `Company: ${form.company.trim() || "—"}`,
      `Email: ${form.email.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Product / Requirement: ${form.product.trim() || "—"}`,
      `Message: ${form.message.trim() || "—"}`,
    ];
    return lines.join("\n");
  }, [form]);

  const subject = `Quotation Request${form.product.trim() ? ` — ${form.product.trim()}` : ""}`;
  const mailto = `mailto:${COMPANY.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose)}`;
  const whatsapp = `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(subject + "\n\n" + compose)}`;

  const submit = (e) => {
    e.preventDefault();
    if (validate()) setReady(true);
  };

  const inputCls = (invalid) =>
    `w-full border bg-transparent px-4 py-3.5 text-[15px] outline-none transition-colors duration-200 placeholder:text-brand-text2/60 rounded-xl ${
      dark
        ? "border-brand-darkline bg-brand-charcoal/40 text-white focus:border-brand-red"
        : "border-brand-line bg-white text-brand-graphite focus:border-brand-red"
    } ${invalid ? "border-brand-red" : ""}`;

  const labelCls = `mb-2 block font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] ${
    dark ? "text-white/70" : "text-brand-text2"
  }`;

  const err = (k) =>
    errors[k] ? (
      <p
        className="mt-1.5 flex items-center gap-1.5 text-xs text-brand-red"
        data-testid={`quote-error-${k}`}
      >
        <AlertCircle className="h-3.5 w-3.5" /> {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={submit} noValidate data-testid="quote-form">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="qf-name" className={labelCls}>
            Full Name *
          </label>
          <input
            id="qf-name"
            type="text"
            autoComplete="name"
            className={inputCls(errors.name)}
            value={form.name}
            onChange={set("name")}
            data-testid="quote-name-input"
          />
          {err("name")}
        </div>
        <div>
          <label htmlFor="qf-company" className={labelCls}>
            Company Name
          </label>
          <input
            id="qf-company"
            type="text"
            autoComplete="organization"
            className={inputCls()}
            value={form.company}
            onChange={set("company")}
            data-testid="quote-company-input"
          />
        </div>
        <div>
          <label htmlFor="qf-email" className={labelCls}>
            Business Email *
          </label>
          <input
            id="qf-email"
            type="email"
            autoComplete="email"
            className={inputCls(errors.email)}
            value={form.email}
            onChange={set("email")}
            data-testid="quote-email-input"
          />
          {err("email")}
        </div>
        <div>
          <label htmlFor="qf-phone" className={labelCls}>
            Phone Number *
          </label>
          <input
            id="qf-phone"
            type="tel"
            autoComplete="tel"
            className={inputCls(errors.phone)}
            value={form.phone}
            onChange={set("phone")}
            data-testid="quote-phone-input"
          />
          {err("phone")}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-product" className={labelCls}>
            Product / Requirement
          </label>
          <input
            id="qf-product"
            type="text"
            placeholder="e.g. Hammer Unions 2"
            className={inputCls()}
            value={form.product}
            onChange={set("product")}
            data-testid="quote-product-input"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="qf-message" className={labelCls}>
            Message
          </label>
          <textarea
            id="qf-message"
            rows={4}
            placeholder="Sizes, quantities, service conditions, delivery location…"
            className={inputCls()}
            value={form.message}
            onChange={set("message")}
            data-testid="quote-message-input"
          />
        </div>
      </div>

      {!ready ? (
        <button
          type="submit"
          className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red px-10 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white transition-colors duration-300 hover:bg-brand-redhover rounded-full"
          data-testid="quote-submit-button"
        >
          Prepare Request
        </button>
      ) : (
        <div className="mt-7 border border-brand-line bg-brand-light p-5 rounded-2xl" data-testid="quote-send-panel">
          <p className="font-mono-tech text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-text2">
            Your request is ready — choose how to send it
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href={mailto}
              onClick={() => window.setTimeout(() => setReady(false), 400)}
              className="inline-flex flex-1 items-center justify-center gap-2 bg-brand-red px-6 py-3.5 font-heading text-base font-semibold uppercase tracking-widest text-white transition-colors hover:bg-brand-redhover rounded-full"
              data-testid="quote-send-email-button"
            >
              <Mail className="h-4 w-4" /> Send via Email <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-2 border-2 border-brand-charcoal px-6 py-3.5 font-heading text-base font-semibold uppercase tracking-widest text-brand-charcoal transition-colors hover:bg-brand-charcoal hover:text-white rounded-full"
              data-testid="quote-send-whatsapp-button"
            >
              <MessageCircle className="h-4 w-4" /> Send via WhatsApp{" "}
              <ExternalLink className="h-3.5 w-3.5 opacity-60" />
            </a>
          </div>
          <p className="mt-3 text-xs text-brand-text2">
            This opens your email app or WhatsApp with your details pre-filled — nothing is sent until you
            confirm in the app. Your email app opens to <span className="font-mono-tech">{COMPANY.email}</span>.
          </p>
        </div>
      )}
    </form>
  );
}
