# Agent Instructions

## Previewing changes in the browser

Use `playwright-cli` with the project's config to open a headed Chromium browser pointing at the live deployed site:

```bash
playwright-cli close 2>/dev/null
playwright-cli open --headed --browser chrome --config .playwright/cli.config.json https://aashrithahq.github.io/mayanga/
```

Navigate to a specific page:

```bash
playwright-cli goto https://aashrithahq.github.io/mayanga/<slug>/
```

Take a screenshot of the current page (saves to dist/.playwright-cli-output):

```bash
playwright-cli screenshot
```

Close the browser when done:

```bash
playwright-cli close
```

### Minimizing temp files

- Use `outputMode: "stdout"` in config (already set) to avoid unnecessary file creation
- Clean up old screenshots periodically: `rm -rf dist/.playwright-cli-output/`
- Screenshots are named `page-YYYY-MM-DDTHH-MM-SS-MMMZ.png` by default

## Cleanup

**ALWAYS close the browser after testing:**
```bash
playwright-cli close
```

## Git workflow

- Always stage and commit changes using conventional commit messages.
- Always **wait for the user to review and confirm** before committing any changes made to the repo. Present the summary of changes (with `git diff --staged` or equivalent) and ask for approval before committing.
- Never commit without explicit user confirmation.
- After the user confirms, commit using a concise conventional commit message.
- Push only when explicitly asked.
