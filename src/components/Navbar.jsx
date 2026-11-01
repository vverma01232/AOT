import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useLogoSpot } from "@/components/LogoSpot";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Mail } from "lucide-react";
import { NAV_LINKS, COMPANY, assetUrl } from "@/data/site";
import EventAnnouncement, { getCurrentEvent } from "@/components/EventAnnouncement";

export default function Navbar() {
  const event = getCurrentEvent();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { ready: logoReady } = useLogoSpot();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <>
      <EventAnnouncement event={event} />
      <header
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          event ? "top-10" : "top-0"
        } ${
          scrolled
            ? "bg-brand-charcoal/95 backdrop-blur-md border-b border-brand-darkline shadow-lg shadow-black/20"
            : "bg-brand-charcoal border-b border-brand-darkline/60"
        }`}
        data-testid="site-header"
      >
      <div className="mx-auto max-w-none px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link
            to="/"
            className="relative z-10 flex items-center shrink-0"
            style={{ opacity: logoReady || !isHome ? 1 : 0, transition: "opacity 0.4s" }}
            onClick={(e) => {
              if (isHome) {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            data-testid="nav-logo-link"
            aria-label="AOT UAE — Home"
          >
            <img
              src={assetUrl("AOT-logo-outline-v6.png")}
              alt="AOT UAE — Asian Oil Tech logo"
              className="h-10 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-7" aria-label="Primary">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `relative font-mono-tech text-[13px] uppercase tracking-[0.14em] transition-colors duration-200 py-2 ${
                    isActive ? "text-white" : "text-white/60 hover:text-white"
                  }`
                }
                data-testid={`nav-link-${l.to === "/" ? "home" : l.to.replaceAll("/", "").replaceAll("-", "")}`}
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    <span
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-brand-red transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="group relative ml-2 inline-flex items-center gap-2 bg-brand-red px-6 py-3 font-heading text-base font-semibold uppercase tracking-widest text-white overflow-hidden transition-colors duration-300 hover:bg-brand-redhover rounded-full"
              data-testid="nav-request-quote-button"
            >
              <span className="absolute inset-0 translate-x-[-101%] bg-black/20 transition-transform duration-300 group-hover:translate-x-0" aria-hidden="true" />
              <span className="relative">Request a Quote</span>
            </Link>
          </nav>

          <button
            className="lg:hidden inline-flex items-center justify-center h-11 w-11 border border-brand-darkline text-white rounded-full"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            data-testid="nav-mobile-toggle"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden bg-brand-charcoal border-t border-brand-darkline"
            data-testid="nav-mobile-menu"
          >
            <nav className="px-6 py-6 flex flex-col gap-1" aria-label="Mobile">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <NavLink
                    to={l.to}
                    className={({ isActive }) =>
                      `block border-b border-brand-darkline/60 py-4 font-heading text-3xl font-semibold uppercase tracking-wide ${
                        isActive ? "text-brand-red" : "text-white"
                      }`
                    }
                    data-testid={`nav-mobile-link-${l.to === "/" ? "home" : l.to.replaceAll("/", "").replaceAll("-", "")}`}
                  >
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
              <div className="pt-6 pb-2 flex flex-col gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-brand-red px-6 py-4 font-heading text-lg font-semibold uppercase tracking-widest text-white rounded-full"
                  data-testid="nav-mobile-quote-button"
                >
                  Request a Quote
                </Link>
                <a
                  href={`tel:${COMPANY.phoneHref}`}
                  className="flex items-center gap-3 font-mono-tech text-sm text-white/70"
                  data-testid="nav-mobile-phone"
                >
                  <Phone className="h-4 w-4 text-brand-red" /> {COMPANY.phoneDisplay}
                </a>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-3 font-mono-tech text-sm text-white/70"
                  data-testid="nav-mobile-email"
                >
                  <Mail className="h-4 w-4 text-brand-red" /> {COMPANY.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  );
}
