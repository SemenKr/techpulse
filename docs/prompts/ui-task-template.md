# UI Task Template

Use this prompt for dashboard UI, widgets, layouts, responsive components, charts, and visual systems.

## Prompt

Answer in Russian.

Task context:

* Describe the UI task and user goal.
* Mention the existing screen, layout, or component involved.

UI goals:

* Define the expected visual result.
* Keep the interface clean, dashboard-oriented, and responsive.
* Prefer shadcn/ui primitives and Tailwind utilities.

Files to create/update:

* List expected files before implementation.
* Keep changes inside `src`.

Responsiveness requirements:

* Desktop behavior:
* Tablet behavior:
* Mobile behavior:

Architecture constraints:

* Use strict `src` architecture.
* Keep components small and readable.
* Avoid unnecessary folders.
* Do not add state management unless required.

## UI Quality Checklist

* Mobile and desktop behavior checked.
* Dashboard density preserved.
* No decorative overload.
* No giant components.
* Spacing consistency preserved.
* No unnecessary nesting.
* shadcn/ui used where appropriate.

Do NOT create:

* fake backend logic
* unnecessary hooks
* premature abstractions
* giant components

Workflow:

1. Analyze the task.
2. Provide a short implementation plan.
3. List affected files.
4. Implement incrementally.
5. Validate with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
