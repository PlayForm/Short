import type Option from "./Interface/Option.js";

import type { AstroIntegration } from "astro";

import { deepmerge } from "deepmerge-ts";

export const { default: Default } = await import("./Variable/Option.js");

export default (_Option: Option = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option];
		}
	}

	const _options = deepmerge(Default, _Option);

	_options.URL = _options.URL?.endsWith("/")
		? _options.URL
		: `${_options.URL}/`;

	return {
		name: "astro-short-urls",
		hooks: {
			"astro:build:done": async () => {},
		},
	};
};
