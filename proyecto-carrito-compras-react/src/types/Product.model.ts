export type Product = {
	id: number;
	title?: string;
	price?: number;
	description?: string;
	category?: string;
	image?: string;
	count?: number;
	rating?: Rating;
};

type Rating = {
	rate: number;
	count: number;
};
