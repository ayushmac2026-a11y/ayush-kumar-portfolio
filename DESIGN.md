# Design Brief

## Direction
Ayush Kumar Portfolio — Premium, minimal, editorial personal showcase for a Communication Design student.

## Tone
Refined minimalism with warm editorial elegance; sophisticated without pretension — designed for visually literate audiences (recruiters, collaborators, potential employers).

## Differentiation
Instrument Serif display with Satoshi body creates an uncommon luxury pairing; muted sage accent (not default blue) signals design expertise; generous whitespace and soft shadows convey calm professionalism.

## Color Palette

| Token      | OKLCH       | Role                             |
|------------|-------------|----------------------------------|
| background | 0.98 0.008 75 | Warm cream base                  |
| foreground | 0.18 0.02 50  | Deep charcoal text               |
| card       | 1.0 0.004 75  | Pure white cards                 |
| primary    | 0.42 0.16 260 | Deep indigo accent (CTA, focus)  |
| accent     | 0.58 0.12 165 | Muted sage (highlights, hover)   |
| muted      | 0.92 0.008 75 | Light dividers, borders          |
| destructive| 0.55 0.22 25  | Warm red (alerts, warnings)      |

## Typography
- Display: Instrument Serif (italic) — Hero, h1, h2; elegant, editorial voice
- Body: Satoshi — Paragraphs, UI labels, navigation; warm, modern, highly legible
- Scale: Hero `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl md:text-5xl font-bold tracking-tight`, label `text-sm font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth
Soft shadows on cards (shadow-soft, shadow-elevated) create visual layers; no depth hierarchy via color — only via spacing, shadow, and typography weight.

## Structural Zones

| Zone    | Background        | Border             | Notes                                |
|---------|-------------------|--------------------|--------------------------------------|
| Header  | bg-background     | border-b border-border | Transparent, minimal; text anchors  |
| Section | bg-card / bg-background (alt) | — | Card zones on white, section zones on cream; alternating rhythm |
| Footer  | bg-background     | border-t border-border | Minimal, sparse content, text-muted  |

## Spacing & Rhythm
Section gaps: 4rem (desktop); subsection gaps: 2rem; card padding: 1.5rem–2rem; internal elements: 0.5rem–1rem. Breathing room between all content — density is low, visual hierarchy via whitespace.

## Component Patterns
- Buttons: Deep indigo primary with white text, rounded-md, shadow-soft on hover, no border
- Cards: Pure white (bg-card), rounded-md, shadow-soft, hover lifts to shadow-elevated with transition-smooth
- Pills/badges: Muted background, foreground text, rounded-full, text-label

## Motion
- Entrance: fade-in (0.6s) for sections on scroll; slide-up (0.5s) for cards staggered
- Hover: transition-smooth (0.3s) on all interactive elements, lift effect on cards (shadow-soft → shadow-elevated)
- Decorative: none; motion reserved for interactive feedback only

## Constraints
- No animations that distract from content; motion must serve hierarchy, not ornament
- All text on color must maintain AA+ contrast; verify with OKLCH L difference ≥0.7
- Mobile: full-width with 1rem padding; no horizontal scroll; grid-1col
- Desktop-first responsive: base → sm (640px) → md (768px) → lg (1024px)

## Signature Detail
Alternating section backgrounds (cream/white) create a subtle grid rhythm without additional visual elements, anchoring the editorial aesthetic while keeping the page breathable and premium.
