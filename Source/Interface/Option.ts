/**
 * @module Option
 *
 */
export default interface Type {
	// biome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	Logger?: number;
}
