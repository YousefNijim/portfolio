# DESIGN.md — Yousef Nijim Portfolio

> Single source of truth for visual identity, motion, and content structure.
> Read this before any task. Update it when a decision changes.

---

## 1. Direction

**Minimal Swiss / International Typographic Style + one accent.**

Principles:
1. **Typography is the design.** Scale, weight, and spacing carry the hierarchy — not decoration.
2. **Grid discipline.** Everything aligns to a 12-column grid with a hard baseline rhythm.
3. **One accent color, used sparingly.** If accent is everywhere it stops meaning anything.
4. **Motion is functional.** It reveals structure and confirms interaction. Never ornamental.
5. **Whitespace is content.** Generous, asymmetric, confident.

Anti-goals: gradient meshes, glowing cards, neon, glassmorphism, particle backgrounds, emoji as UI.

---

## 2. Color

Light-first, with a true dark mode. Defined as CSS variables in `globals.css`.

### Light (default)
| Token | Value | Use |
|---|---|---|
| `--bg` | `#FAFAF8` | Page background (warm off-white, not pure white) |
| `--surface` | `#FFFFFF` | Cards, elevated panels |
| `--fg` | `#0A0A0A` | Primary text |
| `--fg-muted` | `#6B6B68` | Secondary text, captions |
| `--fg-subtle` | `#A3A3A0` | Meta labels, disabled |
| `--line` | `#E4E4E0` | Hairline rules, borders |
| `--accent` | `#FF4A1C` | Signal orange — links, active state, key numbers |
| `--accent-fg` | `#FFFFFF` | Text on accent |

### Dark
| Token | Value |
|---|---|
| `--bg` | `#0A0A0A` |
| `--surface` | `#141413` |
| `--fg` | `#F5F5F2` |
| `--fg-muted` | `#8A8A85` |
| `--fg-subtle` | `#5C5C58` |
| `--line` | `#26262400` → `#262624` |
| `--accent` | `#FF5C33` (lifted for contrast on dark) |

### Accent budget (hard rule)
Max **3 accent elements visible per viewport**. Accent is reserved for:
- The active nav item
- Link hover / focus ring
- One key metric or word per section

Never: accent backgrounds on large areas, accent body text, accent borders on every card.

---

## 3. Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display | **Inter Tight** | 500 / 600 | Tight tracking (`-0.03em`), Helvetica-adjacent |
| Body | **Inter** | 400 / 500 | `-0.011em` tracking |
| Mono / meta | **Geist Mono** | 400 | Uppercase labels, tech tags, numbers |

Loaded via `next/font/google` (Inter Tight, Inter) and `geist/font/mono`.

### Scale (clamp-based, fluid)
| Token | Size | Line height | Use |
|---|---|---|---|
| `display-xl` | `clamp(3.5rem, 11vw, 9rem)` | 0.92 | Hero name |
| `display-l` | `clamp(2.5rem, 6vw, 4.5rem)` | 1.0 | Section headings |
| `display-m` | `clamp(1.75rem, 3vw, 2.5rem)` | 1.1 | Project titles |
| `body-l` | `clamp(1.05rem, 1.4vw, 1.25rem)` | 1.6 | Lead paragraphs |
| `body` | `1rem` | 1.65 | Default |
| `meta` | `0.75rem` | 1.4 | Mono, `0.08em` tracking, uppercase |

### Rules
- Body copy max width: **65ch**.
- Section labels are mono, uppercase, `--fg-subtle`, prefixed with an index: `01 / SELECTED WORK`.
- Never center long-form text. Headings may be left-aligned only.

---

## 4. Layout

- **Grid:** 12 columns, gutter `24px`, max content width `1280px`, page padding `clamp(1.25rem, 5vw, 5rem)`.
- **Section rhythm:** vertical padding `clamp(6rem, 14vh, 12rem)`.
- **Rules:** 1px hairlines (`--line`) separate sections. This is the primary structural device.
- **Breakpoints:** `sm 640 / md 768 / lg 1024 / xl 1280`.

---

## 5. Motion System

Library: **`motion/react`** (Motion v13). All animation goes through the shared primitives in `src/lib/motion.ts` — no ad-hoc durations in components.

### Easing & duration tokens
```ts
ease.out   = [0.16, 1, 0.30, 1]    // default reveal — expo-out
ease.inOut = [0.65, 0, 0.35, 1]    // state change
spring.soft = { type: "spring", stiffness: 260, damping: 30 }
spring.snap = { type: "spring", stiffness: 400, damping: 28 }

dur.fast = 0.25   dur.base = 0.55   dur.slow = 0.9
```

### Named patterns
| Pattern | Where | Behaviour |
|---|---|---|
| `revealUp` | Section content | `y: 24 → 0`, `opacity: 0 → 1`, `dur.base`, `ease.out` |
| `staggerChildren` | Lists, project grid | `0.06s` delay step |
| `splitLines` | Hero headline | Per-line mask reveal, `y: 100% → 0`, stagger `0.08` |
| `scrollProgress` | Sticky section headers | `useScroll` + `useTransform` |
| `magneticHover` | Primary CTA, project cards | Cursor-follow translate, max `8px`, `spring.soft` |
| `pageTransition` | Route changes | Shared-layout fade + `y: 12`, `dur.fast` |
| `counterRoll` | Stat numbers | Count-up on `whileInView` |
| `marquee` | Tech stack strip | Infinite `x` loop, pauses on hover |

### Rules
- `whileInView` with `viewport={{ once: true, margin: "-15%" }}` — never re-animate on scroll back.
- Reveal delays never exceed **0.4s total** — the page must feel instant.
- **`prefers-reduced-motion`** is honoured globally: transforms drop to opacity-only, marquee stops.
- No animation blocks content from being readable at any point.

---

## 6. Page Structure

Single-page scroll with dedicated case-study routes.

```
/                        Home
  00  Hero               Name, role, one-line positioning, availability chip
  01  Selected Work      4 case-study cards (see §7)
  02  Technologies       Grouped stack, mono tags, marquee strip
  03  Experience         Timeline: Travel Time Agency, Al-Rowad, Halic University
  04  About              Short profile + portrait + languages
  05  Contact            Email, LinkedIn, GitHub, CV download

/work/[slug]             Case study (4 pages)
```

### Chrome
- Fixed minimal header: monogram `YN` left, section index right, theme toggle.
- Scroll progress hairline under the header.
- Footer: local time in Istanbul, `© 2026`, back-to-top.

---

## 7. Project Presentation — one format per project type

Each project gets the display mode its medium deserves.

| Project | Type | Display mode |
|---|---|---|
| **Sho Abalak** | Multi-app platform | **Hero case study.** Architecture diagram (inline SVG) + 3 phone frames (customer / business / driver) side by side with staggered scroll reveal + desktop admin frame. Private repo → no code link; sell the architecture. |
| **FocusOura** | Web app | **Live embed.** Scroll-locked browser frame with `<iframe>` of the live site + gamification feature callouts pinned to scroll positions. |
| **Arjwan Istanbul** | E-commerce | **Live embed + product gallery.** Browser frame, plus a horizontal-scroll strip of storefront screens. Real commercial store — lead with that. |

### Shared case-study anatomy
`Hero (title, one-liner, role, year)` → `Context & problem` → `Architecture` → `Key decisions` → `Stack` → `Links` → `Next project`

### Components this requires
- `<BrowserFrame>` — chrome-less macOS-style window, lazy-loads iframe on first view
- `<PhoneFrame>` — device bezel for Expo app screenshots
- `<ArchitectureDiagram>` — inline SVG, theme-aware, animated stroke draw-in
- `<TechTag>` — mono pill
- `<ProjectCard>` — magnetic hover, media preview on hover

---

## 8. Content Source

All copy and metadata live in `src/data/` — no CMS.
```
src/data/
  profile.ts     name, role, bio, contact, languages
  projects.ts    the 4 case studies (typed)
  experience.ts  work + volunteering + education
  stack.ts       grouped technologies
```
Media lives in `public/media/<project-slug>/`.

---

## 9. Quality Bar

- **Language:** English only.
- **Accessibility:** WCAG AA contrast, visible focus rings (accent, 2px offset), full keyboard nav, semantic landmarks.
- **Performance:** Lighthouse ≥ 95 on all four. Images via `next/image` + AVIF. Iframes lazy. Motion bundle code-split.
- **SEO:** per-route metadata, OG images, `sitemap.ts`, `robots.ts`, Person JSON-LD.
- **Responsive:** verified at 375 / 768 / 1440.
