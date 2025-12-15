# Minimal Next.js Starter Template

A minimal [Next.js](https://nextjs.org) starter template powered by [Bun](https://bun.com).

## Tech Stack

- **Runtime:** [Bun](https://bun.com/docs)
- **Framework:** [Next.js](https://nextjs.org/docs/getting-started) + [React](https://reactjs.org/docs/getting-started.html)
- **Language:** [TypeScript](https://www.typescriptlang.org/docs)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com)
- **Code Formatter and Linter:** [Biome](https://biomejs.dev/guides/getting-started) + [Ultracite](https://www.ultracite.ai/introduction)
- **Commit Linter:** [commitlint](https://commitlint.js.org)
- **Git Hooks Manager:** [Lefthook](https://lefthook.dev)

## Getting Started

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mrchriscarpenter/next-starter/generate).

### Prerequisites

- [Bun](https://bun.com/docs/installation) installed.

### Install NPM Packages

```Shell
bun i
```

### Start Next.js in Development Mode

```Shell
bun dev
```

The application will start at [http://localhost:3000](http://localhost:3000) by default.

### Start Next.js in Production Mode

```Shell
bun build
bun start
```

The application will start at [http://localhost:3000](http://localhost:3000) by default.

## Ultracite CLI

Ultracite is a zero-config Biome preset that provides a robust linting and formatting experience for your team and your AI integrations.

Ultracite comes with a convenient CLI (invoked as `ultracite` when installed). Here are common ways to use it.

### Linting

The `check` command wraps the Biome `check` command, which runs the linter without fixing files.

```Shell
# Using Ultracite CLI
bunx ultracite check

# Using script in package.json
bun lint
```

### Formatting

The `fix` command wraps the Biome `check --write` command, which runs the linter and fixes files.

```Shell
# Using Ultracite CLI
bunx ultracite fix

# Using script in package.json
bun format
```

## Committing

This repo uses [commitlint](https://commitlint.js.org) to help adhere to a commit convention. Commits should follow the [Conventional Commits specification](https://conventionalcommits.org).

Commit types:

- ✨ feat: A new feature
- 🐛 fix: A bug fix
- 📚 docs: Documentation only changes
- 💎 style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- 📦 refactor: A code change that neither fixes a bug nor adds a feature
- 🚀 perf: A code change that improves performance
- 🚨 test: Adding missing tests or correcting existing tests
- 🛠 build: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- ⚙️ ci: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
- ♻️ chore: Other changes that don't modify src or test files
- 🗑 revert: Reverts a previous commit

For help with authoring commit messages that adhere to the commit convention, use `bun commit` to launch an interactive CLI.
