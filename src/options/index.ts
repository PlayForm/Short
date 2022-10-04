export interface Options {
	[key: string]: any;

	url?: string;

	logger?: number;
}

export default (): Options => ({
	url: "/",
	logger: 2,
});
