# Review Template

Use this prompt to review implemented code and architecture.

## Prompt

Answer in Russian.

Review scope:

* Branch, commit, diff, or files to review:
* Main intent of the change:

Review focus:

* Architecture review.
* Readability review.
* Overengineering detection.
* Responsiveness review.
* Validation review.
* Future risk review.

Architecture reminders:

* Preserve strict `src` architecture.
* Prefer flat, readable structure.
* Flag unnecessary hooks, service layers, repositories, factories, and generic abstractions.

Required response sections:

## Strengths

* What is good and should be preserved.

## Issues

* Bugs, regressions, broken imports, or maintainability problems.

## Risks

* Realistic risks for future development.

## Possible Improvements

* Practical improvements only.
* No speculative overengineering.

Validation:

* Mention lint status if known.
* Mention typecheck status if known.
* Mention build status if known.
