var e = (t = {}) => {
	for (const o in t)
		Object.prototype.hasOwnProperty.call(t, o) &&
			t[o] === !0 &&
			(t[o] = r[o]);
	return {
		name: "astro-short-urls",
		hooks: { "astro:build:done": async () => {} },
	};
};
const { default: r } = await import("../Variable/Option.js"),
	{ default: a } = await import(
		"typescript-esbuild/Target/Function/Merge.js"
	);
export { r as Default, a as Merge, e as default };
