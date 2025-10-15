# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Yay brand UI kit repository built on the shadcn registry template. It serves as a component registry system for distributing custom React components, hooks, pages, and other files to any React project using the `shadcn` CLI.

The repository has two distinct purposes:
- **`/shadcn` route** - Prototype area for building and testing full screens/pages using default shadcn theme (NOT a registry)
- **`/yay` route** - Preview page for the Yay brand UI kit registry components

## Key Commands

**Package Manager**: This project uses `pnpm` (required).

```bash
# Development
pnpm dev                    # Start Next.js dev server with Turbopack

# Building
pnpm build                  # Build Next.js application
pnpm start                  # Start production server

# Linting
pnpm lint                   # Run ESLint

# Registry Building
pnpm registry:yay           # Build yay registry to public/r/yay
```

## Architecture

### Registry Structure

This codebase maintains a single component registry (Yay brand) with a separate prototyping area:

1. **Registry Definition**:
   - `registry-yay.json` - Defines Yay brand UI kit registry items
   - Follows the [shadcn registry schema](https://ui.shadcn.com/schema/registry.json)

2. **Registry Source Files**:
   - `registry/yay/` - Contains Yay brand UI kit components
   - `registry/new-york/` - Example components for reference (not part of Yay registry)

3. **Next.js Routes**:
   - `/shadcn` - **Prototyping area** for building full screens using default shadcn theme (app/shadcn/)
   - `/yay` - Preview page for Yay brand registry components (app/yay/)
   - Each route has its own layout with separate CSS theme files:
     - `app/shadcn/shadcn.css` - Default shadcn theme
     - `app/yay/yay.css` - Yay brand theme

4. **Built Registry**:
   - After running `pnpm registry:yay`, registry items are built to:
     - `public/r/yay/[name].json`
   - These JSON files are consumed by the `shadcn` CLI

### Registry Item Structure

Registry items in the JSON files can include:
- `name` - Unique identifier for the component
- `type` - registry:component, registry:page, registry:hook, registry:lib, etc.
- `dependencies` - npm packages required
- `registryDependencies` - Other registry items this component depends on
- `files` - Array of file paths with their types and optional target paths

Example item types:
- **Simple components**: Single TSX file (e.g., hello-world)
- **Form components**: Component with dependencies and registry dependencies (e.g., example-form)
- **Complex components**: Multiple files including page, components, hooks, and libs (e.g., complex-component)
- **Components with CSS**: Component with accompanying CSS file (e.g., example-with-css)

### Component Configuration

`components.json` configures the shadcn CLI behavior:
- Style: default
- Uses React Server Components (rsc: true)
- TypeScript (tsx: true)
- Tailwind CSS variables mode
- CSS base file: `app/shadcn/shadcn.css`
- Path aliases: @/components, @/lib, @/hooks, etc.

### Technology Stack

- **Framework**: Next.js 15.5.2 with React 19 and App Router
- **Styling**: Tailwind CSS v4 (important: not v3)
- **UI Components**: Radix UI primitives
- **Forms**: react-hook-form + zod validation
- **Icons**: lucide-react
- **Build Tool**: Turbopack (via --turbopack flag)

## Workflows

### Adding New Components to Yay Registry

1. Create component file(s) in `registry/yay/blocks/[component-name]/`
2. Add entry to `registry-yay.json` with file paths and dependencies
3. Run `pnpm registry:yay` to build
4. Import and preview in `app/yay/page.tsx`
5. Ensure Yay brand styling uses `app/yay/yay.css` theme

### Creating Prototypes in the Shadcn Route

The `/shadcn` route is a dedicated prototyping area for building full screens and pages:
- **NOT part of the registry** - this is for prototyping only
- Uses default shadcn theme for consistency
- Build prototype screens directly in `app/shadcn/`
- Can use any shadcn components via `npx shadcn@latest add [component]`
- Ideal for testing layouts, flows, and full page compositions before extracting components into the Yay registry

## Important Notes

- **Always run `pnpm registry:yay`** after modifying `registry-yay.json` or Yay registry source files
- The `/shadcn` route is purely for prototyping screens - it is NOT a registry
- The `/yay` route previews the actual Yay brand UI kit registry
- Registry JSON schema validation: https://ui.shadcn.com/schema/registry.json
- Built registry files are static JSON served from `/public/r/yay/` directory
- v0 integration is available via the OpenInV0Button component
- Only the Yay registry is distributed via the `shadcn` CLI
