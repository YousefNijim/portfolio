import type { Project, TechItem } from "./types";

const t = (name: string, category: TechItem["category"]): TechItem => ({ name, category });

export const projects: Project[] = [
  {
    slug: "sho-abalak",
    title: "Sho Abalak",
    titleAlt: "شو عبالك؟",
    tagline: "A multi-app food & store delivery platform serving the West Bank, Palestine.",
    year: "2026 — Present",
    role: "Architect & Full-Stack Engineer",
    type: "Delivery Platform — 4 clients + API",
    displayMode: "platform",
    featured: true,
    links: [
      { label: "Admin Dashboard", href: "https://shu-abalak-admin-dashboard.vercel.app", kind: "dashboard" },
    ],
    stats: [
      { value: "4", label: "client apps" },
      { value: "1", label: "Nx monorepo" },
      { value: "Live", label: "in production" },
    ],
    stack: [
      t("NestJS", "backend"),
      t("PostgreSQL", "database"),
      t("Prisma", "database"),
      t("Redis", "database"),
      t("Socket.io", "backend"),
      t("React Native", "mobile"),
      t("Expo", "mobile"),
      t("Next.js", "frontend"),
      t("TypeScript", "frontend"),
      t("Firebase FCM", "infra"),
      t("Railway", "infra"),
      t("Vercel", "infra"),
      t("Nx", "tooling"),
      t("pnpm", "tooling"),
    ],
    context: {
      heading: "Context",
      body: [
        "Sho Abalak is a delivery marketplace built for the West Bank: customers order from local restaurants and stores, business owners manage their menus and incoming orders, and drivers claim and fulfil deliveries — all coordinated in real time.",
        "The hard part is not any single app. It is that four clients and one API must agree on the state of an order at every moment, over unreliable mobile connections, without ever showing two people a different truth.",
      ],
    },
    architecture: {
      heading: "Architecture",
      body: [
        "The whole system lives in a single pnpm + Nx monorepo, so shared types flow from the Prisma schema out to every client without drift.",
        "A NestJS API backed by PostgreSQL and Prisma owns all business logic. Redis handles caching and pub/sub fan-out. A Socket.io layer pushes live order state to whichever clients are subscribed to that order.",
        "Three React Native / Expo apps (customer, business, driver) and one Next.js admin dashboard consume the same API with role-based JWT authentication. Firebase Cloud Messaging delivers push notifications when an app is backgrounded.",
        "Production runs on Railway (API, Postgres, Redis) with the admin on Vercel, alongside a separate staging environment and CI from GitHub.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**A guarded state machine for order status.** Order transitions are validated server-side against an explicit allowed-transitions map rather than trusting the client. A driver cannot mark an order delivered that was never picked up.",
        "**Role-based JWT rather than four auth systems.** One identity model with roles, so a business owner and a driver hit the same endpoints and are filtered by policy — not by having separate backends.",
        "**WebSockets for state, FCM for attention.** Live tracking travels over Socket.io while the app is open; push notifications exist only to bring the user back, never as the source of truth.",
        "**An admin control centre, not an admin CRUD.** Live order oversight, business approvals, multi-tag categorization, area and commission management, and financial reports — built for someone actually running the operation.",
      ],
    },
    media: {
      cover: "/media/sho-abalak/cover.png",
      desktop: ["/media/sho-abalak/admin-1.png", "/media/sho-abalak/admin-2.png"],
      phones: [
        "/media/sho-abalak/customer.png",
        "/media/sho-abalak/business.png",
        "/media/sho-abalak/driver.png",
      ],
    },
  },

  {
    slug: "focusoura",
    title: "FocusOura",
    tagline: "A gamified productivity web app that turns study sessions into progression.",
    year: "2026",
    role: "Full-Stack Engineer",
    type: "Web Application",
    displayMode: "live-embed",
    featured: true,
    embedUrl: "https://focusoura.vercel.app",
    links: [
      { label: "Live site", href: "https://focusoura.vercel.app", kind: "live" },
      { label: "Source", href: "https://github.com/YousefNijim/FocusOura", kind: "github" },
    ],
    stats: [
      { value: "12", label: "table schema" },
      { value: "AI", label: "session insights" },
      { value: "Monorepo", label: "React + Express" },
    ],
    stack: [
      t("React", "frontend"),
      t("Vite", "frontend"),
      t("TypeScript", "frontend"),
      t("Express.js", "backend"),
      t("Drizzle ORM", "database"),
      t("PostgreSQL", "database"),
      t("JWT", "backend"),
      t("Google Gemini", "ai"),
      t("pnpm", "tooling"),
    ],
    context: {
      heading: "Context",
      body: [
        "Timers do not make people study. Progression does. FocusOura wraps focus sessions in a game loop: you grow a virtual plant, earn currency, spend it on cosmetics, and challenge friends.",
        "The goal was to make the reward structure feel earned rather than arbitrary — which meant the session data had to be trustworthy, and the feedback had to be about your actual behaviour.",
      ],
    },
    architecture: {
      heading: "Architecture",
      body: [
        "A pnpm monorepo splits a React + Vite frontend from an Express.js backend, sharing types across the boundary.",
        "Persistence is a 12-table PostgreSQL schema modelled with Drizzle ORM, covering users, sessions, plant progression, wallet transactions, cosmetics ownership, and friend challenges.",
        "Authentication is JWT-based with server-side session management.",
        "The Google Gemini API reads aggregated session data and generates personalized study insights — the feature that turns raw logs into something a user acts on.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**Currency and cosmetics as separate tables, not user columns.** Every coin earned or spent is a row, so the wallet can be audited and a bug can be traced instead of guessed at.",
        "**Gemini receives aggregates, not raw rows.** Session data is summarised server-side before it reaches the model — cheaper, faster, and it keeps the prompt stable as the dataset grows.",
        "**Drizzle over a heavier ORM.** The schema is the TypeScript type. Migrations stay readable and nothing is generated behind my back.",
      ],
    },
    media: {
      cover: "/media/focusoura/cover.png",
      gallery: [],
    },
  },

  {
    slug: "arjwan-istanbul",
    title: "Arjwan Istanbul",
    tagline: "A live commercial e-commerce storefront for a perfume brand.",
    year: "2026 — Present",
    role: "Designer & Developer",
    type: "E-commerce",
    displayMode: "live-embed-gallery",
    embedUrl: "https://arjwan-istanbul.vercel.app",
    links: [
      { label: "arjwan.store", href: "https://arjwan.store", kind: "live" },
      { label: "Source", href: "https://github.com/YousefNijim/arjwan-istanbul", kind: "github" },
    ],
    stats: [
      { value: "Live", label: "commercial store" },
      { value: "100%", label: "responsive" },
      { value: "Next.js", label: "App Router" },
    ],
    stack: [
      t("Next.js", "frontend"),
      t("TailwindCSS", "frontend"),
      t("JavaScript", "frontend"),
      t("Vercel", "infra"),
    ],
    context: {
      heading: "Context",
      body: [
        "Arjwan Istanbul is a working perfume business, not a portfolio mockup. The site takes real orders.",
        "That changes the priorities: the product catalog has to stay editable by a non-developer, the checkout flow has to work on a phone in one hand, and the brand has to look expensive without a photographer's budget.",
      ],
    },
    architecture: {
      heading: "Build",
      body: [
        "Built on Next.js with TailwindCSS, deployed on Vercel with continuous delivery from GitHub.",
        "The storefront covers the product catalog, product detail pages, and the checkout flow, designed mobile-first throughout.",
        "AI-assisted workflows were used through the build to move quickly from design direction to shipped pages.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**Mobile-first, genuinely.** The majority of traffic is phones arriving from social links, so the phone layout was designed first and the desktop layout derived from it.",
        "**Static-first rendering.** Catalog pages are pre-rendered so the store stays fast and cheap to run at low traffic.",
      ],
    },
    media: {
      cover: "/media/arjwan-istanbul/cover.png",
      gallery: [],
    },
  },

  {
    slug: "codeoura",
    title: "CodeOura",
    tagline: "Web presence for a software services company, designed and built from scratch.",
    year: "2026 — Present",
    role: "Designer & Developer",
    type: "Company Website",
    displayMode: "live-embed-compact",
    embedUrl: "https://codeoura.vercel.app",
    links: [
      { label: "codeoura.com", href: "https://codeoura.com", kind: "live" },
      { label: "Source", href: "https://github.com/YousefNijim/codeoura", kind: "github" },
    ],
    stats: [
      { value: "Firestore", label: "dynamic content" },
      { value: "CI/CD", label: "from GitHub" },
    ],
    stack: [
      t("Next.js", "frontend"),
      t("TypeScript", "frontend"),
      t("Firebase Firestore", "database"),
      t("Vercel", "infra"),
    ],
    context: {
      heading: "Context",
      body: [
        "CodeOura needed a public face that could be updated without a redeploy every time a service description or case reference changed.",
      ],
    },
    architecture: {
      heading: "Build",
      body: [
        "Next.js App Router with TypeScript, using Firebase Firestore as the backend for dynamic content management.",
        "Deployed and maintained on Vercel with continuous delivery from GitHub.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**Firestore instead of a CMS.** The content model is small and the team is technical — a full CMS would have been more surface area than the site needed.",
      ],
    },
    media: {
      cover: "/media/codeoura/cover.png",
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
