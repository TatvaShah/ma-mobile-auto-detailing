import type { SiteConfig } from "@/lib/types";

const g = (n: number, alt: string, caption: string, href: string) => ({ src: `/images/post-${n}.jpg`, width: 1080, height: 1440, alt, caption, href });

export const site: SiteConfig = {
  name: "M&A Mobile Auto Detailing",
  tagline: "Mobile auto detailing across Toronto and the GTA. Interior and exterior details, ceramic coating, and paint correction, done at your place.",
  category: "Mobile auto detailing",
  schemaType: "AutoWash",
  area: "Toronto and GTA, ON",
  siteUrl: "https://ma-mobile-auto-detailing.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#8c8c8c" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Servicing Toronto and the GTA",
    headline: "Nothing but excellence, right in your driveway",
    subhead: "Your time, your place. We come to you for maintenance details, interior and exterior details, ceramic coating, and paint correction. Send a quick DM or call to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "Black Porsche 911 Carrera S after a detail" },
      { src: "/images/post-3.jpg", alt: "Teal Porsche 911 with a fresh gloss finish" },
      { src: "/images/post-4.jpg", alt: "Detailed black Cadillac Escalade" },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/m_a.detail" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: ["Mobile service, we come to you", "Toronto and the GTA", "Ceramic coating and paint correction", "Cars, boats, RVs and aircraft"],

  about: {
    title: "Your time, your place",
    body: [
      "M&A Mobile Auto Detailing brings the full detail to you, anywhere in Toronto and the GTA. From weekly maintenance details to ceramic coating and paint correction, every vehicle gets the same care.",
      "We work on daily drivers and exotics alike, plus boats, RVs and aircraft. Tell us what you drive and what it needs, and we will set up a time that suits you.",
    ],
    image: { src: "/images/post-6.jpg", alt: "Porsche 911 Carrera after paint work" },
  },

  menu: {
    label: "Services",
    title: "What we do",
    variant: "list",
    showPrices: false,
    priceNote: "Message us for a quote on your vehicle.",
    groups: [
      {
        title: "Details",
        note: "Quoted by DM or phone",
        items: [
          { name: "Maintenance details", description: "Regular upkeep to keep your vehicle looking fresh." },
          { name: "Interior and exterior details", description: "A full clean inside and out." },
          { name: "Carpet and upholstery shampoo", description: "Deep clean for carpets and seats." },
        ],
      },
      {
        title: "Protection and correction",
        items: [
          { name: "Ceramic coating", description: "Long lasting gloss and protection for your paint." },
          { name: "Paint correction", description: "Bring back depth and clarity to the finish." },
        ],
      },
      {
        title: "More than cars",
        items: [{ name: "Boats, RVs and aircraft", description: "Mobile detailing for whatever you need cleaned." }],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      g(1, "Black Porsche 911 Carrera S", "911 Carrera S", "https://www.instagram.com/p/DfGBjY-n_uY/"),
      g(3, "Teal Porsche 911", "Nothing but excellence", "https://www.instagram.com/p/De2WlWSM52f/"),
      g(4, "Black Cadillac Escalade", "Cadillac Escalade", "https://www.instagram.com/p/Dexu5FYjCMd/"),
      g(5, "Black Mercedes S63", "S63", "https://www.instagram.com/p/DeuZdxMiRFK/"),
      g(6, "Green Porsche 911 Carrera", "Porsche 911 Carrera", "https://www.instagram.com/p/DeaW2Men4Yb/"),
      g(8, "Black Range Rover", "Summer season recap", "https://www.instagram.com/p/DeUSgplFjvl/"),
      g(9, "Lime green McLaren", "Fresh detail", "https://www.instagram.com/p/DeN2WiSMO0g/"),
      g(10, "Grey Dodge Durango RT", "Dodge Durango RT", "https://www.instagram.com/p/DeBEQJZDd6q/"),
      g(11, "Classic Porsche 911", "911", "https://www.instagram.com/p/DdooXK8lkbe/"),
    ],
  },

  instagram: {
    handle: "m_a.detail",
    embeds: ["https://www.instagram.com/p/DfGBjY-n_uY/"],
    embedsTitle: "Fresh from the driveway",
  },

  order: {
    label: "How to book",
    title: "Book in a quick DM",
    intro: "Tap the button to copy a starter message, then paste it into the Instagram chat. Prefer to talk? Call 416-272-6929.",
    dmMessage: "Hi M&A! I would like to book a detail.\nPreferred date:\nVehicle (make, model, size):\nService (interior, exterior, ceramic, paint correction):\nCondition or anything we should know:\nArea in the GTA:",
    links: [{ label: "WhatsApp and more", href: "https://linktr.ee/ma_detailing" }],
    note: "Mobile service: we come to your home or workplace.",
  },

  reviews: { items: [] },

  faq: [
    { q: "Do you come to me?", a: "Yes. We are fully mobile and service Toronto and the GTA at your place." },
    { q: "What services do you offer?", a: "Maintenance details, interior and exterior details, carpet and upholstery shampoo, ceramic coating, and paint correction." },
    { q: "Do you detail more than cars?", a: "Yes, we also detail boats, RVs and aircraft." },
    { q: "How do I get a price?", a: "Send a DM or call 416-272-6929 with your vehicle and the service you want, and we will quote you." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Toronto and the GTA, Ontario (mobile)",
    phone: "416-272-6929",
    socials: [{ label: "Linktree (WhatsApp, TikTok, Facebook)", href: "https://linktr.ee/ma_detailing" }],
  },

  seo: {
    title: "M&A Mobile Auto Detailing | Mobile auto detailing in Toronto",
    description: "Mobile auto detailing in Toronto and the GTA: interior and exterior details, ceramic coating and paint correction at your place. Book by DM or call.",
    keywords: ["mobile detailing Toronto", "ceramic coating Toronto", "paint correction GTA", "mobile car detailing GTA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
