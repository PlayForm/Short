# [astro-short-urls] 🔗

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

To install `astro-short-urls`, run the following from your project directory and
follow the prompts:

#### Using NPM
```sh
npx astro add astro-short-urls
```

#### Using Yarn
```sh
yarn astro add astro-short-urls
```

#### Using PNPM
```sh
pnpx astro add astro-short-urls
```

### Install dependencies manually

First, install the `astro-short-urls` integration like so:

```
npm install -D -E astro-short-urls
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import short from "astro-short-urls";

export default (): AstroIntegration => ({
	integrations: [short()],
});
```

## Getting started

The utility will now automatically shorten all your external URLs.

[astro-short-urls]: https://npmjs.org/astro-short-urls
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.

[![Lightrix logo](https://raw.githubusercontent.com/Lightrix/npm/main/.github/img/favicon.png "Built with Lightrix/npm")](https://github.com/Lightrix/npm)
