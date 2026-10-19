<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:6366F1,100:06B6D4&height=170&section=header&text=sandeepkumarbollavaram.in&fontSize=34&fontColor=ffffff&fontAlignY=38&desc=Personal%20portfolio%20%E2%80%94%20Next.js%2016%20%C2%B7%20React%2019%20%C2%B7%20Tailwind%204&descAlignY=60&descSize=14&animation=fadeIn" width="100%" />

<a href="https://www.sandeepkumarbollavaram.in"><img src="https://img.shields.io/badge/Live-sandeepkumarbollavaram.in-6366F1?style=for-the-badge&logo=vercel&logoColor=white" /></a>
<img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
<img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
<img src="https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
<img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />

</div>

The portfolio of **Sandeep Kumar Bollavaram**: full-stack, platform and AI engineer. It shows featured projects, experience, skills, live GitHub activity, and a downloadable resume.

## ✨ Features

| | |
|:--|:--|
| 🎯 **Curated + live projects** | Hand-written project entries in `src/lib/projects.ts`, merged at runtime with public repos from the GitHub API |
| 📊 **GitHub activity** | Contribution and repo stats served from a cached `/api/github` route (1h revalidate) |
| 👀 **Visitor analytics** | Page-view tracking, a live visitor count and opt-in email capture, stored in Supabase |
| 🛡️ **Admin dashboard** | `/admin` page behind Supabase Auth, listing visitor emails, contact and hire requests |
| 📄 **Resume** | `public/Sandeep_Kumar_Bollavaram_Resume.pdf`, linked from the hero, about, experience and footer |
| 🔍 **SEO** | OpenGraph/Twitter metadata and Person JSON-LD in `src/app/layout.tsx` |

## 🗺️ Pages

| Route | Purpose |
|:--|:--|
| `/` | Hero, snapshot, featured projects, focus areas, skills, GitHub activity, experience, about, education, contact |
| `/projects` | Every project with category filters and a detail modal |
| `/hire` · `/contact` | Hire and contact forms |
| `/startup` | Flexdee Technologies |
| `/admin` | Private dashboard |

## 🧱 Project structure

```
src/
├── app/            # routes, API handlers, layout + global styles
├── components/     # page sections (Hero, Experience, Education, …)
└── lib/
    ├── projects.ts # curated project data, featured order
    ├── skills.ts   # skill groups, snapshot, tech stack
    ├── github.ts   # GitHub API fetch + merge with curated projects
    └── supabase.ts # Supabase client
public/
├── images/profile.jpg
└── Sandeep_Kumar_Bollavaram_Resume.pdf
```

## ✏️ Updating content

- **Projects:** edit `src/lib/projects.ts`. Set `featuredHome: true` and `order` (1–6) to put a project on the homepage grid.
- **Skills:** edit `src/lib/skills.ts`.
- **Experience / education:** edit the arrays at the top of `src/components/Experience.tsx` and `src/components/Education.tsx`.
- **Resume:** replace `public/Sandeep_Kumar_Bollavaram_Resume.pdf` and keep the same file name.

## 🚀 Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

Visitor tracking and the admin dashboard need `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` in `.env.local`. Without them the site still runs and skips those features.

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:06B6D4,100:6366F1&height=90&section=footer" width="100%" />

</div>
