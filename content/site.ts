export const site = {
  name: "Kaidoverse",
  handle: "@Kaidoverse",
  title: "Kaidoverse — Kaido Cregger",
  description:
    "Graphic + UI designer based in Salt Lake City, Utah. Portfolio, journey, and day-to-day app stack.",
  shopUrl: "https://shop.kaidoverse.com",
  timezone: "America/Denver",
  timezoneLabel: "Local date/time in Salt Lake City, Utah",
  copyright: "© 2024-2026 @Kaidoverse",
  designedBy: "Designed w/ 🖤 by Kaido",
  ctas: {
    build: {
      href: "mailto:hello@kaidoverse.com?subject=Build%20a%20Project",
      label: "Build a Project",
      badge: "Free",
    },
    chat: {
      href: "mailto:hello@kaidoverse.com?subject=Request%20a%20Collab",
      label: "Request a Collab",
      badge: "$80",
    },
    job: {
      href: "mailto:hello@kaidoverse.com?subject=Job%20Offer",
      label: "Send Job Offer",
    },
  },
  socials: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/kaidoverse/",
      icon: "/icons/instagram.svg",
    },
    {
      name: "Twitter / X",
      href: "https://x.com/kaidoverse",
      icon: "/icons/twitter.svg",
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@kaidoverse",
      icon: "/icons/tiktok.svg",
    },
    {
      name: "Cosmos",
      href: "https://www.cosmos.so/",
      icon: "/icons/cosmos.svg",
    },
  ],
} as const;

export const navItems = [
  { label: "Hi", href: "/", note: null },
  { label: "Shop", href: site.shopUrl, note: "(Digital Assets)", external: true },
  { label: "Projects", href: "/projects", note: "(Design Portfolio)" },
  { label: "Journey", href: "/journey", note: "(History / Building)" },
  { label: "Recipe", href: "/recipe", note: "(App-Stack)" },
  { label: "Footer", href: "/#footer", note: null },
] as const;

export const skills = [
  "Graphic-Dsgn",
  "Website-Dsgn",
  "UI-Dsgn",
  "App-Dsgn",
  "Poster-Dsgn",
  "Deck-Dsgn",
  "Brand-Dsgn",
  "Logo-Dsgn",
  "Apparel-Dsgn",
  "Packaging-Dsgn",
  "Product-Dsgn",
  "Basically, yes, I can do it.",
] as const;
