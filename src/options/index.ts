export interface Options {
	[key: string]: any;

	url?: string;

	logger?: number;
}

export default {
	url: "/",
	logger: 2,
} satisfies Options;
