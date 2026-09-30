# Isaac La

Personal site for Isaac La, a senior software engineer in Irvine, California. One page: a short intro, a work timeline, and the stack from the resume.

## Requirements

Node.js 22 or newer. The version is pinned in `.nvmrc`.

## Scripts

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

| Command                | What it does                           |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Start the Next.js dev server           |
| `npm run build`        | Production build                       |
| `npm run start`        | Serve the production build             |
| `npm run lint`         | ESLint                                 |
| `npm run format`       | Format with Prettier                   |
| `npm run format:check` | Check formatting without writing files |

## Where things live

- `app/page.tsx` renders the page.
- `lib/profile.ts` holds the intro, roles, skills, and contact details.
- `components/matrix-rain.tsx` is the background.
- `components/typed-intro.tsx` types the intro.

Indentation is 2 spaces, set in `.editorconfig`.

## Checks

On every push and pull request, GitHub Actions installs dependencies, lints, checks formatting, and builds. The workflow is `.github/workflows/ci.yml`.

An earlier version of the site is on the `THEME_A` branch.
