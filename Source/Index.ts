import type { Type } from "./Option/Index.js";

import type { AstroIntegration } from "astro";

import { deepmerge } from "deepmerge-ts";

import Default from "./Option/Index.js";

export default (Options: Type = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = Default[Option];
		}
	}

	const _options = deepmerge(Default, Options);

	_options.url = _options.url?.endsWith("/")
		? _options.url
		: `${_options.url}/`;

	return {
		name: "astro-short-urls",
		hooks: {
			"astro:build:done": async () => {},
		},
	};
};
