# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Unperfekt is a Svelte-based design system monorepo built with modern tooling. The project uses Turborepo for task orchestration, pnpm workspaces for package management, and includes a component library, documentation site, Storybook, and shared configuration packages.

## Architecture

### Monorepo Structure

- **`packages/unperfekt/`** - Core Svelte component library with TypeScript
- **`packages/tokens/`** - Design tokens built with Style Dictionary
- **`packages/*-config-unperfekt/`** - Shared configuration packages for ESLint, Prettier, Tailwind, PostCSS, and Commitlint
- **`apps/docs/`** - SvelteKit documentation site with MDsveX
- **`apps/storybook/`** - Storybook for component development and testing

### Key Technologies

- **Svelte 5** with TypeScript for components
- **SvelteKit** for documentation app
- **Storybook 8** for component development
- **Tailwind CSS 4** for styling
- **Style Dictionary** for design token generation
- **Rollup** for component library builds
- **Turborepo** for build orchestration
- **pnpm** for package management

## Development Commands

### Root Level Commands

```bash
# Install dependencies
pnpm i

# Development (runs all apps in parallel)
pnpm dev

# Build all packages
pnpm build

# Lint all packages
pnpm lint

# Type checking
pnpm check

# Run tests
pnpm test

# Preview built apps
pnpm preview
```

### Package-Specific Commands

```bash
# Component library development
cd packages/unperfekt
pnpm dev          # Watch mode build
pnpm build        # Production build
pnpm build:types  # Generate TypeScript definitions
pnpm check        # Type checking

# Documentation development
cd apps/docs
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm check        # Type checking

# Storybook development
cd apps/storybook
pnpm storybook    # Start Storybook on port 6007
pnpm build        # Build Storybook static files

# Design tokens
cd packages/tokens
pnpm build        # Generate tokens with Style Dictionary
```

## Code Architecture

### Component Library (`packages/unperfekt/`)

- **Component Structure**: Each component has `src/`, `css/`, `docs/`, and `stories/` directories
- **Exports**: Components exported through `src/index.ts` with explicit `.js` extensions
- **TypeScript**: Strict typing with shared `tsconfig-unperfekt` configuration
- **Build Output**: Rollup generates both ESM and UMD bundles in `dist/`
- **CSS**: Component-specific CSS files in `css/` directory, importable separately

### Design Tokens (`packages/tokens/`)

- **Source**: YAML files in `src/globals/` and `src/themes/`
- **Build**: Custom Node.js script using Style Dictionary
- **Output**: Generated CSS custom properties and design token files

### Shared Configurations

- **ESLint**: TypeScript-first with Svelte support, strict import ordering
- **Prettier**: Consistent formatting with Tailwind plugin
- **Tailwind**: Shared configuration with custom design tokens
- **TypeScript**: Strict configurations for different project types (base, Svelte)

### Import Patterns

- Use explicit `.js` extensions in imports (TypeScript requirement)
- Workspace packages referenced with `workspace:*` in package.json
- Catalog dependencies defined in `pnpm-workspace.yaml` for version consistency

## Quality Standards

### Linting & Formatting

- **ESLint**: `import/no-default-export` warning (prefer named exports)
- **Import Order**: Builtin → external → internal → parent → sibling → index → object → type
- **TypeScript**: Strict type checking with `no-explicit-any` disabled
- **Svelte**: Full ESLint integration with TypeScript support

### Testing Strategy

- Component testing through Storybook
- Type checking with `svelte-check`
- Lint-staged for pre-commit quality gates

### Build Requirements

- All TypeScript must pass type checking before build
- Rollup builds must complete successfully
- Generated type definitions required for library packages

## Release Process

- **Branching**: `main` (production), `next` (rc), `beta` (beta), `x.x` (hotfixes)
- **Versioning**: Independent versioning via Lerna
- **CI/CD**: Auto-releases on branch pushes with lint → test → build → publish pipeline
- **Conventional Commits**: Required for changelog generation
