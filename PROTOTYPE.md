# PROTOTYPE.md

This file provides guidance to Claude Code when building prototypes in the `/shadcn` route.

## Overview

The `/shadcn` route is a dedicated prototyping area for building and testing full screens and pages. Prototypes use the default shadcn theme and are NOT part of the Yay registry - they exist purely for experimentation and iteration before components are extracted into the registry.

## Prototype Workflow

When a user asks to create a prototype, follow these steps carefully:

### Step 1: Gather Requirements

**Ask clarifying questions** until you fully understand the prototype requirements:
- What is the purpose of this screen/page?
- What features or functionality should it include?
- What data will be displayed or collected?
- Are there any specific UI patterns or layouts to follow?
- What user interactions are expected?
- Are there any specific shadcn components to use?

**Verify understanding** by summarizing the requirements back to the user before proceeding.

### Step 2: Research Existing Patterns

Before implementing, **read example code** to understand patterns:
- Check `app/shadcn/blocks/` for similar screen examples and component usage patterns
- Look at existing prototypes under `app/shadcn/prototype/`
- Review the shadcn blocks gallery for additional reference implementations

This ensures consistency with shadcn best practices.

### Step 3: Set Up Route Structure

Create the necessary files for the prototype:

1. **Create route directory**: `app/shadcn/prototype/[prototype-name]/`
2. **Create page file**: `app/shadcn/prototype/[prototype-name]/page.tsx`
3. **Create component files** (if needed): `app/shadcn/prototype/[prototype-name]/[component-name].tsx`

Example structure:
```
app/shadcn/prototype/booking-flow/
  ├── page.tsx                    # Main page export
  ├── booking-form.tsx            # Feature-specific component
  └── booking-summary.tsx         # Feature-specific component
```

### Step 4: Implement with Shadcn Components

Build the prototype using shadcn components:

1. **Install needed components**:
   ```bash
   npx shadcn@latest add [component-name]
   ```

2. **Import components** from `@/components/ui/`

3. **Follow shadcn patterns**:
   - Use Tailwind CSS for styling
   - Leverage Radix UI primitives for accessibility
   - Use react-hook-form + zod for forms
   - Follow responsive design patterns

4. **Use default shadcn theme**:
   - Styling automatically uses `app/shadcn/shadcn.css`
   - No need to add custom theme overrides

5. **Break down implementation**:
   - Start with layout and structure
   - Add core functionality
   - Implement interactions and validation
   - Polish UI details

### Step 5: Share and Iterate

Once the initial implementation is complete:

1. **Share the route** with the user:
   ```
   Prototype ready at: /shadcn/prototype/[prototype-name]
   Run `pnpm dev` to view at http://localhost:3000/shadcn/prototype/[prototype-name]
   ```

2. **Ask for feedback**:
   - What works well?
   - What needs adjustment?
   - Are there any missing features?
   - Any UI/UX improvements needed?

3. **Iterate based on feedback**:
   - Make requested changes
   - Share updated route again
   - Repeat until the user is satisfied

## Key Principles

- **Clarify first, code later** - Always understand requirements fully before implementing
- **Learn from examples** - Reference existing shadcn blocks for patterns
- **Iterate incrementally** - Build in steps, get feedback, refine
- **Use shadcn components** - Leverage the ecosystem rather than building from scratch
- **Keep prototypes isolated** - Each prototype lives in its own route under `/shadcn/prototype/`

## Common Prototype Types

- **Form screens** - Data collection with validation
- **Dashboard layouts** - Data visualization and navigation
- **Multi-step flows** - Wizards, onboarding, checkout processes
- **Data tables** - List views with sorting, filtering, pagination
- **Detail pages** - Single entity views with actions
- **Authentication screens** - Login, signup, password reset

## Resources

- shadcn documentation: https://ui.shadcn.com
- Registry schema: https://ui.shadcn.com/schema/registry.json
- shadcn blocks gallery: https://ui.shadcn.com/blocks
- Example blocks: `app/shadcn/blocks/`
- Existing prototypes: `app/shadcn/prototype/`
