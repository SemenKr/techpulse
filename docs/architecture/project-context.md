# Project Context

TechPulse is a real-time tech intelligence dashboard for monitoring technology signals, market movement, product updates, live feeds, analytics, and alerts.

The project exists to give product, engineering, and strategy-focused users a focused workspace for understanding what is changing in the technology landscape without jumping between many fragmented sources.

## Project Goals

* Build a clean dashboard foundation for long-term product growth.
* Keep the frontend architecture simple and maintainable.
* Support future live feeds, filtering, analytics, and realtime updates.
* Make AI-assisted development predictable through clear project rules.

## Target Audience

* Product teams tracking technology and market signals.
* Engineering leaders watching platform, AI, and security trends.
* Analysts who need a fast operational view instead of a marketing-style site.

## Frontend Engineering Focus

* Next.js App Router with strict TypeScript.
* Server components by default.
* Client components only where interaction requires them.
* Tailwind utilities and shadcn/ui primitives.
* Small, readable components.
* Flat `src`-based architecture.

## Product Philosophy

TechPulse should feel practical, fast, and operational. The UI should prioritize scanning, comparison, and repeated daily use.

The product should avoid decorative complexity. Every visible element should help users understand status, movement, priority, or context.

## UX Direction

* Clean dashboard UI.
* Responsive layouts.
* Sticky navigation and header patterns.
* Dense but readable information.
* Clear active states and predictable navigation.
* Loading, empty, and error states when real data is introduced.

## Technical Direction

* Keep application code inside `src`.
* Prefer local state until shared state is truly needed.
* Use TanStack Query only when real server state exists.
* Avoid fake APIs and mock backend layers.
* Add abstractions only after repeated patterns appear.

## Stack

* Next.js App Router
* TypeScript
* Tailwind CSS
* shadcn/ui
* lucide-react

## Architecture

The project uses strict `src`-based architecture.

All application code must live in:

* `src/app`
* `src/components`
* `src/hooks`
* `src/lib`

## Product Direction

The interface should feel like a focused operational dashboard:

* clear navigation
* dense but readable information
* responsive layouts
* reusable UI only when it reduces real duplication
* no fake backend or premature state management

## What This Project Is NOT

* Not a marketing landing page.
* Not an enterprise architecture showcase.
* Not a backend-heavy system yet.
* Not a place for speculative patterns.
* Not a playground for unnecessary libraries.

## Avoid

* Premature service layers.
* Factories, repositories, and generic abstractions without need.
* Deeply nested folders.
* Global dumping grounds for types or utilities.
* Custom hooks that only wrap simple local code.
* Fake backend complexity.
* Large feature generation without planning.
