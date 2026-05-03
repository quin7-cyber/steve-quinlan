# steve-quinlan

Tools and implementation assets for [steve-quinlan.com](https://www.steve-quinlan.com/) — the commercial home of Steve Quinlan's AI visibility consulting practice.

The site itself runs on Squarespace; this repo holds the bits that needed to be hand-built and pasted in as code, plus a couple of standalone tools that share the site's design system.

## What's in here

### `squarespace-snippets/`

Twelve self-contained HTML/CSS snippets paste-able into Squarespace **Code Blocks** (or Page Header Code Injection for the schema). Each one renders a discrete section of the AI Visibility Scorecard service page and is fully scoped — no JavaScript except where the snippet's purpose requires it, all CSS namespaced under a unique wrapper class so it cannot leak into the rest of the site.

| File | Renders | Lives in |
|---|---|---|
| `01-hero-scorecard.html` | Hero artefact preview (5-bar score chart with composite) | Right column of the hero |
| `02-five-practical-questions.html` | Q_01–Q_05 question list with hairline dividers | Right column of "What the Scorecard is" |
| `03-five-dimensions-cards.html` | Bento layout of the five dimensions (3+3 / 2+2+2) | "Five dimensions of AI visibility" section |
| `04-deliverables-list.html` | DEL_01–DEL_09 deliverables list | Left column of "What you get" |
| `05-deliverables-preview-stack.html` | Three preview cards: exec summary, competitor matrix, 90-day priority | Right column of "What you get" |
| `06-process-timeline.html` | Seven-step rail with timing + owner per step | "How it works" section |
| `07-fit-not-fit-lists.html` | "A good fit if" / "Not the right fit if" lists with filled / hollow bullets | Right column of "Who it is for" |
| `08-vs-seo-geo-cards.html` | Three-card comparison on dark teal (SEO / GEO / Scorecard) | "How this differs from SEO or GEO" section |
| `09-after-three-routes.html` | Three routes, with "Design the system" featured in mint | "What happens after" section |
| `10-pricing-card.html` | Mint pricing card with £2,500, included / not included split, CTA | "Price & scope" section |
| `11-faq-all-open.html` | All 9 FAQs visible by default (no accordion) | "Frequent questions" section |
| `12-page-schema-jsonld.html` | Schema.org JSON-LD: Service + Offer + FAQPage + Person + ProfessionalService + WebPage | Page Header Code Injection |

Each file's leading HTML comment explains what it does, where it goes in Squarespace, and what to swap in over time.

### `ai-visibility-scorecard/`

Standalone static implementation of the full Scorecard page — `index.html`, scoped CSS in `css/`, vanilla JS in `js/`, and bundled `assets/`. No build step. Open `index.html` directly in a browser.

This is the reference build that the snippets compose into. Useful for:

- Previewing the whole page locally before pasting bits into Squarespace
- Comparing the live page against the design baseline
- Showing a client or agency what the assembled service page looks like

It mirrors the "Technical Curator" design system: Newsreader display, DM Sans body, JetBrains Mono labels, paper-cream surface stack, deep-teal primary, mint editorial accent.

### `image-style.html`

Standalone duotone image-treatment tool. Drop in a photo, get a branded duotone version with optional caption, export as PNG. Same design system as the rest of the site.

## Design system (shared)

All three pieces share the same tokens, summarised briefly:

| Token | Value | Used for |
|---|---|---|
| `--primary` | `#00464a` | Headings, ink, dark surfaces |
| `--secondary` | `#29695b` | Mono labels, captions |
| `--secondary-container` | `#acedda` | Mint editorial accent (pull-quotes, pricing card, featured cards) |
| `--surface` | `#fbfbe2` | Paper-cream base |
| `--surface-container-low` | `#f5f5dc` | Alternating section background |
| `--on-primary-muted` | `#8fd8dc` | Muted accents on dark surfaces |
| Display | Newsreader (200–700, italic) | H1–H4, oversized editorial moments |
| Body | DM Sans (300–600) | All body copy |
| Mono | JetBrains Mono | `SECTION 0X //` eyebrows, mono captions |

## Conventions

- **British English** throughout copy.
- **No em dashes** in any copy or markup — use full stops or colons.
- **Scoped CSS only** in snippets — every selector lives under a unique wrapper class (`.ai-vis-scorecard`, `.ai-vis-questions`, `.ai-vis-dims`, etc.) and uses a unique CSS variable prefix (`--avs-`, `--avq-`, `--avd-`, …) so snippets cannot collide with each other or with Squarespace template styles.
- **No JavaScript in snippets** unless strictly necessary. The FAQ is intentionally all-open rather than an accordion so every answer stays extractable by AI engines and crawlers.
- **Schema.org `@id` uses `#fragment`** identifiers (e.g. `#steve`, `#service`) — these are JSON-LD identifiers, not URLs that need to exist on the site.

## Live page

[https://www.steve-quinlan.com/ai-visibility-scorecard](https://www.steve-quinlan.com/ai-visibility-scorecard)
