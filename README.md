# 🔥 Authors Page — The Phoenix Protocol

A premium author landing page built with the Sovereign Author Platform aesthetic. Dark volcanic theme with fire-forged UI, 3D book previews, and animated manifesto reveals.

## Tech Stack

- **React 19** + **TypeScript 5.9**
- **Vite 7.2** (dev server & build)
- **Tailwind CSS 3.4** + **shadcn/ui** (53 Radix UI components)
- **Lucide Icons**

## Sections

| Section | Description |
|---|---|
| **Hero** | Phoenix video trailer with ember particles & CTA |
| **BookShelf** | 3D-tilt book cards with mouse-tracking physics |
| **High Council** | Knight roster — 6 domain experts with hover reveals |
| **Newsletter** | Email capture with validation & optimistic UI |
| **Manifesto** | Sequential line-reveal animation with Omega seal |
| **Navigation** | Sticky nav with mobile drawer & gradient CTA |
| **Footer** | Links, social proof, and branding |

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # TypeScript check + Vite production bundle
npm run preview  # Preview the production build locally
npm run lint     # ESLint
```

## Project Structure

```
src/
├── sections/        # Page sections (Hero, BookShelf, etc.)
├── components/ui/   # 53 shadcn/Radix UI components
├── hooks/           # Custom React hooks
├── App.tsx          # Root component
├── App.css          # App-specific styles
├── index.css        # Global styles & Tailwind directives
└── main.tsx         # Entry point
public/              # Static assets (book covers, phoenix bg)
```

---

*Made by Invisioned Marketing Inc.*
