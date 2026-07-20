# Marken Ricardo — Portfolio

Next.js 14 + Tailwind CSS portfolio site, scaffolded from the design mockups.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Before you deploy

1. **Contact form** — replace `FORM_ENDPOINT` in `src/components/sections/Contact.tsx`
   with your real Formspree form ID (formspree.io) or swap it for a Resend API route.
2. **GitHub link** — replace the placeholder `#` link in `Contact.tsx` with your real GitHub URL.
3. **Project images** — drop real screenshots into `public/images/projects/` and update
   `ProjectCard.tsx` to render an `<Image>` instead of the placeholder box.
4. **Resume PDF** — add `resume.pdf` to `public/` if you want a download link.
5. **Favicon** — replace `public/favicon.ico`.

## Editing content

All real content lives in `src/data/`:
- `projects.ts` — your project list
- `experience.ts` — your two internships
- `skills.ts` — grouped skill lists

Add a new project by adding an object to the `projects` array — no component code needs to change.

## Deploying

Push to GitHub, then import the repo at vercel.com. Zero config needed.
