# Copilot Instructions

## Project overview

Static marketing website for McKenzies Construction (Belfast). Built with Angular 18, Bootstrap 5, and deployed to Netlify via GitHub Actions on push to `main`.

## Commands

```bash
npm start          # dev server → http://localhost:4200
npm run build      # production build → dist/mckenziesconstruction-new/browser/
npm test           # run all Karma/Jasmine tests

# Run a single spec file
ng test --include='**/app.component.spec.ts'
```

## Architecture

Two routes, both using standalone components:

| Route | Component | File |
|---|---|---|
| `/` | `HomeComponent` | `src/app/home.component.ts` |
| `/services` | `ServicesComponent` | `src/app/services.component.ts` |

`AppComponent` (`src/app/app.component.ts`) owns the shared navbar and footer. The router outlet is inside it. All unknown paths redirect to `/`.

The router is configured with `withInMemoryScrolling` (anchor scrolling enabled) — navbar links use Angular `[routerLink]` + `fragment` attributes to navigate to named sections on the home page (e.g. `#gallery`, `#contact`).

There are **no Angular services, no HTTP calls, and no state management**. All data (gallery albums, service listings) is hardcoded as TypeScript arrays directly in each component class.

## Key conventions

**Standalone components everywhere.** Every component uses `standalone: true`. There are no NgModules.

**Global styles, no encapsulation.** `AppComponent` sets `encapsulation: ViewEncapsulation.None`. All component styling lives in `src/app/app.component.scss`. Do not add component-level style files; add new styles to `app.component.scss` instead.

**Design tokens.** Colour palette is defined as CSS custom properties in `src/styles.scss` under `:root`:
- `--mc-ink` (#101820) — primary dark
- `--mc-yellow` (#f2b705) — brand accent
- `--mc-paper` (#f6f5f0) — off-white background
- `--mc-slate`, `--mc-muted`, `--mc-steel` — text/border greys

Always use these tokens rather than hardcoding hex values.

**Bootstrap 5 + Bootstrap Icons.** Use Bootstrap utility classes for layout and spacing. Icons use the `bi-*` class pattern (e.g. `<i class="bi bi-telephone-fill">`). Bootstrap JS is loaded via `angular.json` scripts (not imported in TypeScript).

**Gallery images.** Images are served from `public/gallery/{folder}/{filename}` and referenced in templates as `/gallery/{folder}/{filename}`. When adding a new project album, add the image files to `public/gallery/<foldername>/` and add a new `GalleryAlbum` entry to the `albums` array in `home.component.ts` using the `albumImages()` helper method.

**Build output path.** Netlify deploy targets `dist/mckenziesconstruction-new/browser/` — don't change `outputPath` in `angular.json`.
