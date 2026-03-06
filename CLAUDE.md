# Liquid

## Qué es
Landing page de Liquid — infraestructura de liquidez (CEX market making + DEX liquidity management) del grupo POL.

## Stack
- Next.js 16 (App Router), React 19, TypeScript 5
- Tailwind CSS 4
- Sin backend

## Estructura

```
liquid/
├── app/
│   ├── layout.tsx              # Root layout + metadata + JsonLd
│   ├── page.tsx                # Landing page (orquesta componentes)
│   ├── globals.css             # Tailwind imports + tema global + marquee
│   ├── robots.ts               # SEO robots.txt
│   ├── sitemap.ts              # Sitemap dinámico
│   └── components/
│       ├── Nav.tsx             # Header fijo con menú mobile
│       ├── Hero.tsx            # Hero section con CTAs
│       ├── LogoCarousel.tsx    # Marquee infinita "Trusted by" (CSS-only)
│       ├── Services.tsx        # 2 columnas: CEX (Market Making) | DEX (Liquidity Mgmt)
│       ├── Comparison.tsx      # Toggle "With vs Without Liquid" + visualizaciones
│       ├── Process.tsx         # 2 fases (Design/Execution)
│       ├── WhyLiquid.tsx       # 4 razones / value props
│       ├── FAQ.tsx             # 6 FAQs colapsables + JsonLd
│       ├── CTA.tsx             # Call-to-action (Email/Call)
│       ├── Footer.tsx          # Footer con nav + socials
│       └── JsonLd.tsx          # Renderer de structured data
└── public/
    └── llms.txt                # Descripción para crawlers de LLMs
```

## Comandos de desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

## Convenciones
- Landing page single-page con secciones y navegación por hash (#services, #process, etc.)
- Componentes en `app/components/`
- SEO: JsonLd structured data (Organization + Service + FAQPage)
- `llms.txt` en public/ para crawlers de LLMs
- Dark theme: bg #08080c, text #e8e8ed
- Font: Geist (via next/font)
- Comparison.tsx es "use client" (toggle + animaciones), el resto son server components
