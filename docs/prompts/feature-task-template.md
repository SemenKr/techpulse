# Feature Task Template

Use this prompt for adding product features without expanding architecture unnecessarily.

## Prompt

Answer in Russian.

Feature scope:

* Describe the feature.
* Define the user problem it solves.
* Keep the first implementation small.

Affected areas:

* Pages:
* Components:
* Hooks:
* Lib utilities:

Architecture impact:

* Explain whether the feature needs new files or can reuse existing structure.
* Keep all application code inside `src`.
* Avoid service layers, repositories, factories, and generic abstractions without real need.

Out of scope:

* List what must not be implemented in this task.
* Do not add backend, auth, database, or realtime complexity unless explicitly requested.

Workflow:

1. Analyze the request.
2. Provide a short implementation plan before coding.
3. List affected files.
4. Implement incrementally.
5. Preserve existing behavior.
6. Validate with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
