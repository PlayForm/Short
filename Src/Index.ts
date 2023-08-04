import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";
import defaultOptions, { Options } from "./options/Index.js";

export default (Options: Options = {}): AstroIntegration => {
	for (const Option in Options) {
		if (
			Object.prototype.hasOwnProperty.call(Options, Option) &&
			Options[Option] === true
		) {
			Options[Option] = defaultOptions()[Option];
		}
	}

	const _options = deepmerge(defaultOptions(), Options);

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
