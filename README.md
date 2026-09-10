# Chipli / DrivePulse — Website Foundation

## Stack and design

This is a lightweight, static HTML/CSS/JavaScript implementation designed for excellent loading performance and simple deployment on a static host. Pages use semantic HTML, responsive CSS, keyboard-native controls, reduced-motion handling, descriptive metadata and JSON-LD. The neutral product-image component is intentionally a placeholder; it does not purport to show the actual hardware.

## Architecture

- `/de/` is the default German storefront. `/en/` is reserved through `hreflang` for a human-translated English version rather than machine-translated duplicate pages.
- `/de/produkte/` is the DrivePulse detail page; future products use the same path pattern and shared layout.
- `/de/checkout/` demonstrates the purchasing flow and country-aware shipping calculation.
- The legal pages use conspicuous placeholders wherever legal/company data is missing. They must be reviewed and completed before launch.

## Commerce and payments

The existing checkout is a visual, validated frontend flow—not a live transaction system. Production implementation should use a server-side order API and a provider-hosted PayPal checkout session. Never expose PayPal credentials or accept card data in browser code. Store products, prices, shipping zones, inventory, orders and payment status in a backend/CMS; keep the frontend’s product catalog API-driven.

The country rules are isolated in `assets/app.js` for the demo: DE €3 / up to 5 days; AT and CH €8 / up to 10 days. In production, move the same shape to a server-side shipping-rules table.

## CMS/content model

Recommended product fields: name, slug, description, short description, price, images and alt text, compatibility, specifications, package contents, stock, SKU, SEO title/description, FAQ, legal notice and status. A headless CMS (e.g. Sanity/Contentful/Strapi) or commerce platform may provide this model; a protected admin should manage orders and inventory.

## Product image upload

Replace the `.product-visual` placeholder with a responsive `<picture>`/CMS image field when the authentic image is available. Supply meaningful German alt text, AVIF/WebP variants and explicit width/height to prevent layout shift. Do not replace it with illustrative photography that claims to depict the module.

## SEO

The foundation includes semantic heading hierarchy, page-specific titles/descriptions, canonical URLs, German language markup, `hreflang` framework, Organization/Product JSON-LD, `robots.txt`, and `sitemap.xml`. Add FAQ schema only once the final FAQ/legal wording has been approved; it should exactly match visible content. Publish genuine research articles later under a dedicated article route rather than creating keyword-stuffed pages.# CHIPLI
