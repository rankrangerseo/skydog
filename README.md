<div align="center">

# 🚀 SkyDog Web3 NFT & Play-to-Earn Gaming Ecosystem

[![Website](https://img.shields.io/badge/Live_Website-skydogsocial.com-00DC82?style=for-the-badge&logo=google-chrome&logoColor=white)](https://skydogsocial.com)
[![Vercel Deployment](https://img.shields.io/badge/Vercel_Staging-skydog--website.vercel.app-black?style=for-the-badge&logo=vercel&logoColor=white)](https://skydog-website.vercel.app)
[![License](https://img.shields.io/badge/License-Proprietary-blue?style=for-the-badge)](LICENSE)

<br />

[![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React_19-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript_5-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Express.js](https://img.shields.io/badge/Express.js_4-404D59?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Web3](https://img.shields.io/badge/Web3-Ethers.js-F16822?style=flat-square&logo=ethereum&logoColor=white)](https://ethers.org/)

<p align="center">
  <b>A production-grade, fullstack Web3 gaming ecosystem combining high-fidelity Next.js App Router storytelling with an Express/Mongoose REST API and audited technical SEO infrastructure.</b>
</p>

[🌐 Live Website](https://skydogsocial.com) • [🎮 SkyTrek Game](https://skydogsocial.com/skytrek) • [🪙 SKY Token](https://skydogsocial.com/sky-token) • [🖼️ Sky NFT](https://skydogsocial.com/sky-nft)

</div>

---

## 🌟 Core Pillars & Overview

**SkyDog** is an intergalactic Web3 entertainment IP featuring:
1. **SkyDog NFT Collection:** 4,444 elite digital collectibles with specialized traits, staking mechanisms, and exclusive community governance privileges.
2. **SkyTrek (Play-to-Earn Game):** A fast-paced cosmic survival browser game where players navigate asteroid fields, complete challenges, and climb the leaderboard.
3. **$SKY Token Economics:** The in-game currency powering item upgrades, tournament rewards, marketplace trades, and staking rewards.
4. **Early Whitelist Engine:** Secure community onboarding and priority allocation collection backed by MongoDB.

---

## 📁 Project Architecture (Fullstack Monorepo)

```bash
skydog/
├── frontend/                     # Next.js 16 (App Router + Turbopack)
│   ├── src/
│   │   ├── app/                  # Route handlers & SEO metadata
│   │   │   ├── robots.ts         # Automated search engine crawl directives
│   │   │   ├── sitemap.ts        # Dynamic 12-route XML sitemap
│   │   │   ├── (routes)/         # /sky-nft, /sky-token, /skytrek, /teams, etc.
│   │   │   └── layout.tsx        # Global shell + Organization Schema
│   │   ├── components/           # UI Components, Carousels & Modals
│   │   ├── API/                  # Axios HTTP client connecting to backend
│   │   └── lib/                  # Utility helpers & styling wrappers
│   ├── public/                   # Compressed media, icons, and OG previews
│   └── package.json
└── backend/                      # Node.js / Express.js REST API
    ├── controler/                # Business logic (Collections, Whitelist, Teams)
    ├── routes/                   # RESTful API route definitions
    ├── schema/                   # Mongoose data models
    ├── middlewares/              # JWT authentication & Multer upload
    ├── dbConnect.js              # MongoDB Atlas cluster connection
    ├── index.js                  # Main server entrypoint (Port 3006)
    └── package.json
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js:** v18.0.0 or later (v20+ recommended)
- **Package Manager:** npm or yarn
- **Database:** MongoDB Atlas URI or local instance

---

### 1. Backend Setup & Run

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start the API server
npm start
# Server runs on: http://localhost:3006
```

---

### 2. Frontend Setup & Run

```bash
# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Configure environment variables
cp .env.example .env

# Start the Next.js development server
npm run dev
# Application runs on: http://localhost:3000
```

---

## 🔌 API Endpoints Reference

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/collection/get` | Retrieve active NFT collections |
| `GET` | `/collection/nfts` | Retrieve NFT gallery metadata |
| `GET` | `/roadmap/get` | Fetch multi-phase ecosystem roadmap |
| `GET` | `/artist/get` | Fetch featured artist profiles |
| `GET` | `/community/get` | Retrieve community milestones & statistics |
| `POST` | `/access/create` | Submit user entry for the minting whitelist |

---

## 🔍 Technical SEO & Performance Implementation

The frontend contains an audited, zero-defect search engine architecture:

- ✅ **Dynamic XML Sitemap:** Automatically rendered at [`/sitemap.xml`](https://skydogsocial.com/sitemap.xml) enumerating all 12 canonical routes with priority weights.
- ✅ **Crawl Directives:** Strict [`/robots.txt`](https://skydogsocial.com/robots.txt) allowing universal crawl access and pointing to the sitemap.
- ✅ **Schema.org Structured Data:** Injected JSON-LD graphs for `Organization`, `WebSite`, `FAQPage`, and `VideoGame` for rich snippet eligibility.
- ✅ **Strict Semantic Hierarchy:** Exactly **ONE `<h1>`** tag per page with styled `<h2>` section headers, preventing keyword dilution.
- ✅ **Metadata Cascades:** Dedicated unique `title`, `description`, `canonical`, OpenGraph, and Twitter cards across all routes.

---

## 🌐 Official Links

- **Main Website:** [https://skydogsocial.com](https://skydogsocial.com)
- **Staging / Vercel:** [https://skydog-website.vercel.app](https://skydog-website.vercel.app)
- **Twitter / X:** [@SkyDogSocialNFT](https://twitter.com/SkyDogSocialNFT)
- **Discord:** [Join SkyDog Discord](https://discord.gg/skydog)
- **Telegram:** [@SkyDog_SOCIAL](https://t.me/SkyDog_SOCIAL)

---

<div align="center">
  <sub>Maintained by <a href="https://github.com/jahidulislamseo">Jahidul Islam</a>. Built for Web3 Gaming Pioneers.</sub>
</div>
