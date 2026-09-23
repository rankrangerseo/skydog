# SkyDog Web3 NFT & Play-to-Earn Ecosystem (Fullstack Monorepo)

A complete fullstack Web3 gaming ecosystem combining a high-performance **Next.js 16** frontend and an **Express/MongoDB** REST API backend.

---

## 📁 Project Architecture

```bash
skydog/
├── frontend/                # Next.js 16 (App Router, Turbopack, TailwindCSS)
│   ├── src/
│   │   ├── app/             # Application routes & SEO metadata
│   │   ├── components/      # UI components (SkyTrek, SkyToken, Perks, Lore)
│   │   ├── API/             # Backend API client handlers
│   │   └── lib/             # Utilities
│   ├── public/              # Static assets, media & icons
│   ├── package.json
│   └── postcss.config.mjs
└── backend/                 # Node.js / Express.js REST API
    ├── controler/           # Business logic controllers
    ├── routes/              # Express API endpoints
    ├── schema/              # Mongoose data schemas (Collections, Whitelist, etc.)
    ├── middlewares/         # Auth, Multer upload, Cloudinary
    ├── dbConnect.js         # MongoDB connection driver
    ├── index.js             # Main server entrypoint
    └── package.json
```

---

## 🚀 Getting Started

### 1. Backend Setup & Run

```bash
cd backend
npm install
npm start
# Server runs on http://localhost:3006
```

### 2. Frontend Setup & Run

```bash
cd frontend
npm install
npm run dev
# Web application runs on http://localhost:3000
```

---

## ⚡ Tech Stack

- **Frontend:** Next.js 16 (Turbopack), React 19, TypeScript, Tailwind CSS, Lucide Icons, Headless UI.
- **Backend:** Node.js, Express.js, MongoDB (Mongoose), JWT, Bcrypt, Multer, Cloudinary, Ethers.js.
- **SEO & Performance:** Strict single `<h1>` semantic DOM, dynamic `sitemap.xml`, `robots.txt`, and Schema.org (JSON-LD) structured data.
