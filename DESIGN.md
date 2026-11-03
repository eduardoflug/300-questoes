# Design Brief

## Direction

Boletim de Guerra — a dark-navy exam briefing dossier that makes 300 practice questions feel like a tactical mission for the Guarda Municipal de Imperatriz-MA.

## Tone

Disciplined military-editorial: high-contrast navy ink, signal green, and gold numerals; confident and serious, never playful.

## Differentiation

Mono-numeral stat blocks and hairline-bordered "dossier" cards turn a plain PDF pitch into a command-center briefing the buyer trusts.

## Color Palette

| Token      | OKLCH         | Role                                    |
| ---------- | ------------- | --------------------------------------- |
| background | 0.16 0.028 265 | Deep navy ink base                      |
| foreground | 0.96 0.008 265 | Near-white primary text                 |
| card       | 0.205 0.032 265 | Elevated dossier surface               |
| primary    | 0.78 0.19 150  | Signal-green CTA / active states        |
| accent     | 0.82 0.17 88   | Gold highlights and key numerals        |
| muted      | 0.26 0.035 265 | Inactive / low-emphasis surfaces        |
| border     | 0.3 0.03 265   | Hairline dividers and card outlines     |

## Typography

- Display: Space Grotesk — hero headline, section headings, oversized numerals
- Body: General Sans — paragraphs, UI labels, FAQ copy
- Mono: Geist Mono — eyebrows, badges, question counts, step numbers
- Scale: hero `text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `eyebrow`, body `text-base md:text-lg text-muted-foreground`

## Elevation & Depth

Layered navy surfaces with hairline borders and inset-top highlights; depth via `shadow-elevated` on cards and `shadow-signal` on the primary CTA, no glow.

## Structural Zones

| Zone    | Background      | Border   | Notes                                            |
| ------- | --------------- | -------- | ------------------------------------------------ |
| Header  | background/80 blur | border-b | Sticky slim bar, brand mark + mono price chip |
| Hero    | background + subtle gradient | — | Eyebrow pill, huge headline, green CTA |
| Content | alternating card / background | — | Subject grid, pain cards, how-to, pricing, FAQ |
| Footer  | muted/40        | border-t | Legal disclaimer in muted small text             |

## Spacing & Rhythm

Generous section gaps (`py-16 md:py-24`), max-w-6xl container, content grouped in cards with `gap-4 md:gap-6`; micro-spacing uses 4/8/12px steps.

## Component Patterns

- Buttons: primary = signal-green pill, dark text, `shadow-signal`, hover brightens + lifts; secondary = outline on hairline border
- Cards: 12–16px radius, `bg-card`, `border-border`, `shadow-elevated`, inset-soft top highlight
- Badges: mono uppercase pills — gold outline for "MATERIAL DIGITAL", green fill for counts

## Motion

- Entrance: `animate-fade-up` on hero and section blocks, staggered via delay classes
- Hover: `transition-smooth` lift + border brighten on cards and buttons
- Decorative: `pulse-signal` on the live badge dot, `float-slow` on ambient accent shapes

## Constraints

- Dark mode is primary; keep AA+ contrast on every text/surface pair
- Tokens only — no raw hex, rgb, or arbitrary color classes in components
- Portuguese (BR) copy; price always R$ 14,90; no PDF generation, member area, or interactive quiz UI

## Signature Detail

Oversized gold mono numerals ("300", "140") sitting on navy cards — a stat-block motif borrowed from mission briefings, unique to this product.
