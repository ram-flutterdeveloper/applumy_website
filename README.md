# Applumy - Premium Web Development Agency

A modern, production-ready homepage built with Next.js, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Font:** Geist (Google Fonts)

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Global layout + SEO metadata
│   ├── page.tsx            # Homepage composition
│   └── globals.css         # Global styles + Tailwind
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Desktop + mobile navigation
│   │   ├── MobileMenu.tsx  # Mobile drawer menu
│   │   └── Footer.tsx      # Site footer
│   │
│   ├── home/
│   │   ├── Hero.tsx        # Hero section with dashboard visual
│   │   ├── TrustLogos.tsx  # Client/trust logo strip
│   │   ├── ServicesIntro.tsx  # Services section heading
│   │   ├── ServicesGrid.tsx   # Service cards grid
│   │   ├── GrowthSection.tsx  # Image + content split section
│   │   ├── WhyChooseUs.tsx    # Feature/benefit cards
│   │   ├── Technologies.tsx   # Technology stack display
│   │   ├── Process.tsx        # 6-step process section
│   │   ├── Projects.tsx       # Case study cards
│   │   ├── Testimonials.tsx   # Client testimonials carousel
│   │   ├── FAQ.tsx            # Accordion FAQ section
│   │   └── FinalCTA.tsx       # Final call-to-action
│   │
│   ├── ui/
│   │   ├── Button.tsx      # Reusable button component
│   │   ├── Card.tsx        # Reusable card component
│   │   ├── Container.tsx   # Page container wrapper
│   │   ├── Badge.tsx       # Label/badge component
│   │   └── SectionHeading.tsx  # Section title component
│   │
│   └── common/
│       ├── Logo.tsx        # Site logo
│       └── Section.tsx     # Section wrapper
│
├── data/
│   ├── navigation.ts       # Nav links
│   ├── services.ts         # Services data
│   ├── technologies.ts     # Technologies data
│   ├── process.ts          # Process steps data
│   ├── projects.ts         # Projects/case studies
│   ├── testimonials.ts     # Client testimonials
│   └── faqs.ts             # FAQ questions/answers
│
├── lib/
│   └── utils.ts            # Utility functions (cn)
│
└── types/
    └── index.ts            # TypeScript interfaces
```

## Where Things Are

| What | Location |
|------|----------|
| Homepage | `src/app/page.tsx` |
| Header/Navbar | `src/components/layout/Navbar.tsx` |
| Services | `src/components/home/ServicesGrid.tsx` |
| Services data | `src/data/services.ts` |
| Projects | `src/components/home/Projects.tsx` |
| Projects data | `src/data/projects.ts` |
| Testimonials | `src/components/home/Testimonials.tsx` |
| Testimonials data | `src/data/testimonials.ts` |
| FAQ | `src/components/home/FAQ.tsx` |
| FAQ data | `src/data/faqs.ts` |
| SEO metadata | `src/app/layout.tsx` |
| Global styles | `src/app/globals.css` |
| Images | `public/images/` |

## How To

### Add a new service

1. Open `src/data/services.ts`
2. Add a new entry to the `services` array
3. Import the icon from `lucide-react`

### Add a new project

1. Open `src/data/projects.ts`
2. Add a new entry to the `projects` array
3. Place the project image in `public/images/projects/`

### Add a testimonial

1. Open `src/data/testimonials.ts`
2. Add a new entry to the `testimonials` array
3. Place the avatar in `public/images/testimonials/`

### Change navigation links

1. Open `src/data/navigation.ts`
2. Update the `navLinks` array

### Change SEO metadata

1. Open `src/app/layout.tsx`
2. Edit the `metadata` export

### Change global design tokens

1. Open `src/app/globals.css`
2. Edit the CSS variables in the `@theme inline` block

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy

### Other Platforms

```bash
npm run build
```

The `out/` directory contains the production build. Deploy to any static hosting or Node.js platform.

## Assets to Replace

The following are placeholder assets that should be replaced with real content:

- Project images in `public/images/projects/`
- Testimonial avatars in `public/images/testimonials/`
- Logo placeholder (currently text-based)
- Trust logo placeholders (currently text-based)
- OG image at `public/og-image.png`
