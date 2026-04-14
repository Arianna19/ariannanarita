# Arianna Portfolio Website 2026

This repository contains Arianna Sanchez Narita's portfolio website, built with `React`, `TypeScript`, `Vite`, `Tailwind`, and `motion`.

The site is designed as a portfolio that feels polished without becoming stiff. The visual language mixes clarity, humor, soft ocean-inspired motion, and Japanese wave references so the work feels personal instead of generic.

## Running the site

Install dependencies:

```bash
npm install
```

Start local development:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Page guide

### Home

The home page acts like a curated landing space rather than a plain index.

- The hero introduces Arianna with a direct tone and a portrait-led card.
- `What I bring to a team` frames the main strengths in a fast, recruiter-friendly way.
- `Skills Preview` gives a compact teaser before the full skills experience on the biography page.
- `Selected Work` highlights the three featured projects and routes users into detailed case studies.
- `Words of Wisdom` keeps the tone human and playful, which supports the overall voice of the site.

### Artist Statement

This page is the long-form explanation of Arianna's design values.

- The central reading card keeps the text as the primary focus.
- The `Relatable Mood` section uses a held-scroll interaction so the emotional tone of the work becomes part of the page experience.
- The shared seigaiha cluster background ties this page to the biography page without overpowering the text.

### Biography

This page balances biography, practice, and tools.

- The page opens with personal context, current focus, and a portrait.
- `Journey Through Design` explains the path from early visual experimentation to current UX/UI practice.
- `Skills & Tools` turns into a scroll-held horizontal experience so the page feels more dynamic than a static list.
- The background uses floating seigaiha clusters to add atmosphere while keeping the content readable.

### Selected Work pages

Each project page follows the same case-study structure so users can move between them without relearning the layout.

- Hero section: project title, role, duration, year, client, and a quick `Jump to Images` button.
- Thesis: what the project is about and why it matters.
- Ideation: early thinking, research, and framing.
- Approach: how the solution was shaped.
- Creative Works: images and assets with lightbox behavior so users can inspect the visuals more closely.

#### IA Financial Group

This case study focuses on logo development and clarity.

- The palette leans into financial blues and clean neutrals.
- The page emphasizes legibility, monogram development, and practical brand use.

#### Flavor Bridge

This case study is more playful and product-focused.

- The palette comes directly from the app concept.
- The page uses cooking and recipe cues to support the product's identity.
- The content focuses on research, matching behavior, shared cooking, and mobile interaction.

#### The Center Cannot Hold

This case study focuses on accessibility and information hierarchy.

- The page keeps a darker, more atmospheric tone to fit the source project.
- The `Before` and `After` sections help show how hierarchy and orientation improved.
- The content centers on neurodivergent-friendly structure, stronger titles, and clearer navigation.

### Contact

The contact page keeps the same voice as the rest of the site while staying straightforward.

- The form is simple and readable.
- The CTA language stays friendly rather than corporate.

## Design decisions

### Shared visual direction

- Ocean and wave motifs appear throughout the site to connect the pages visually.
- Seigaiha-inspired graphics are used as a recurring signature motif.
- Rounded cards and soft shadows keep the site friendly rather than severe.

### Motion and scroll behavior

- Motion is used to guide attention, not just decorate.
- Some sections intentionally hold the screen while content moves horizontally. This creates pacing and makes the portfolio feel more editorial.
- Project galleries support click-to-expand inspection for closer image viewing.

### Tone of voice

- The writing is intentionally warm, humorous, and direct.
- The goal is to show professionalism without sounding distant or over-rehearsed.

### Responsive behavior

- The site is designed for desktop, tablet, and mobile.
- Navigation collapses to a hamburger menu on smaller screens.
- Project and gallery layouts adapt so the portfolio stays readable across devices.

## Notable shared components

- `Navigation`: global nav, theme toggle, mobile menu, and active-section behavior.
- `RouteLoadingOverlay`: route-specific skeleton loading states.
- `PageContactCta`: reusable end-of-page contact section.
- `SeigaihaClusterBackground`: shared floating background pattern used on long-form pages.
- `WaveTransition`: section dividers that keep the site visually connected.

## Content and assets

The repository includes project-specific exported assets in `public/` and local portrait imports in `src/imports/`.

Case-study visuals currently include:

- IA Financial branding assets
- Flavor Bridge app screens and logo exports
- The Center Cannot Hold redesign screenshots and wireframes

## Maintenance notes

- If a new long-form page should match the biography and artist statement atmosphere, reuse `SeigaihaClusterBackground`.
- If a new project page is added, follow the existing `ProjectDetailPage` structure so the case-study rhythm stays consistent.
