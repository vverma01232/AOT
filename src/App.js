import { useEffect, useRef, Component } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import "@/App.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LogoSpotProvider } from "@/components/LogoSpot";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductDetail from "@/pages/ProductDetails";
import Manufacturing from "@/pages/CustomDevelopment";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    return { error };
  }
  render() {
    if (this.state.error) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-brand-charcoal px-6 text-center">
          <div>
            <p className="font-mono-tech text-xs uppercase tracking-[0.25em] text-brand-red">Something went wrong</p>
            <h1 className="mt-4 font-heading text-4xl font-bold uppercase text-white">Please reload the page</h1>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function SmoothScroll() {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lenisRef = useRef(null);
  useEffect(() => {
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenisRef.current = lenis;
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, [reduce]);
  return lenisRef;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function RoutesWithChrome() {
  const lenisRef = SmoothScroll();
  const { pathname } = useLocation();
  useEffect(() => {
    const lenis = lenisRef.current;
    if (lenis) lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenisRef]);
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/custom-development" element={<Manufacturing />} />
          <Route path="/manufacturing-quality" element={<Navigate to="/custom-development" replace />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const basename = (process.env.PUBLIC_URL || "/").replace(/\/+$/, "") || "/";

  return (
    <ErrorBoundary>
      <BrowserRouter basename={basename}>
        <LogoSpotProvider>
          <RoutesWithChrome />
        </LogoSpotProvider>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
