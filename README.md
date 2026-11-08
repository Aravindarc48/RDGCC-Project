# RightDirect Website

A responsive website built with **Astro** and **Sanity CMS** for RightDirect.

## Live Links

- **Live Website:** https://rdgcc-project.vercel.app
- **GitHub Repository:** https://github.com/Aravindarc48/RDGCC-Project
- **Sanity Studio:** https://rdgcc-cms.sanity.studio

## Tech Stack

- Astro
- Sanity CMS
- JavaScript / TypeScript
- HTML and CSS
- Vercel (Frontend Deployment)
- Sanity Studio Hosting

## Features

- Responsive design for desktop, tablet, and mobile
- Headless CMS integration using Sanity
- CMS-managed homepage content
- Dynamic images and content
- Reusable Astro components
- SEO metadata management
- Client testimonials and success stories
- FAQ section
- Navigation and responsive layouts

## Project Structure

```text
RDGCC/
├── public/
├── src/
│   ├── components/
│   │   ├── navbar/
│   │   ├── Hero.astro
│   │   ├── Stats.astro
│   │   ├── Services.astro
│   │   ├── HowWeWork.astro
│   │   ├── SuccessStories.astro
│   │   ├── TrustedBrands.astro
│   │   ├── ClientAppreciation.astro
│   │   ├── WhoWeWorkWith.astro
│   │   ├── FAQ.astro
│   │   ├── ReadyToMoveFaster.astro
│   │   └── Footer.astro
│   ├── layouts/
│   ├── lib/
│   │   └── sanity.ts
│   ├── pages/
│   │   └── index.astro
│   └── styles/
├── rightdirect-cms/
│   ├── schemaTypes/
│   ├── sanity.config.ts
│   └── sanity.cli.ts
├── .env.example
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- npm
- A Sanity account

### 1. Clone the repository

```bash
git clone https://github.com/Aravindarc48/RDGCC-Project.git
cd RDGCC-Project
```

### 2. Configure the Astro frontend

Install dependencies:

```bash
npm install
```

Create a `.env` file in the project root:

```env
PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
PUBLIC_SANITY_DATASET=your_sanity_dataset
```

Replace the placeholders with your actual Sanity project ID and dataset.

Start the Astro development server:

```bash
npm run dev
```

Frontend: http://localhost:4321

### 3. Configure Sanity Studio

Open a separate terminal:

```bash
cd rightdirect-cms
npm install
npm run dev
```

Sanity Studio: http://localhost:3333

## Architecture

The project uses a headless CMS architecture.

- **Astro:** Renders the website and manages reusable UI components.
- **Sanity CMS:** Stores and manages website content, images, and SEO information.
- **Sanity Client:** Fetches CMS content for the Astro frontend.
- **Vercel:** Hosts the frontend website.
- **Sanity Hosting:** Hosts the content management studio.

Website content can be managed through Sanity Studio without directly modifying the frontend components.

## Deployment

### Frontend

The Astro frontend is deployed on Vercel and connected to the GitHub repository.

Configure these environment variables in Vercel:

- `PUBLIC_SANITY_PROJECT_ID`
- `PUBLIC_SANITY_DATASET`

### Sanity Studio

Sanity Studio is deployed using:

```bash
npx sanity deploy
```

Studio URL: https://rdgcc-cms.sanity.studio

## Assumptions

- Sanity is used as the headless CMS for editable website content.
- The website uses a responsive layout across common device sizes.
- Public website content is managed through Sanity Studio.
- The frontend and CMS are deployed independently.

## Content-Driven Architecture & Zero Hardcoding

Every piece of copy, media, navigation, and CTA on the page is driven dynamically from Sanity CMS:
- **No Hardcoded Fallbacks:** Default string fallbacks and schema `initialValue` hardcodings have been eliminated. Missing content gracefully omits the element instead of rendering fallback text.
- **Strict Content Modeling:** Every image schema includes a required `alt` text field with validation rules and editorial guidance.
- **Conditional Elements:** Anchor tags (`<a>`) are only rendered when valid URLs exist in Sanity, preventing dead links (`#`) and maintaining valid semantic HTML.

## Accessibility and Performance

- **Heading Hierarchy & Landmarks:** Structured with a single `<h1>` for the page (`Hero`), logical `<h2>` / `<h3>` heading levels, screen-reader-accessible section labels (`.sr-only`), and semantic landmarks (`<main id="main-content">`, `<nav>`, `<header>`, `<footer>`).
- **Keyboard Navigation & Skip Link:** Added an accessible "Skip to main content" link targeting `#main-content`, high-contrast visible focus rings (`:focus-visible`) across all interactive links and buttons, and removed non-interactive tab stops (`tabindex="0"`) from static content cards.
- **Mobile Mega Menu Accordion:** The multi-tier navigation menu transforms into a native-feeling mobile accordion on screens under 1100px. Clicking the category (e.g., "Accelerate Go-to-Market") expands child services directly underneath it with an animated arrow indicator (`›`), indented items, and clear touch targets.
- **Mobile Testimonials (Client Appreciation):** Testimonials and quote details are centered on mobile screens with responsive typography, optimized image alignment, and clean quotation formatting.
- **Accessible Carousel & Motion:** Client appreciation carousel includes explicit pause/play toggle controls, automatically pauses on hover (`mouseenter`) and keyboard focus (`focusin`), and respects user system preferences by disabling autoplay when `prefers-reduced-motion: reduce` is detected.
- **Image Optimization:** Dynamic Sanity images include explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS), responsive `srcset` and `sizes`, modern format delivery (`.auto('format')` for WebP/AVIF), and asynchronous decoding. The hero image is loaded eagerly with `fetchpriority="high"`, while below-the-fold media loads lazily.
- **Unified GROQ Fetching & Defensive Rendering:** Replaced sequential API requests with a unified GROQ query fetching all 10 page sections in a single round-trip, significantly reducing build times and network overhead. Section rendering is guarded against empty DOM shells when collections are empty or null.
- **SEO & Search Indexing:** Configured canonical URLs via `Astro.site`, dual SVG/ICO favicons, Open Graph / Twitter Card tags, auto-generated XML Sitemap (`sitemap-index.xml`), `robots.txt`, and dynamic **JSON-LD Schema.org Structured Data** (`Organization`, `WebSite`, `WebPage`) generated dynamically from CMS fields.

## Assessment Bonus Criteria Delivered

- [x] **TypeScript Implementation:** Strict TypeScript types throughout (`PageData`, `HeroData`, `Navigation`, `SanityImage`, etc.) with zero runtime `any`.
- [x] **SEO Enhancements:** Canonical tags, Open Graph, Twitter Cards, SVG/ICO dual favicons, XML sitemap (`@astrojs/sitemap`), `robots.txt`, and Schema.org JSON-LD structured data.
- [x] **Accessibility Compliance:** WCAG 2.1 AA aligned (single `<h1>`, logical heading order, screen-reader text, keyboard skip link, focus-visible styles, accessible carousel with pause/play & reduced motion).
- [x] **Performance Optimization:** Single-trip root GROQ query projection (~26ms), responsive WebP/AVIF images with srcset, zero layout shift (CLS).
- [x] **Responsive Polish:** Pixel-accurate responsive layouts on desktop, tablet, and mobile, including accordion mobile navigation and centered testimonial layout.

## Tooling & Methodology Note

AI tools were used for guidance, technical assessment auditing, and code review. All code changes, schemas, queries, and accessibility improvements were reviewed, verified, and validated against the technical requirements.

## Author

Aravindar C

GitHub: https://github.com/Aravindarc48
