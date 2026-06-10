# Sistech Cafe ☕

Website Sistech Cafe - Local Coffee brewed by Extraordinary Women in Indonesia.

## Tech Stack
- **Next.js 14** (App Router)
- **TypeScript**
- **CSS Modules**
- **Google Fonts** (Poppins)

## Fitur yang Sudah Dibangun

| Level | Fitur | Status |
|-------|-------|--------|
| Level 1 | Navbar (Logo, Links, Login Button) | ✅ |
| Level 2 | Hero Section | ✅ |
| Level 3 | Footer Section (Social Icons) | ✅ |
| Level 4 | Pagination (Menu, About Us, Promo, Login pages) | ✅ |
| Compulsory | Deployment (Vercel) | Deploy sendiri |


## Struktur Folder

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx          # /about - About Us Page
│   ├── login/
│   │   └── page.tsx          # /login - Login Page
│   ├── menu/
│   │   └── page.tsx          # /menu - Menu Page
│   ├── promo/
│   │   └── page.tsx          # /promo - Promo Page
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx              # / - Home Page (Hero)
│   └── page.module.css
└── components/
    ├── Navbar.tsx             # Shared Navbar component
    ├── Navbar.module.css
    ├── Footer.tsx             # Shared Footer component
    └── Footer.module.css
