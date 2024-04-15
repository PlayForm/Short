# 🔗 [Short.]

This **[Astro integration][astro-integration]** will automatically shorten your
external URLs, using an integrated URL shortener and database.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `@playform/short`, run the following from your project directory and
follow the prompts:

Using NPM:

```sh
npx astro add @playform/short
```

Using Yarn:

```sh
yarn astro add @playform/short
```

Using PNPM:

```sh
pnpx astro add @playform/short
```

### Install dependencies manually

First, install the `@playform/short` integration like so:

```sh
npm install -D -E @playform/short
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import short from "@playform/short";

export default (): AstroIntegration => ({
	integrations: [short()],
});
```

## Getting started

The utility will now automatically shorten all your external URLs.

[Short.]: https://npmjs.org/@playform/short
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.
