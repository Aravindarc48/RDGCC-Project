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

## Accessibility and Performance

- **Heading Hierarchy & Landmarks:** Structured with a single `<h1>` for the page (`Hero`), logical `<h2>` / `<h3>` heading levels, screen-reader-accessible section labels (`.sr-only`), and semantic landmarks (`<main id="main-content">`, `<nav>`, `<header>`, `<footer>`).
- **Keyboard Navigation & Skip Link:** Added an accessible "Skip to main content" link targeting `#main-content`, high-contrast visible focus rings (`:focus-visible`) across all interactive links and buttons, and removed non-interactive tab stops (`tabindex="0"`) from static content cards.
- **Accessible Carousel & Motion:** Client appreciation carousel includes explicit pause/play toggle controls, automatically pauses on hover (`mouseenter`) and keyboard focus (`focusin`), and respects user system preferences by disabling autoplay when `prefers-reduced-motion: reduce` is detected.
- **Image Optimization:** Dynamic Sanity images include explicit `width` and `height` attributes to prevent Cumulative Layout Shift (CLS), responsive `srcset` and `sizes`, modern format delivery (`.auto('format')` for WebP/AVIF), and asynchronous decoding. The hero image is loaded eagerly with `fetchpriority="high"`, while below-the-fold media loads lazily.
- **Unified GROQ Fetching & Defensive Rendering:** Replaced sequential API requests with a unified GROQ query fetching all 10 page sections in a single round-trip, significantly reducing build times and network overhead. Section rendering is guarded against empty DOM shells when collections are empty or null.
- **SEO & Social Metadata:** Configured canonical URLs via `Astro.site`, dual SVG/ICO favicons, and Open Graph / Twitter Card tags populated dynamically from Sanity SEO fields.

## Tooling & Methodology Note

AI tools were used for guidance, technical assessment auditing, and code review. All code changes, schemas, queries, and accessibility improvements were reviewed, verified, and validated against the technical requirements.

## Author

Aravindar C

GitHub: https://github.com/Aravindarc48
