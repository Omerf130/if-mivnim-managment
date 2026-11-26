# if-mivnim-managment

Hebrew RTL public website for פ.ע ניהול ואחזקות, an Israeli property management and building maintenance company. CP1 establishes the project foundation and a temporary homepage.

## Local development

Use Node.js 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Verification

```sh
npm run lint
npm run typecheck
npm run build
```

## Structure

- `src/app/` contains the Next.js App Router routes and document layout.
- `src/components/shared/` is for reusable UI components.
- `src/components/layout/` is for reusable layout components.
- `src/sections/home/` contains homepage sections and their SCSS Modules.
- `src/styles/` contains the global reset, base styles, and shared SCSS tokens.
- `src/utils/` is for shared utilities.
- `public/` is for static assets.

The root layout sets Hebrew and RTL for the entire document. Heebo is bundled through Fontsource, and styles use logical properties to follow the document direction. Import application code with the `@/` alias, which resolves to `src/`.

## Header navigation

The homepage link targets `/#home`. The `/#about`, `/#services`,
`/#projects`, and `/#contact` links point to temporary anchors on the
homepage. The corresponding sections have yet to be implemented. Both
contact links use `/#contact`.
