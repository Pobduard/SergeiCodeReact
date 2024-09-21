type fetchType<T = unknown> = {
	data: T | null;
	isLoading: boolean;
	errors: Error | unkown | null;
};
