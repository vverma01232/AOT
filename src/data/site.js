export const assetUrl = (path) => {
  if (!path) return "";
  if (/^https?:\/\//i.test(path) || path.startsWith("data:")) return path;
  const basePath = (process.env.PUBLIC_URL || "").replace(/\/+$/, "");
  return `${basePath}/${path.replace(/^\/+/, "")}`;
};

export const COMPANY = {
  legalName: "Asian Oil & Gas Field Equipment Manufacturing Co. LLC",
  brand: "AOT UAE",
  tagline: "Quality is not an act. It's a habit.",
  established: "2022",
  domain: "https://aotuae.com",
  address: {
    line1: "Warehouse No.11, Plot No. 2064",
    line2: "Industrial Area No.7",
    city: "Sharjah - UAE",
  },
  email: "sales@aotuae.com",
  phoneDisplay: "+971 52 310 2330",
  phoneHref: "+971523102330",
  whatsapp: "971523102330",
  brochure: assetUrl("AOT.pdf"),
  mapEmbed:
    "https://maps.google.com/maps?q=Industrial%20Area%20No.7%2C%20Sharjah%2C%20UAE&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const NAV_LINKS = [
  { label: "About Us", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Custom Development", to: "/custom-development" },
  { label: "Contact Us", to: "/contact" },
];

export const MARQUEE_ITEMS = [
  "Flanges",
  "Crosses & Tees",
  "Spools",
  "Hammer Unions",
  "Manifolds",
  "Swivel Joints",
  "Ring Joint Gaskets",
  "Plug Valves",
  "Pup Joints",
  "Integral Fittings",
  "Chiksan Loops",
  "Adapters & Crossovers",
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1557592494-37448a3f4b11?q=85&w=2000&auto=format&fit=crop",
  rigSunset:
    "https://images.unsplash.com/photo-1633829131104-e2134f75c6e5?q=85&w=1600&auto=format&fit=crop",
  manufacturing:
    "https://images.unsplash.com/photo-1734888369502-3e01d4c0a46e?q=85&w=1400&auto=format&fit=crop",
  customDevelopment: assetUrl("images/custom-development-cnc.jpg"),
  warehouse:
    "https://images.unsplash.com/photo-1721622045835-51a5447f281c?q=85&w=1400&auto=format&fit=crop",
  pipesRow:
    "https://images.unsplash.com/photo-1705147219565-fe9f6f369d03?q=85&w=2000&auto=format&fit=crop",
  rigsMoody:
    "https://images.unsplash.com/photo-1648555394313-494797ad48fc?q=85&w=1600&auto=format&fit=crop",
};
