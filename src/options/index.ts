export interface Options {
	[key: string]: unknown;

	url?: string;

	logger?: number;
}

export default (): Options => ({
	url: "/",
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 2,
});
