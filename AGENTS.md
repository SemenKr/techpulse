<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->

# TechPulse AI Development Rules

## Working Style

* Codex MUST answer and explain in Russian unless the user explicitly requests another language.
* Planning-first workflow is required for every non-trivial task.
* Never implement large features without a short plan and clear affected files.
* Prefer small iterative changes over broad rewrites.
* Keep architecture flat, readable, and aligned with existing project structure.
* Avoid overengineering and premature abstractions.
* Avoid generating unnecessary folders or files.
* Choose the simplest reliable solution that fits the current codebase.
* If a decision is not obvious, briefly explain why this approach is better.

---

## Required Codex Workflow

Before implementation:

1. Analyze the task.
2. Create a short implementation plan.
3. Explain affected files.
4. Only then implement.

For large or ambiguous scope:

* Ask for approval before implementation.
* Split the work into small steps.
* Do not silently expand scope.

After implementation:

* Show the relevant diff or summarize exact changes.
* Run validation when code changes:
  * `pnpm lint`
  * `pnpm exec tsc --noEmit`
  * `pnpm build`

---

## One Task = One Intent

* Do not mix feature work with refactors.
* Do not combine architecture rewrites with UI polish.
* Keep implementation scope focused.
* If unrelated issues are discovered, mention them separately instead of fixing silently.

---

## Response Requirements

For every completed task, responses MUST include:

### What Changed

* Short summary of implemented changes.
* Affected files.
* Architecture impact.

### Validation

* Lint status.
* Typecheck status.
* Build status.

### Possible Improvements

* Short list of realistic future improvements.
* No speculative overengineering.
* No unrelated ideas.

### Notes

* Mention architectural concerns if detected.
* Mention tradeoffs if relevant.

Response quality rules:

* Be concise.
* Be technical and practical.
* Avoid unnecessary verbosity.
* Explain architectural impact briefly.
* Avoid generic AI filler text.

---

## Project Overview

TechPulse is a real-time tech intelligence dashboard built with:

* Next.js
* TypeScript
* Tailwind
* shadcn/ui

The project focuses on:

* realtime dashboards
* analytics
* live feeds
* filtering/search
* streaming updates
* modern frontend architecture

---

## Architecture Principles

* Keep architecture simple
* Avoid overengineering
* Prefer flat structures
* Use feature-first organization
* Colocate related logic
* Create folders only when needed
* Avoid premature abstractions
* Do not introduce architectural layers before they solve a real repeated problem

---

## Decision Rules

* If something can be solved with Tailwind utilities, avoid creating extra abstractions.
* Do not extract components prematurely.
* Components used once should usually stay local.
* Create hooks only for real reuse or complex logic isolation.
* Use `src/lib` only for small shared utilities.
* Prefer composition over configuration systems.
* Avoid future-proof abstractions.
* Use `index.ts` files only as small public APIs for component folders.
* Do not create barrel exports for every folder by default.

---

## Critical Structure Rule

This project uses STRICT src-based architecture.

All application code MUST live inside:
src/

Never create root-level folders such as:

* app/
* components/
* hooks/
* lib/
* store/

Correct:
src/app
src/components
src/hooks
src/lib

Incorrect:
app
components
hooks
lib

---

## UI Principles

* Clean dashboard UI
* Responsive layouts
* Reusable UI only when necessary
* Prefer composition over inheritance
* Use shadcn/ui primitives
* Use Tailwind utilities directly

---

## Semantic HTML and Accessibility Rules

* Prefer semantic HTML over generic div wrappers.
* Use native HTML elements before ARIA roles.
* Maintain proper heading hierarchy.
* Interactive elements must have accessible labels.
* Navigation areas should use semantic `nav` landmarks.
* Use `section` and `article` landmarks where they improve structure clarity.
* Avoid unnecessary ARIA usage when native semantics already solve the problem.
* Accessibility improvements should remain lightweight and practical.

---

## Code Rules

* Use TypeScript strictly
* Prefer server components by default
* Use client components only when necessary
* Avoid large files
* Avoid deeply nested folders
* Avoid unnecessary hooks
* Avoid global types folders
* Avoid service layers without real need

Do NOT create without real need:

* service layers
* factories
* repositories
* generic abstractions
* custom hooks
* deeply nested folders
* global types dumping grounds

---

## Naming

* kebab-case for files
* semantic naming
* avoid vague names like helpers/utils2/temp

---

## State Management

* Local state first
* Zustand only for shared global state
* TanStack Query for server state

---

## Styling

* Tailwind only
* Use cn() utility for conditional classes
* Keep spacing consistent

---

## Components

Shared reusable UI:
src/components/

Feature-specific UI:
src/features/

---

## Important

This is a production-like frontend project.

Prioritize:

* readability
* maintainability
* UX
* developer experience

Avoid:

* enterprise complexity
* premature optimization
* unnecessary abstractions
