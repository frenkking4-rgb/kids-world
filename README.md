# 🌟 Kids World — Next.js Multilingual Website

A professional, modern, and fully responsive website for **Kids World**, a children's toy and educational products store in Baku, Azerbaijan.

---

## 🚀 Tech Stack

| Tool | Version |
|------|---------|
| Next.js (App Router) | 16.x |
| TypeScript | 5.x |
| Tailwind CSS | 4.x |
| next-intl | 4.x |
| Lucide React | latest |

---

## 📁 Project Structure

```
kids-world/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Locale-specific HTML shell + font loading
│   │   └── page.tsx         # Main page, assembles all sections
│   ├── globals.css          # Tailwind + custom animations
│   ├── layout.tsx           # Root layout (minimal passthrough)
│   └── page.tsx             # Root redirect → /en
├── components/
│   ├── Navbar.tsx           # Sticky nav with scroll detection
│   ├── LanguageSwitcher.tsx # Dropdown locale switcher
│   ├── HeroSection.tsx      # Hero with animated emojis & stats
│   ├── CatalogSection.tsx   # Filterable product grid
│   ├── ProductCard.tsx      # Individual product card
│   ├── AboutSection.tsx     # Company story + features
│   ├── ContactSection.tsx   # Contact info + form
│   └── Footer.tsx           # Footer with links and copyright
├── i18n/
│   ├── request.ts           # next-intl server config
│   └── routing.ts           # Locale routing definition
├── lib/
│   └── products.ts          # Mock product data (12 items)
├── messages/
│   ├── en.json              # English translations
│   ├── ru.json              # Russian translations
│   └── az.json              # Azerbaijani translations
├── middleware.ts            # next-intl routing middleware
└── next.config.ts           # next-intl plugin config
```

---

## ⚡ Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — it auto-redirects to `/en`.

### 3. Switch languages
- `/en` → English
- `/ru` → Russian  
- `/az` → Azerbaijani

Or use the **language switcher** in the navbar.

### 4. Build for production
```bash
npm run build
npm start
```

---

## 🌍 Adding a New Language

1. Add the locale code to `i18n/routing.ts`:
```ts
locales: ["en", "ru", "az", "tr"],  // add "tr" for Turkish
```

2. Create `messages/tr.json` with all translation keys (copy from `en.json`)

3. Done! The middleware and switcher auto-detect new locales.

---

## 🎨 Design Decisions

- **Font pairing**: Baloo 2 (display/headings) + Nunito (body) — playful yet clean
- **Color palette**: Soft pink–purple–blue gradients with white cards
- **Animations**: Floating emojis on hero, hover-lift cards, smooth scroll transitions
- **Mobile-first**: Hamburger nav, responsive grid (1→2→4 columns)

---

## 📦 Adding Real Products

Edit `lib/products.ts` — each product supports:

```ts
{
  id: number,
  name: string,
  price: number,           // in AZN (₼)
  category: "toys" | "educational" | "outdoor" | "arts",
  ageMin: number,
  ageMax: number,
  emoji: string,           // displayed as product image
  badge?: "new" | "sale",
  discount?: number,       // percentage off
  color: string,           // Tailwind gradient classes for card bg
}
```

To use real images, replace the emoji `<span>` in `ProductCard.tsx` with a `next/image` component.

---

## 📝 License

© 2025 Kids World Baku. All rights reserved.
