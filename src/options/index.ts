export interface Options {
	// rome-ignore lint:
	[key: string]: any;

	url?: string;

	logger?: number;
}

export default (): Options => ({
	url: "/",
	logger: 2,
});
