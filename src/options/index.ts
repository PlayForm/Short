export interface Options {
	[key: string]: unknown;

	url?: string;

	logger?: number;
}

export default (): Options => ({
	url: "/",

	logger: 2,
});
