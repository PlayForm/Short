import type { AstroIntegration } from "astro";
import { deepmerge } from "deepmerge-ts";
import defaultOptions, { Options } from "./options/Index.js";

export default (options: Options = {}): AstroIntegration => {
	for (const option in options) {
		if (
			Object.prototype.hasOwnProperty.call(options, option) &&
			options[option] === true
		) {
			options[option] = defaultOptions()[option];
		}
	}

	const _options = deepmerge(defaultOptions(), options);

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
