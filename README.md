# Promptfoo Code Scan GitHub Action

Scan pull requests for LLM security vulnerabilities using AI-powered analysis.

## Usage

```yaml
name: Security Scan

on:
  pull_request:
    types: [opened, synchronize]

permissions:
  id-token: write
  contents: read
  pull-requests: write

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: promptfoo/code-scan-action@v0
        with:
          minimum-severity: medium
```

## Inputs

| Input | Description | Default |
|-------|-------------|---------|
| `minimum-severity` | Minimum severity to report: `low`, `medium`, `high`, `critical` | `high` |
| `server-url` | Code scan server URL | `https://api.promptfoo.dev` |

## License

MIT
