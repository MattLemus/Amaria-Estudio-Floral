**Project Architecture — Amaría Estudio Floral**

This document describes the architecture, file roles, components, assets, third-party libraries, accessibility & SEO considerations, and recommended improvements for the static site in this workspace.

**Overview:**
- **Type:** Static marketing/catalog website for a florist (no server runtime required).
- **Primary pages:** `index.html`, `catalogo.html`, `desayunos.html`, `licores.html`.
- **Assets & code:** `assets/` (images/icons), `style/Style.css` (main stylesheet), `script/script.js` (client behavior), `site.webmanifest`, favicon files.

**File Map (top-level)**
- `index.html`: Home page with hero, feature guarantees, product grids, countdown offer, product modal, footer.
- `catalogo.html`, `desayunos.html`, `licores.html`: Additional catalog pages (same pattern as `index.html`).
- `site.webmanifest`: Web manifest for PWA metadata.
- `assets/`: Images, logos, hero assets, product photos.
- `script/script.js`: All JS logic — product data, modal handling, filtering, countdown timer, menu toggle.
- `style/Style.css`: All styling, variables (colors, layout), responsive rules, component classes.

**Page Components & Responsibilities**
- **Header / Nav** (`<header>` in `index.html`)
  - Logo (`assets/loguito.png`), links to main pages, hamburger menu (`.menu-toggle`) for mobile.
  - Behavior: `toggleMenu()` in `script/script.js` toggles the `active` class on `#navLinks`.

- **Hero** (large left text / right image)
  - Uses a responsive image and heading hierarchy (`h1`, `h2`) for SEO.
  - Call-to-action anchors link into the page (`#mas-vendidos`).

- **Guarantees / Feature Icons**
  - Small visual list of selling points (fresh flowers, delivery, secure payment).

- **Flash Sale / Countdown**
  - Container with IDs `#mins` and `#secs`. `script/script.js` runs a 30-minute countdown (restarts automatically) and updates these spans every second.

- **Products Grid** (`.products-section` / `.product-grid`)
  - Each item is `.product-card` with `.card-image`, `.card-info`, `.price`, tags and a CTA (WhatsApp or modal trigger).
  - Images use `loading="lazy"` for deferred loading.

- **Product Modal** (`#productModal`)
  - Elements: `#modal-img`, `#modal-title`, `#modal-price`, `#modal-desc`, `#modal-whatsapp`.
  - Key functions in `script/script.js`:
    - `openModal(productId)`: looks up `productsData[productId]`, fills the modal fields, sets `modalWhatsapp.href` to a `wa.me` link containing an encoded message, shows the modal, and disables page scroll.
    - `closeModal()`: hides the modal and restores scroll.
    - `changeImage(direction)`: cycles product images in the modal (carousel logic driven by `currentImageIndex`).
    - Global `window.onclick` closes modal when clicking outside it.
  - The modal contains AOS-animated elements; `openModal` refreshes AOS animations (`AOS.refreshHard()`), then re-adds animation classes.

- **Footer**
  - Brand column, navigation column, social icons linking to Instagram/TikTok/WhatsApp.

**JavaScript: `script/script.js` — Key details**
- `productsData`: large in-memory object mapping product IDs to {title, price, description, images}. New products appended via `Object.assign` later in the file.
- Global vars: `currentProduct`, `currentImageIndex`, references to modal DOM nodes.
- Modal flow: `openModal(id)` populates UI and sets `modalWhatsapp.href = 'https://wa.me/593963087611?text=' + encodeURIComponent(mensaje)`.
- Countdown: uses a `setInterval` every 1000ms, decrements `time` from 1800 seconds.
- Filtering & sorting: `filterByPrice(range)` collects `.product-card` elements, sorts them by price (there are two versions in file; final version orders ascending), toggles `.price-btn` active state and re-appends nodes to the `.product-grid` to reorder the DOM.
- Menu: `toggleMenu()` toggles `active` class on `#navLinks`.

**Third-Party Libraries**
- AOS (Animate On Scroll) — included via CDN `https://unpkg.com/aos@2.3.1/dist/aos.js` and CSS. Used to animate cards, modal elements.
- Font Awesome (CDN) — used for icons like hamburger, social icons, WhatsApp.
- Google Fonts — `Lato` and `Playfair Display` preconnected and loaded.

**Meta, SEO & Structured Data**
- Standard `meta` tags for charset, viewport, description, keywords, geo meta tags and Open Graph (`og:`) tags are present in `index.html`.
- JSON-LD `application/ld+json` block describes the business (`@type: Florist`) including address, geo coords, openingHoursSpecification — good for local SEO.

**PWA / Manifest**
- `site.webmanifest` is present; combined with favicon and apple-touch-icon this enables basic PWA installability on supported devices.

**Accessibility & A11y Notes**
- Strengths:
  - Images include `alt` attributes and many images use `loading="lazy"`.
  - Clear heading hierarchy (`h1`, `h2`, `h3`).
  - Buttons and anchors are semantic elements.
- Improvements (priority):
  - Add `role="dialog"`, `aria-modal="true"`, and `aria-labelledby="modal-title"` to `#productModal`.
  - Ensure focus trapping in modal when open and return focus to the triggering element on close.
  - Add keyboard handlers (Escape to close modal, left/right arrows to change images).
  - Add `rel="noopener noreferrer"` to external links with `target="_blank"` (e.g., WhatsApp links, social links).

**Performance & Best Practices**
- Strengths:
  - `loading="lazy"` for product images reduces initial payload.
  - Fonts are preconnected to Google fonts.
- Recommendations:
  - Replace large raster images with optimized/responsive `srcset` and `picture` (serve WebP where possible).
  - Minify CSS and JavaScript for production.
  - Leverage caching headers (if using a host like Netlify/Vercel) and gzip/brotli compression.
  - Add a small service worker (or use Workbox) if PWA offline support is desired.
  - De-duplicate JS functions: `filterByPrice` appears twice; ensure only the correct final implementation is included.

**Security & External Links**
- Use `rel="noopener noreferrer"` with `target="_blank"` to prevent reverse tabnabbing.
- Sanitize any user-controlled inputs if later adding forms or comment features.

**SEO & Local Listing**
- Keep JSON-LD `@type: Florist` up-to-date (telephone, address, opening hours).
- Add `<link rel="canonical" href="https://your-domain.com/" />` to pages, and generate `sitemap.xml` for crawlers.

**Suggested Enhancements / Next Steps**
1. Improve modal accessibility (role/aria, focus trap, keyboard handlers).
2. Extract product data to a separate JSON file (`data/products.json`) and fetch it; this allows easier management and reuse across pages.
3. Add serverless order endpoint or integrate a lightweight form that sends order details to email or CRM.
4. Use `Intl.NumberFormat` when rendering prices (or store price as numeric value and format for locale).
5. Add automated image optimization in the build pipeline (e.g., use `sharp` in CI) and supply `srcset`/`sizes`.
6. Add tests (lighthouse perf/accessibility checks) as part of CI.

**How the pieces interact (runtime flow)**
- On page load: CSS loads, fonts preconnect, AOS initializes via `AOS.init()` at bottom of `index.html`.
- User actions:
  - Click on product card image or button -> `openModal(id)` -> fetch product data from `productsData`, populate modal, update WhatsApp URL, open modal.
  - Click background / close button -> `closeModal()`.
  - Press hamburger -> `toggleMenu()` toggles mobile nav.
  - Optionally click price filter -> `filterByPrice(range)` sorts and updates grid.

**Developer notes / pitfalls**
- There's duplicated `filterByPrice` function definitions in `script.js`; ensure only the desired implementation remains.
- Some price strings include words like "Desde" or extra text; parsing prices relies on string parsing — consider storing price as numeric `price: 20.00` and `displayPrice` separately to avoid brittle parsing.

---
If you'd like, I can:
- convert `productsData` into a separate `data/products.json` and update `script.js` to fetch it,
- implement modal accessibility improvements (focus trap, keyboard handlers), or
- add `rel="noopener noreferrer"` to the WhatsApp/social links and update the modal anchor to include `target` and `rel` attributes.

File created: `ARCHITECTURE.md`
