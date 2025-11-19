# StandOutU Frontend

Premium marketing site for the StandOutU resume review studio. Built with React, TypeScript, Vite, Tailwind CSS, and react-icons.

## Highlights

- Gradient hero with stats, testimonials, and FAQ
- Reusable CTA button + section title utilities
- Tailwind theme tokens for fonts, colors, and depth

## Local development

```bash
cd StanoutU_Frontend
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Integration notes

- Copy references the Node API (`/api/reviews`, `/api/availability`) so the site and backend feel cohesive.
- Tailwind tokens live in `tailwind.config.cjs`; update the `brand` palette to match future art direction.
- Send form submissions to the backend endpoint documented in `StandOutU_Backend/README.md` once the intake form is implemented.
