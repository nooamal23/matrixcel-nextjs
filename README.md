
# Matrixcel Business – Next.js 14 App Router  
**A Complete, Production-Ready Business Website**

---

## Overview
Matrixcel Business is a **fully converted**, **modern**, and **responsive** business website built with **Next.js 14 (App Router)** — faithfully adapted from the original HTML template.  
All pages, animations, forms, and error handling are **100% functional and pixel-perfect**.

**Live Demo (Coming Soon)**  
After deployment to Vercel:  
➡️ https://your-matrixcel.vercel.app

---

## Tech Stack

| Layer | Technology |
|--------|-------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript + React |
| **Styling** | Tailwind CSS + Custom CSS |
| **Routing** | File-based (App Router) |
| **Forms** | Client-side with validation |
| **Images** | `next/image` (optimized) |
| **Icons** | Font Awesome (CDN or local) |

---

## Folder Structure (Key Parts)

```

app/
├── page.tsx                  → Home
├── about/page.tsx            → About Us
├── services/page.tsx         → Services
├── industries/page.tsx       → Industries
├── career/page.tsx           → Careers
├── blog/
│   ├── page.tsx              → Blog List
│   └── [id]/page.tsx         → Blog Detail (Dynamic)
├── contact/page.tsx          → Contact
├── signin/page.tsx           → Sign In
├── signup/page.tsx           → Sign Up (Fixed!)
├── error/page.tsx            → 404 Page

components/
├── Header.tsx
├── StickyHeader.tsx
├── MobileMenu.tsx
├── Footer.tsx
├── TeamSection.tsx
├── ClientsSection.tsx

public/
└── assets/                   → All images, icons

```

---

## How to Run (Step-by-Step)

### 1. Clone the Project
```bash
git clone https://github.com/yourusername/matrixcel-nextjs.git
cd matrixcel-nextjs
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open in Browser

[http://localhost:3000](http://localhost:3000)

---

## All Pages & URLs

| Page       | URL             |
| ---------- | --------------- |
| Home       | `/`             |
| About      | `/about`        |
| Services   | `/services`     |
| Industries | `/industries`   |
| Careers    | `/career`       |
| Blog List  | `/blog`         |
| Blog Post  | `/blog/1`       |
| Contact    | `/contact`      |
| Sign In    | `/signin`       |
| Sign Up    | `/signup`       |
| 404 Error  | Any invalid URL |

---

## Deploy to Vercel (1-Click)

1. Push project to **GitHub**
2. Go to [https://vercel.com](https://vercel.com)
3. Import your repository
4. Click **Deploy**

✅ Done in less than 60 seconds!

---

## Customization Guide

### Change Logo

Replace:

```
public/assets/images/logo.png
```

### Update Company Info

Edit the following files:

```
components/Header.tsx
app/contact/page.tsx
```

---

## Troubleshooting

| Issue                   | Fix                                           |
| ----------------------- | --------------------------------------------- |
| Module not found        | Run `npm install`                             |
| Images not loading      | Check `public/assets/...` path                |
| Mobile menu not working | Ensure `MobileMenu.tsx` is imported in layout |
| 404 on refresh          | Deploy to **Vercel** (SSR routing fixes)      |

---

## 📜 License

**MIT License** — Free to use, modify, and deploy.

---

💙 *Built with Next.js 14 + Tailwind CSS — for Matrixcel Business*

```
