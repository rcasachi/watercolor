# Watercolor Package Composition

A set of tools and guidelines to empower developers to create universal experiences faster, more scalable and more consistently.

## Packages

This codebase is a monorepo with a set of individually versioned libraries.

- [@watercolor/ui](https://github.com/rcasachi/watercolor/tree/main/packages/ui) : A set of React components that follow our design tokens
- [@water/typescript-config](https://github.com/rcasachi/watercolor/tree/main/packages/typescript-config) : Typescript configuration

## Applications

- [docs](https://github.com/rcasachi/watercolor/tree/main/apps/docs) : Our documentation website/stories

## Utilities

This Package Composition has some additional tools already setup:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [Biome](https://biomejs.dev) for code linting and formatting

## Build

To build all apps and packages, run the following command:

```bash
npm run build
```

## Develop

To develop all apps and packages, run the following command:

```bash
npm run dev
```

## Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```bash
npx turbo login
```

This will authenticate the Turborepo CLI with your [Vercel account](https://vercel.com/docs/concepts/personal-accounts/overview).

Next, you can link your Turborepo to your Remote Cache by running the following command from the root of your Turborepo:

```bash
npx turbo link
```

### Useful Links

Learn more about the power of Turborepo:

- [Tasks](https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks)
- [Caching](https://turbo.build/repo/docs/core-concepts/caching)
- [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching)
- [Filtering](https://turbo.build/repo/docs/core-concepts/monorepos/filtering)
- [Configuration Options](https://turbo.build/repo/docs/reference/configuration)
- [CLI Usage](https://turbo.build/repo/docs/reference/command-line-reference)

## Contributing

We welcome all kind of contributions. Please read our CONTRIBUTING.md first, we follow some practices to keep a common and standarized architecture in our changes.