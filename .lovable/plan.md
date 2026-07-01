## Plan: IS.CORE Portfolio (Cyber-industrial direction)

Build a single-page portfolio at `src/routes/index.tsx` based on the selected v1 prototype, with cleaner human-readable copy and all sections from the original component.

### Design tokens (src/styles.css)
- Add `@theme` tokens: `--color-core-bg #020617`, `--color-surface #0f172a`, `--color-accent-emerald #10b981`, `--color-accent-indigo #6366f1`, `--font-display 'Space Grotesk'`, `--font-sans 'Inter'`.
- Keep existing shadcn tokens untouched.

### Fonts
- Install `@fontsource/space-grotesk` and `@fontsource/inter`, import weights in `src/start.ts` (300/500/700 display, 300/400/600 sans).

### Page structure (`src/routes/index.tsx`)
1. **Fixed nav** — pulse dot + `IS.CORE` wordmark, links (About, Skills, Experience, Projects), "Get in touch" pill.
2. **Hero** — indigo glow blur, badge "Information Science Engineer", H1 with emerald→indigo gradient on "Intelligence Layer", concise subhead, two CTAs (View Projects, Download Resume).
3. **Skills grid** — 3 surface cards (Cognitive Engines, Full-Stack Systems, Infrastructure) using lucide icons (`Brain`, `Zap`, `Database`) instead of emoji, each with description + tech tags.
4. **Featured project (split)** — NeuroScan case study (AI gynecological diagnosis) with hero image generated via imagegen (medical/neural visualization, emerald accents), 3 bullet highlights, hashtag row.
5. **Secondary projects** — 2-card grid for EDU-HUB and Hospital Management with tags + bullets, matching surface card treatment.
6. **Frontend spotlights** — compact 2-card row for AI Support Chatbot and Chrono Storefront.
7. **Engineering timeline** — vertical emerald-bordered timeline: Dhee Coding Lab internship + B.E. Information Science with CGPA 9.0 badge.
8. **Certifications** — minimal list with emerald bullet markers (NPTEL IoT, DevOps workshop, NASA Space Apps, GenAI Full Stack).
9. **Footer** — wordmark, copyright, GH/LI/Email icon tiles (lucide `Github`, `Linkedin`, `Mail`).

### Copy rewrite
Strip jargon ("type-safe ecosystems", "operational stacks mapped out dynamically", "round-the-clock conversational support"). Use crisp 1–2 sentence descriptions per item, action-led bullets.

### Route metadata
Update `head()` in `index.tsx`: title "IS.CORE — Information Science Engineer", description summarizing AI + full-stack focus, matching og tags.

### Notes
- No backend, no new packages beyond fonts.
- Use semantic tokens only — no hardcoded color classes outside the registered theme.
- Generate 1 hero image for NeuroScan; other cards use clean surface treatments (no stock photos).