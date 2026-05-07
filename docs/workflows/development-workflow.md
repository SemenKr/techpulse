# Development Workflow

## Required Codex Workflow

For every task:

1. Analyze the request.
2. Explain the implementation plan.
3. List files to change.
4. Wait for approval if scope is large or ambiguous.
5. Implement incrementally.
6. Validate:
   * `pnpm lint`
   * `pnpm exec tsc --noEmit`
   * `pnpm build`

## Before Coding

* Read the relevant project context.
* Check existing patterns before adding new structure.
* Keep the plan short and practical.
* Do not expand scope silently.

## Plan-Only Mode

For large or risky tasks, Codex should:

1. Analyze the task.
2. Provide a short implementation plan.
3. List affected files.
4. Explain risks and tradeoffs.
5. Wait for approval before coding.

## During Coding

* Keep changes small and focused.
* Prefer existing components and utilities.
* Do not add dependencies without a clear reason.
* Do not create root-level application folders.
* Avoid overengineering and premature abstractions.
* Preserve existing functionality unless the task explicitly changes it.

## After Coding

Run:

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

Then review the diff and confirm no unrelated files were changed.

## Definition of Done

* Task solved minimally and correctly.
* No unrelated changes.
* No unnecessary abstractions.
* Lint, typecheck, and build passing.
* Responsive behavior checked for UI work.
* Architecture consistency preserved.

## Small Commits Strategy

Prefer small commits grouped by purpose:

* docs and workflow updates
* layout updates
* UI component updates
* validation fixes

Avoid mixing unrelated architecture, UI, and feature changes in one commit.

## Architecture Consistency

* All application code lives inside `src`.
* Use `src/app` for App Router files.
* Use `src/components` for shared and layout components.
* Use `src/hooks` for necessary hooks.
* Use `src/lib` for small shared utilities.
* Do not create root-level `app`, `components`, `hooks`, `lib`, or `store`.
* Keep folders flat until real complexity appears.
