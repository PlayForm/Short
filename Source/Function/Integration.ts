import type Interface from "../Interface/Integration.js";

/**
 * @module Integration
 *
 */
export default ((...[_Option = {}]: Parameters<Interface>) => {
	Object.entries(_Option).forEach(([Key, Value]) =>
		Object.defineProperty(_Option, Key, {
			value:
				Value === true
					? Default[Key as keyof typeof Default]
					: _Option[Key as keyof typeof _Option],
		}),
	);

	return {
		name: "@playform/short",
		hooks: {
			"astro:build:done": async () => {},
		},
	};
}) satisfies Interface as Interface;

export const { default: Default } = await import("@Variable/Option.js");

export const { default: Merge } = await import(
	"@playform/build/Target/Function/Merge.js"
);
