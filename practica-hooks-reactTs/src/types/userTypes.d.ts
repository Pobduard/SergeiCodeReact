type Company = {
	name: string;
	catchPhrase: string;
	bs: string;
};

type Geo = {
	lat: string;
	lng: string;
};

type Address = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
	geo: Geo;
};

export type Users = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: Address;
	phone: string;
	website: string;
	company: Company;
};

export type Comments = {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
};

export type Data = Users | Comments;
