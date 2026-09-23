# Technical SEO Baseline Audit Report (Before Fixes)

**Target Project:** SkyDog NFT & Web3 Gaming Platform  
**Target Domain:** `https://skydogsocial.com`  
**Framework:** Next.js 16.3 (App Router, Turbopack) + Node.js Express API  
**Audit Date:** September 23, 2026  
**Auditor:** Senior Technical SEO & Systems Architect  
**Baseline Health Score:** **38 / 100** (Critical Infrastructure & On-Page Deficiencies)

---

## 1. Executive Summary

A comprehensive pre-implementation technical SEO audit was conducted on the **SkyDog** web application to establish a baseline before executing code fixes.

While the frontend exhibits high aesthetic fidelity, the technical search foundation suffers from critical structural gaps. Most notably:
1. Search engine crawlers (Googlebot, Bingbot) cannot locate or crawl the site predictably due to the **absence of `robots.txt` and XML sitemaps**.
2. **7 out of 12 primary pages** lack metadata exports, inheriting duplicate titles and descriptions from the root layout.
3. OpenGraph and Twitter card image links in code point to **non-existent 404 image paths**.
4. The site possesses **zero Schema.org structured data (JSON-LD)**, forfeiting rich search results and Knowledge Graph eligibility.
5. Heading hierarchy is inverted, rendering **multiple `<h1>` tags** across single pages.

---

## 2. At-A-Glance Issue Matrix

| Category | Defect Description | Severity | Search Engine Impact |
| :--- | :--- | :--- | :--- |
| **Crawlability** | Missing `robots.txt` file | **P0 - Critical** | Crawlers lack boundary rules and sitemap location |
| **Indexability** | Missing XML Sitemap (`sitemap.xml`) | **P0 - Critical** | Incomplete URL discovery across 12 core routes |
| **Social Sharing** | Broken OpenGraph & Twitter Images (404) | **P0 - Critical** | Social cards on X, Discord, Telegram appear blank |
| **On-Page SEO** | Duplicate Titles & Meta across 7 routes | **P1 - High** | GSC duplicate penalty, internal cannibalization |
| **Canonicalization** | Missing canonical tags on subpages | **P1 - High** | Duplicate content indexing from parameter strings |
| **Semantic HTML** | Multiple `<h1>` tags per page (5+ H1s) | **P1 - High** | Dilutes topical keyword focus and page hierarchy |
| **Structured Data** | Zero Schema.org / JSON-LD markup | **P1 - High** | Disqualified from FAQ, Game & Brand rich snippets |
| **URL Structure** | Special character `&` in URL path | **P2 - Medium** | Encodings like `%26` violate clean URL standards |
| **Crawl Hygiene** | Empty `href=""` on interactive buttons | **P2 - Medium** | Creates self-referential reload loops for bots |
| **Accessibility** | Generic identical image alt tags (`"skydog"`) | **P2 - Medium** | Fails to pass contextual keyword signals to Google Images |

---

## 3. Detailed Technical Defect Breakdown

### Issue 1: Missing `robots.txt` File
- **Severity:** `P0 - Critical`
- **Location:** `/public/robots.txt` OR `/src/app/robots.ts`
- **Observed Defect:** Search engine spiders requesting `https://skydogsocial.com/robots.txt` receive a 404 Not Found error.
- **Search Engine Impact:** Bots lack directives regarding staging endpoints, admin routes, or AI retrieval agents, and cannot auto-discover the sitemap.
- **Recommended Remediation:** Deploy a native Next.js `src/app/robots.ts` defining user-agent rules and declaring the sitemap URL.

---

### Issue 2: Missing XML Sitemap (`sitemap.xml`)
- **Severity:** `P0 - Critical`
- **Location:** `/public/sitemap.xml` OR `/src/app/sitemap.ts`
- **Observed Defect:** The application has no XML sitemap generated or hosted. All 12 primary URLs rely strictly on client-side React DOM link navigation for discovery.
- **Search Engine Impact:** New and updated routes (`/sky-token`, `/roadmap`, `/skytrek`, `/story`) experience substantial indexation delays.
- **Recommended Remediation:** Deploy `src/app/sitemap.ts` dynamically returning all canonical URLs with exact `changefreq` and priority values.

---

### Issue 3: Broken OpenGraph & Twitter Card Assets (404 Image Links)
- **Severity:** `P0 - Critical`
- **Location:** `src/app/page.tsx` (Lines 38 & 50)
- **Observed Defect:**
  - `og:image` points to `https://skydogsocial.com/assets/og-image.jpg`
  - `twitter:image` points to `https://skydogsocial.com/assets/twitter-image.jpg`
  - Neither file exists in `public/assets/`. The actual asset on disk is `public/assets/meta/preview.png`.
- **Search Engine Impact:** When links are shared on X, Telegram, Discord, or LinkedIn, social crawlers receive 404s and display blank cards.
- **Recommended Remediation:** Update metadata image references to point to verified asset paths (or 1200x630px social cards).

---

### Issue 4: Cascading Duplicate Titles & Meta Descriptions Across 7 Pages
- **Severity:** `P1 - High`
- **Affected Routes:**
  1. `/perks-&-benefits/page.tsx`
  2. `/teams/page.tsx`
  3. `/contact-us/page.tsx`
  4. `/join-waitlist/page.tsx`
  5. `/story/page.tsx`
  6. `/privacy-policy/page.tsx`
  7. `/term-of-use/page.tsx`
- **Observed Defect:** None of these 7 routes export a `metadata` object. Consequently, all 7 inherit the root layout title:
  > *"SkyDog NFT | Blue-Chip NFTs & Web3 Gaming Ecosystem"*
- **Search Engine Impact:** Triggers duplicate title and description flags in Google Search Console. Pages cannibalize each other's search rankings.
- **Recommended Remediation:** Implement unique, entity-rich `Metadata` exports on each individual `page.tsx`.

---

### Issue 5: Missing Canonical Tags on Subpages
- **Severity:** `P1 - High`
- **Location:** All subpages under `src/app/`
- **Observed Defect:** Only the homepage (`page.tsx`) declares `alternates: { canonical: "/" }`. All other routes have no canonical definition.
- **Search Engine Impact:** Marketing campaign tracking parameters (e.g., `?utm_source=twitter`) risk creating duplicate indexed URLs.
- **Recommended Remediation:** Enforce self-referencing canonical URLs in the metadata configuration of every subpage.

---

### Issue 6: Semantic Heading Inversion (Multiple `<h1>` Elements per Page)
- **Severity:** `P1 - High`
- **Location:** `src/components/commonUI/typoGraphy.tsx` & landing page sections
- **Observed Defect:** In `typoGraphy.tsx`, both `headingLarge` and `heading` variants render as `<h1>`. Across the landing page, 5 separate sections render `<h1>` tags simultaneously.
- **Search Engine Impact:** Violates HTML5 semantic hierarchy standards. Multiple `<h1>` tags dilute topical relevance.
- **Recommended Remediation:** Ensure only the hero heading is an `<h1>`, and re-assign section titles to `<h2>` (`subHeading`) or `<h3>` (`mediumHeading`).

---

### Issue 7: Zero Schema.org Structured Data (JSON-LD)
- **Severity:** `P1 - High`
- **Location:** Site-wide (`src/`)
- **Observed Defect:** No `application/ld+json` script exists. The landing page has an FAQ section (`landingPage/faqSection.tsx`) with 4 comprehensive questions and answers that lack `FAQPage` schema.
- **Search Engine Impact:** Disqualifies the website from Google Rich Snippets (expandable FAQ accordions in SERP) and Knowledge Graph entities.
- **Recommended Remediation:** Inject JSON-LD structured data for `WebSite`, `Organization`, `FAQPage`, and `VideoGame`.

---

### Issue 8: Crawl Inefficiencies (Ampersand Slug & Empty Hrefs)
- **Severity:** `P2 - Medium`
- **Location:** `src/app/perks-&-benefits/` and `src/components/header/index.tsx`
- **Observed Defect:**
  1. Route folder name contains an ampersand (`&`), producing encoded URLs (`%26`).
  2. Header navigation contains `<Link href="" onClick={...}>` used to trigger modals.
- **Search Engine Impact:**
  1. Symbol URLs violate URL cleanliness conventions.
  2. Empty `href=""` links cause self-referential crawl loops for search spiders.
- **Recommended Remediation:**
  1. Normalize path to `/perks-and-benefits/` with a permanent 301 redirect.
  2. Convert modal link triggers into semantic `<button type="button">` elements.

---

## 4. Prioritized Implementation Roadmap

| Phase | Tasks | Target Health Score |
| :--- | :--- | :--- |
| **Phase 1: Critical Infrastructure (Day 1)** | Deploy `robots.ts`, dynamic `sitemap.ts`, fix OpenGraph image asset paths. | **65 / 100** |
| **Phase 2: Metadata & Semantic DOM (Days 2-3)** | Add unique metadata & canonicals to 7 routes; fix typography `<h1>` hierarchy. | **85 / 100** |
| **Phase 3: Schema & Crawl Hygiene (Days 4-5)** | Inject JSON-LD (`Organization`, `FAQPage`, `VideoGame`); convert empty links to buttons. | **95+ / 100** |

