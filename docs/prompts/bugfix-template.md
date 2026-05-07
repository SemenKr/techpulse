# Bugfix Template

Use this prompt for focused debugging and issue resolution.

## Prompt

Answer in Russian.

Bug description:

* Describe what is broken.
* Include error messages, screenshots, or logs if available.

Reproduction notes:

* Steps to reproduce:
* Environment:
* Route or component:

Expected behavior:

* Describe the correct behavior.

Affected files:

* List known files or ask Codex to identify them.

Fix constraints:

* Make the smallest reliable fix.
* Preserve strict `src` architecture.
* Preserve existing behavior outside the bug.

Do NOT do:

* broad rewrites
* speculative refactors
* architecture expansion
* unrelated cleanup

Workflow:

1. Analyze the bug.
2. Identify likely affected files.
3. Provide a short fix plan.
4. Implement the minimal fix.
5. Validate with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
