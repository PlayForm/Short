export interface Type {
	[key: string]: any;

	url?: string;

	logger?: number;
}

export default {
	url: "/",
	Logger: 2,
} satisfies Type;
