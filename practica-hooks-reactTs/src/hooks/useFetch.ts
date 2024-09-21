import { useEffect, useState } from "react";

export const useFetch = <T = unknown>(url: string) => {
	const [state, setState] = useState<fetchType<T>>({
		data: null,
		isLoading: true,
		errors: null,
	});

	const getFetch = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			setState({
				data,
				isLoading: false,
				errors: null,
			});
		} catch (error) {
			setState({
				data: null,
				isLoading: false,
				errors: error,
			});
		}
	};

	useEffect(() => {
		if (!url) return;
		getFetch();
	}, [url]);

	return {
		...state,
	};
};
