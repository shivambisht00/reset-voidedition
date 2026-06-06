# RE:SET | The Ultimate Void Edition — Next.js

Premium JJK-inspired anime streetwear site, converted from vanilla HTML/CSS/JS to a fully structured **Next.js 14 App Router** project with TypeScript, React Context, and `styled-jsx`.

---

## 📁 Project Structure

```
reset-void/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← Root layout (fonts, metadata, CartProvider)
│   │   └── page.tsx            ← Main page (intro gate + all sections)
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← Sticky nav with cart button + hamburger
│   │   │   ├── CartSidebar.tsx  ← Sliding cart panel
│   │   │   └── Footer.tsx       ← Full footer with social links
│   │   │
│   │   ├── sections/
│   │   │   ├── IntroScreen.tsx  ← "ENTER DOMAIN" gate with video support
│   │   │   ├── HeroSection.tsx  ← Hero + Gojo SVG character
│   │   │   ├── Marquee.tsx      ← Scrolling ticker
│   │   │   ├── ProductsSection.tsx ← Product grid with filter tabs + cart
│   │   │   ├── CollectionBanner.tsx ← Sukuna SVG + capsule banner
│   │   │   ├── CharactersStrip.tsx  ← 5 character cards
│   │   │   └── Newsletter.tsx   ← Email subscribe with EmailJS
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.tsx ← Purple cursor + trail
│   │       └── Toast.tsx        ← Cart add notification
│   │
│   ├── lib/
│   │   ├── products.ts          ← Products data + TypeScript types
│   │   └── CartContext.tsx      ← React Context for cart state
│   │
│   └── styles/
│       └── globals.css          ← CSS variables, base reset, animations
│
├── package.json
├── next.config.js
└── tsconfig.json
```

---

## 🚀 Setup

### 1. Install dependencies
```bash
npm install
```

### 2. Add your product images
Copy your images to the `public/images/` folder:
```
public/
└── images/
    ├── WhatsApp Image 2026-06-01 at 11.35.07.jpeg
    ├── WhatsApp Image 2026-06-01 at 11.35.29.jpeg
    ├── s-l1200.jpg
    ├── images-6.jpeg
    ├── WhatsApp Image 2026-06-01 at 11.35.06.jpeg
    ├── WhatsApp Image 2026-06-01 at 11.35.29 (1).jpeg
    ├── images-4.jpeg
    ├── qerrqwr.jpg.webp
    └── WhatsApp Video 2026-06-01 at 11.43.29.mp4  (intro video)
```

### 3. Run dev server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000)

### 4. Build for production
```bash
npm run build
npm start
```

---

## ⚙️ Key Features Converted

| Feature | Original | Next.js |
|---|---|---|
| State management | Global JS vars | React Context (`CartContext`) |
| Cart | Vanilla DOM | `useCart()` hook |
| Routing | `href="#section"` | Anchor links (single page) |
| Cursor | `mousemove` listener | `CustomCursor` client component |
| Animations | CSS keyframes | Same CSS keyframes in `globals.css` |
| Images | `<img src="...">` | `<img>` (unoptimized for local files) |
| EmailJS | Inline script | In `layout.tsx` + Newsletter component |
| Intro video | Vanilla JS | `IntroScreen` client component |

---

## 🎨 Customization

### Add a product
Edit `src/lib/products.ts` and add to the `products` array:
```ts
{
  id: 9,
  name: 'YOUR PRODUCT NAME',
  char: 'CHARACTER NAME',
  desc: 'Description here',
  price: 1999,
  oldPrice: 2499,        // or null
  category: 'tshirt',   // tshirt | jeans | shoes | hoodie
  badge: 'new',         // new | hot | limited | null
  image: '/images/your-image.jpg',
  color: 'radial-gradient(ellipse at 50% 50%, rgba(123,47,255,0.35) 0%, rgba(6,6,8,0.95) 70%)',
  rating: '★★★★★ (50)',
}
```

### Update EmailJS
In `src/app/layout.tsx` update the init key, and in `src/components/sections/Newsletter.tsx` update the service/template IDs.

### Change colors
All color variables are in `src/styles/globals.css` under `:root`.

---

## 📦 Dependencies

- **next** 14.2 — App Router, `styled-jsx` built-in
- **react** 18 — Client components, hooks
- **typescript** 5 — Full type safety
- **@emailjs/browser** — Loaded via CDN in `layout.tsx`

No extra UI libraries needed — everything is pure CSS with styled-jsx.
