# Agent Instructions

## Previewing changes in the browser

Use `playwright-cli` to open a headed Chromium browser pointing at the live deployed site:

```bash
playwright-cli close 2>/dev/null
playwright-cli open --headed --browser chrome --config .playwright/cli.config.json https://aashrithahq.github.io/mayanga/
```

Navigate to a specific page:

```bash
playwright-cli goto https://aashrithahq.github.io/mayanga/<slug>/
```

Take a screenshot of the current page:

```bash
playwright-cli screenshot
```

Close the browser when done:

```playwright-cli close
```

## Git workflow

- Always stage and commit changes using conventional commit messages.
- Always **wait for the user to review and confirm** before committing any changes made to the repo. Present the summary of changes (with `git diff --staged` or equivalent) and ask for approval before committing.
- Never commit without explicit user confirmation.
- After the user confirms, commit using a concise conventional commit message.
- Push only when explicitly asked.
