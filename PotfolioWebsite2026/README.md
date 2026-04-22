# Arianna Portfolio Website 2026

Last edited: April 22, 2026

## Site Purpose

- This website is Arianna Sanchez Narita's personal portfolio for presenting graphic design, UI design, UX thinking, creative direction, and visual storytelling work.
- The site is built to help viewers understand Arianna's design voice, process, selected projects, and personality in one polished digital space.
- The portfolio is intended for recruiters, collaborators, clients, instructors, and anyone reviewing Arianna's creative and UX/UI work.
- The overall experience balances professional case-study structure with a warm, personal tone so the site does not feel like a generic template.
- The visual system uses soft ocean-inspired motion, wave motifs, rounded containers, expressive typography, and personal imagery to make the portfolio feel recognizable and cohesive.
- The writing style is intentionally clear, direct, and human, with small moments of humor that support Arianna's personal brand.

## Main Goals

- Introduce Arianna clearly on the home page with a strong first impression, portrait image, and concise design positioning.
- Present selected work through detailed project pages that explain the problem, thinking, approach, role, and final visuals.
- Show both visual design ability and UX reasoning rather than only displaying finished images.
- Make project pages easy to compare by giving them a consistent case-study structure.
- Keep the portfolio usable in light mode and dark mode with readable contrast and accessible layout behavior.
- Provide simple navigation to home, selected work, artist statement, biography, resume, and contact.
- Give viewers a clear way to download the resume and reach out through the contact page.

## Pages

- Home:
  - Introduces Arianna and the purpose of the portfolio.
  - Highlights selected work cards for the featured projects.
  - Shows a quick snapshot of skills, personality, and creative tone.
  - Uses the latest portrait image for the main visual card.

- Selected Work:
  - Acts as the main project showcase area.
  - Routes users into detailed project case studies.
  - Presents each project with a preview image, category, short description, and tags.

- Project Detail Pages:
  - Use a shared structure so each project feels consistent and easy to scan.
  - Include hero content, project metadata, thesis, ideation, approach, creative works, and role notes.
  - Support image-focused viewing for screenshots, mockups, wireframes, and final visuals.

- Artist Statement:
  - Explains Arianna's design values and creative perspective.
  - Gives the portfolio more context beyond the project images.
  - Helps viewers understand the thinking behind the work.

- Biography:
  - Shares Arianna's background, design journey, skills, tools, and current creative focus.
  - Supports the personal side of the portfolio while staying relevant to professional review.

- Contact:
  - Gives users a direct way to reach Arianna.
  - Keeps the call to action simple, friendly, and easy to understand.

## Featured Case Studies

- IA Financial Group:
  - Focuses on logo design, brand identity, client collaboration, and professional visual clarity.
  - Shows how a clean monogram and restrained brand system can support financial-advisor credibility.

- The Center Cannot Hold:
  - Focuses on accessibility, information hierarchy, navigation clarity, and neurodivergent-friendly redesign decisions.
  - Shows how an immersive arts website can become easier to use without losing its atmosphere.
  - Includes before-and-after design work, wireframes, and redesigned content structures.

- Flavor Bridge:
  - Focuses on UX research, mobile app design, interaction flow, recipe discovery, and mixed-culture cooking needs.
  - Shows how research and app patterns can support a playful but practical product concept.

- Wasteland Survivors:
  - Focuses on collaborative board-game design, card systems, art direction, survival-themed visuals, and playtest presentation.
  - Shows how visual hierarchy, icons, card framing, and theme consistency can make a tabletop concept easier to understand.

## Technology

- Built with React, TypeScript, Vite, Tailwind CSS, and Motion.
- Uses React Router for page routing.
- Uses project assets from the `public/` folder and imported local images from `src/imports/`.
- Uses reusable components for navigation, page transitions, wave dividers, background visuals, loading states, and contact calls to action.

## Design Direction

- The site uses ocean and wave references as a repeating visual identity.
- The interface favors rounded cards, soft borders, layered backgrounds, and readable spacing.
- Motion is used to add rhythm and guide attention without making the site hard to navigate.
- Project pages use distinct palettes so each case study has its own visual mood while still belonging to the same portfolio.
- Image galleries and project visuals are designed to help viewers inspect the work rather than only skim it.

## Accessibility And Usability

- The site is designed to be readable across desktop, tablet, and mobile viewports.
- Dark mode and light mode are supported throughout the interface.
- Contrast is handled carefully on dark project pages so text does not blend into the background.
- Navigation adapts for smaller screens.
- Project cards, buttons, and image areas are sized to avoid clipped content where possible.

## Running The Site

- Install dependencies:

```bash
npm install
```

- Start the local development server:

```bash
npm run dev
```

- Create a production build:

```bash
npm run build
```

## Maintenance Notes

- Keep project pages consistent with the existing case-study structure when adding new work.
- Add new project images to `public/` when they need stable public paths.
- Add imported personal or interface assets to `src/imports/` when they are used directly in React components.
- Check both light mode and dark mode after visual changes.
- Run `npm run build` before committing site changes.
