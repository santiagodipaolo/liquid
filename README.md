# Liquid

DeFi-native liquidity infrastructure. Landing page for Liquid — a POL Group company.

## Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [TypeScript 5](https://www.typescriptlang.org/)
- [Tailwind CSS 4](https://tailwindcss.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy

Deployed on [Vercel](https://vercel.com). Push to `main` triggers automatic deployment.

## Project Structure

```
app/
├── layout.tsx          # Root layout, metadata, structured data
├── page.tsx            # Home page (single-page landing)
├── globals.css         # Global styles + Tailwind theme
├── robots.ts           # SEO robots config
├── sitemap.ts          # Dynamic sitemap
└── components/         # Section components (Nav, Hero, Services, etc.)
```
