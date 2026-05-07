# Refactor Template

Use this prompt for safe architectural and code quality improvements.

## Prompt

Answer in Russian.

Current problem:

* Describe the code smell, duplication, readability issue, or architecture inconsistency.
* Include affected files if known.

Desired improvement:

* Define the target state.
* Keep the refactor small and behavior-preserving.

Constraints:

* Preserve public behavior.
* Preserve strict `src` architecture.
* Keep folder structure flat unless there is a real need.
* Do not add dependencies.

Compatibility requirements:

* Existing imports should keep working or be updated explicitly.
* Existing UI behavior should remain unchanged.
* Existing validation commands must pass.

Do NOT do:

* unrelated rewrites
* hidden feature additions
* structure changes without need
* broad formatting churn

Workflow:

1. Analyze the current implementation.
2. Provide a short refactor plan.
3. List affected files.
4. Refactor incrementally.
5. Validate with `pnpm lint`, `pnpm exec tsc --noEmit`, and `pnpm build`.
