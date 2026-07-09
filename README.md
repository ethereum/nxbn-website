# Next Billion — Program Archive

The Ethereum Foundation's **Next Billion** team ran the Next Billion Fellowship, the Devcon(nect) Scholars program, and the Ethereum Season of Internships from 2022–2025. The team no longer exists and applications for all programs are closed.

This repository now serves a **single static archive page** at the site root (`/`) explaining that the programs have concluded and pointing visitors to where the work lives on (the [Ethereum Foundation blog](https://blog.ethereum.org/category/next-billion), [Devcon.org](https://devcon.org), and [ethereum.org's community hub](https://ethereum.org/community/)).

## Site structure

- `/` — the program archive page (`src/pages/index.tsx`).
- `/cookie-policy` — the legal/cookie policy page, still served from markdown (`public/content/cookie-policy/index.md`) via the catch-all route (`src/pages/[...slug].tsx`).
- All previously existing routes — `/fellowship`, `/fellowship/*` (individual fellow stories), `/scholars`, `/internships`, and `/about` — now **301-redirect** to `/`. The redirects are defined in [`next.config.js`](./next.config.js).

The full multi-page site (home, fellowship, scholars, internships, about) and the individual fellow story pages have been removed. Their content, including the fellow essays and project writeups, remains available in this repository's git history and on the [Ethereum Foundation blog](https://blog.ethereum.org/category/next-billion).

## Website development

This is a [Next.js](https://nextjs.org/) project (Pages Router).

### Getting started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Useful commands

```bash
pnpm build    # production build (also generates the sitemap)
pnpm lint     # run eslint
pnpm format   # run prettier
```
