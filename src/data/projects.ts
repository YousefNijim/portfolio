import type { Project, TechItem } from "./types";

const t = (name: string, category: TechItem["category"]): TechItem => ({ name, category });

export const projects: Project[] = [
  {
    slug: "sho-abalak",
    title: "Sho Abalak",
    titleAlt: "شو عبالك؟",
    tagline: "A multi-app food & store delivery platform serving the West Bank, Palestine.",
    year: "May 2026 — Present",
    role: "Architect & Full-Stack Engineer",
    type: "Delivery Platform — 6 apps + API",
    displayMode: "platform",
    featured: true,
    links: [
      {
        label: "Admin Dashboard (login required)",
        href: "https://shu-abalak-admin-dashboard.vercel.app",
        kind: "dashboard",
      },
    ],
    stats: [
      { value: "6", label: "client apps" },
      { value: "1,200+", label: "commits" },
      { value: "Pre-launch", label: "staging + production" },
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
        "The hard part is not any single app. It is that six clients and one API must agree on the state of an order at every moment, over unreliable mobile connections.",
      ],
    },
    architecture: {
      heading: "Architecture",
      body: [
        "The whole system lives in a single pnpm + Nx monorepo, so shared types and the order-status rules flow from one package out to the API and every client without drift.",
        "A NestJS API backed by PostgreSQL and Prisma (80 models, 111 migrations) owns all business logic. A Socket.io layer pushes live order state into per-user, per-business and admin rooms.",
        "Three React Native / Expo apps (customer, business, driver) and three Next.js web apps (admin dashboard, business portal, public website) consume the same API. Firebase Cloud Messaging delivers push notifications when an app is backgrounded.",
        "Redis carries the Socket.IO adapter, rate limiting, a public response cache and cluster-wide cron locks — and the API degrades gracefully when it is unavailable.",
        "Production runs on Railway (API, Postgres, Redis) with the web apps on Vercel, alongside a separate staging environment, CI build and type checks, and ~480 API unit/e2e tests.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**A guarded state machine for order status.** Order transitions are validated server-side against an explicit allowed-transitions map, plus role and ownership checks, rather than trusting the client. A driver cannot mark an order delivered that was never picked up.",
        "**Offer clocks live in the database, not in memory.** Driver offers started as in-process timers, so every deploy orphaned them. The deadline now lives on the order, the server re-checks it on accept, and an idempotent once-a-minute sweep is the guarantee.",
        "**Real-time that survives a second replica.** Socket.IO rooms live in one process's memory, so with two API replicas about half of all events would silently miss their target. The Redis adapter fans emits out across replicas, and a Redis lock makes each cron job run once per cluster.",
        "**Public routes are allow-lists.** Unauthenticated routes select explicit fields instead of whole records, and an automated check plus a unit test fail the build if a public route starts leaking columns.",
        "**One identity model with roles.** Customers, businesses, drivers and admins share one JWT auth system with role guards and granular admin permissions; refresh tokens rotate on every use with reuse detection.",
        "**An admin control centre, not an admin CRUD.** Live order oversight, business approvals, area and commission management, settlements, and financial reports — built for someone actually running the operation.",
      ],
    },
    media: {
      cover: "/media/sho-abalak/admin/overview.jpg",
      desktop: [
        "/media/sho-abalak/admin/overview.jpg",
        "/media/sho-abalak/admin/analytics.jpg",
        "/media/sho-abalak/admin/reports.jpg",
        "/media/sho-abalak/admin/stores.jpg",
      ],
      phones: [
        "/media/sho-abalak/phones/customer-home.jpg",
        "/media/sho-abalak/phones/business-menu.png",
        "/media/sho-abalak/phones/driver-home.png",
      ],
      gallery: [
        "/media/sho-abalak/phones/customer-food.jpg",
        "/media/sho-abalak/phones/customer-stores.jpg",
        "/media/sho-abalak/phones/customer-orders.png",
        "/media/sho-abalak/phones/business-profile.jpg",
        "/media/sho-abalak/phones/business-orders.jpg",
        "/media/sho-abalak/phones/driver-earnings.png",
        "/media/sho-abalak/phones/driver-profile.png",
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
      { value: "69", label: "API endpoints" },
      { value: "18", label: "table schema" },
      { value: "Android", label: "native build via Expo" },
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
      t("Expo", "mobile"),
      t("Railway", "infra"),
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
        "A pnpm TypeScript monorepo (~16K lines) splits a React 19 + Vite frontend from a 69-endpoint Express.js API, sharing an 18-table Drizzle schema across the boundary.",
        "Persistence is PostgreSQL on Railway, covering users, focus sessions, plant and pet progression, the wallet, cosmetics ownership, and friend challenges. The frontend is deployed on Vercel.",
        "Authentication combines JWT with Google OAuth, and an Expo wrapper ships the app as a native Android build.",
        "The Google Gemini API generates post-session coaching from the user's session data.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**Wallet writes are atomic.** An audit found a double-spend race condition in five deduction paths (store, challenges, pets). Each one is now a single conditional UPDATE … WHERE balance >= price RETURNING, so two parallel requests cannot spend the same coins.",
        "**Challenges resolve under an optimistic lock.** Expiring challenges can be resolved by more than one request at once; the lock makes sure a stake is paid out exactly once.",
        "**AI coaching that never fails loudly.** Gemini generation is idempotent per session — at most one call per completed session, which also bounds cost — and any API failure falls back to a typed message for that session type.",
        "**Google sign-in that works inside a WebView.** Google blocks OAuth in Android WebViews outright (403 disallowed_useragent), so the app exits the WebView: native bridge → Chrome Custom Tab → redirect, with a popup on desktop.",
        "**Vector art instead of raster.** 11 MB of images became ~6 KB of layered SVG (8 plant species × 5 growth stages, 5 animated companions), themed through CSS custom properties for light and dark.",
      ],
    },
    media: {
      cover: "/media/focusoura/garden.jpg",
      phones: [
        "/media/focusoura/home.jpg",
        "/media/focusoura/focus-session.jpg",
        "/media/focusoura/garden.jpg",
      ],
      gallery: ["/media/focusoura/profile.jpg", "/media/focusoura/arena.jpg"],
    },
  },

  {
    slug: "arjwan-istanbul",
    title: "Arjwan Istanbul",
    tagline: "A live trilingual e-commerce storefront for a perfume brand.",
    year: "2026",
    role: "Designer & Developer",
    type: "E-commerce",
    displayMode: "live-embed-gallery",
    embedUrl: "https://arjwan-istanbul.vercel.app",
    links: [
      { label: "arjwan.store", href: "https://arjwan.store", kind: "live" },
      { label: "Source", href: "https://github.com/YousefNijim/arjwan-istanbul", kind: "github" },
    ],
    stats: [
      { value: "3", label: "languages, incl. RTL" },
      { value: "21", label: "REST endpoints" },
      { value: "Live", label: "commercial store" },
    ],
    stack: [
      t("React", "frontend"),
      t("TypeScript", "frontend"),
      t("Express.js", "backend"),
      t("PostgreSQL", "database"),
      t("Drizzle ORM", "database"),
      t("JWT", "backend"),
      t("esbuild", "tooling"),
      t("Vercel", "infra"),
    ],
    context: {
      heading: "Context",
      body: [
        "Arjwan Istanbul is a working perfume business, not a portfolio mockup — the store is live at arjwan.store.",
        "That changes the priorities: customers read Arabic, English and Turkish, the catalog and promotions have to stay editable by a non-developer, and the checkout flow has to work on a phone.",
      ],
    },
    architecture: {
      heading: "Build",
      body: [
        "A React + TypeScript single-page storefront (24 client routes) talks to an Express API (21 REST endpoints) backed by PostgreSQL through Drizzle ORM — about 8,300 lines over 70 commits.",
        "Localization reaches the database, not just the UI: every customer-facing product field is stored in Arabic, English and Turkish, and the layout switches fully to right-to-left for Arabic.",
        "A custom admin dashboard (10 routes, 15 authenticated endpoints) covers products, promotion rules, bundles, orders and image uploads, behind JWT authentication with bcrypt-hashed passwords.",
      ],
    },
    decisions: {
      heading: "Key decisions",
      body: [
        "**A sequential discount engine.** Quantity promotions like “every 2nd item” are resolved by expanding the cart into individual units and applying rules in price order, so overlapping promotions never double-discount the same item.",
        "**Content localized in the database.** Translating only UI strings would have left product names and descriptions in one language; storing each field per language keeps the whole store native in all three.",
        "**An Express API on serverless.** The server is bundled into a single CommonJS artifact with esbuild and routed alongside the SPA fallbacks, so the whole store deploys to Vercel as one project.",
      ],
    },
    media: {
      cover: "/media/arjwan-istanbul/best-sellers.jpg",
      gallery: [
        "/media/arjwan-istanbul/catalog.jpg",
        "/media/arjwan-istanbul/product.jpg",
        "/media/arjwan-istanbul/cart.jpg",
      ],
    },
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
