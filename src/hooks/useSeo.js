import { useEffect } from "react";
import { COMPANY } from "@/data/site";

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function useSeo({ title, description, path = "/" }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} | ${COMPANY.brand}`
      : `AOT UAE | Oilfield Equipment Manufacturer & Supplier — Sharjah, UAE`;
    document.title = fullTitle;
    if (description) {
      setMeta("name", "description", description);
      setMeta("property", "og:title", fullTitle);
      setMeta("property", "og:description", description);
    }
    setMeta("property", "og:url", `${COMPANY.domain}${path}`);
    let link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = `${COMPANY.domain}${path}`;
  }, [title, description, path]);
}
