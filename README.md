![Next.js Starter Template Banner](/public/mrchriscarpenter-next-starter.png)

# Minimal Next.js Starter Template

This is a minimal [Next.js](https://nextjs.org) starter template preconfigured with [TypeScript](https://www.typescriptlang.org), [Biome](https://biomejs.dev), [Ultracite](https://www.ultracite.ai), [Lefthook](https://lefthook.dev), and [commitlint](https://commitlint.js.org).

## Features

- [Next.js 15](https://nextjs.org/docs/getting-started) with [React 19.1](https://reactjs.org/docs/getting-started.html)
- [TypeScript](https://www.typescriptlang.org/docs)
- [Biome](https://biomejs.dev/guides/getting-started)
- [Ultracite](https://www.ultracite.ai/introduction)
- [Lefthook](https://lefthook.dev)
- [commitlint](https://commitlint.js.org)

## Getting Started

### GitHub Template

[Create a repo from this template on GitHub](https://github.com/mrchriscarpenter/next-starter/generate).

### Install NPM Packages

```Shell
npm i
```

### Start Next.js in Development Mode

```Shell
npm run dev
```

The application will start at [http://localhost:3000](http://localhost:3000) by default.

### Start Next.js in Production Mode

```Shell
npm run build
npm run start
```

The application will start at [http://localhost:3000](http://localhost:3000) by default.

## Ultracite CLI

Ultracite comes with a convenient CLI (invoked as `ultracite` when installed). Here are common ways to use it.

### Linting

The `lint` command wraps the Biome `check` command, which runs the linter without fixing files.

```Shell
npx ultracite lint
```

### Formatting

The `format` command wraps the Biome `check --write` command, which runs the linter and fixes files.

```Shell
npx ultracite format
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

For help with authoring commit messages that adhere to the commit convention, use `npm run commit` to launch an interactive CLI.

## Learn More

This project is intended to provide guidance on how to setup Next.js with useful development tools such as TypeScript, Biome, Ultracite, and Lefthook.

The template is based on the Next.js [create-next-app](https://nextjs.org/docs/getting-started#automatic-setup) with additional npm packages and configurations.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

If you would like to create your own Next.js app from scratch, run:

```Shell
npx create-next-app@latest
```

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
