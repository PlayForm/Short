export default interface Type {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	URL?: string;

	Logger?: number;
}
