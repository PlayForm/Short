export interface Options {
	// rome-ignore lint/suspicious/noExplicitAny:
	[key: string]: any;

	url?: string;

	logger?: number;
}

export default (): Options => ({
	url: "/",
	// rome-ignore lint/nursery/noPrecisionLoss:
	logger: 2,
});
