# Code Style and Conventions

## Language and Framework
- **Language**: TypeScript (enforced via `tsconfig.json`).
- **Framework**: Next.js 16 (App Router) with React 19.

## Components
- Use **Functional Components** with hooks.
- Prefer **Server Components** for SEO-sensitive pages and **Client Components** (`'use client'`) only when interactivity or browser APIs are needed.
- Follow the existing modular structure:
    - Common components in `src/components/common`.
    - Page-specific components in their respective route directories (e.g., `src/app/locations/gangnam/components`).

## Styling
- **Tailwind CSS**: Use Tailwind utility classes for styling.
- **Brand Color**: Use `#F97316` (Orange, hover `#EA580C`) as the primary brand color across buttons, accents, icons, and gradients.
- **Typography**: Jalnan font for headings, system fonts for body text.

## Naming Conventions
- **Files**: PascalCase for components (e.g., `HeroSection.tsx`), kebab-case for routes and non-component files (e.g., `sitemap.ts`).
- **Variables/Functions**: camelCase.
- **Interfaces/Types**: PascalCase.

## SEO
- Every page should have metadata defined via `generateMetadata` (for dynamic routes) or `export const metadata`.
- Use the `generatePageMetadata` helper from `src/lib/metadata.ts` for consistency.
- Ensure all images have descriptive `alt` tags following the pattern: `[Region] [Service] [Work Type] field`.
