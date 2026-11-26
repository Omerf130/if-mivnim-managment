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

The homepage link targets `/#home`, and `/#about` opens the homepage About
section. `/#services` opens the homepage Services section. `/#projects` and
`/#contact` still point to temporary homepage anchors.

The About section uses provisional marketing copy and the existing generated
`residential-exterior.webp` illustration of a fictional building. The
“הכירו אותנו” CTA temporarily targets `#about-details` on the homepage
until a dedicated About page exists.

## Homepage hero media

The homepage uses [Modern Residential Building Exteriors at Dawn](https://www.pexels.com/video/modern-residential-building-exteriors-at-dawn-35985882/)
by umar muazu, supplied via the repository and used under the
[Pexels License](https://www.pexels.com/license/), which permits commercial
website use. The clip illustrates the type of architecture the company serves
and does not depict a property represented as under its management.

`public/media/hero-building.mp4` is a fast-start H.264 video without audio.
`public/media/hero-building-poster.webp` is extracted from its opening frame
and remains visible until playback starts or if playback fails. The original
`residential-exterior.webp` illustration remains available as the default
poster for other uses of the Hero component.

Playback is muted, inline, and looping. Autoplay waits until page load and
is skipped when the browser reports reduced motion or data saving. The
pause/play button lets visitors control playback.

## Homepage Services media

The service list and copy are provisional. The five WebP files in
`public/media/services/` are original AI-generated architectural illustrations.
They show example settings and do not depict properties managed by the company.
