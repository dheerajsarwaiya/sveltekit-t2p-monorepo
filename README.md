# Turborepo Sveltekit Typescript TailwindCSS Prisma trpc starter

The vision with this repo is to make a starter kit which has all the best practices of t3 architecture (except instead of nextjs, use sveltekit )

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `docs`: a [svelte-kit](https://kit.svelte.dev/) app
- `web`: another [svelte-kit](https://kit.svelte.dev/) app with tailwindcss and a basic page to perform crud using prisma
- `database`: prisma database setup (for the example, using sqlite)
- `ui`: a stub Svelte component library shared by both `web` and `docs` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-plugin-svelte` and `eslint-config-prettier`)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Using this example

Run the following command:

```sh
npx degit vercel/turbo/examples/with-svelte with-svelte
cd with-svelte
pnpm install
git init . && git add . && git commit -m "Init"
```
