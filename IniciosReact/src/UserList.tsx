import { useFetchData } from "./components/hooks/useFetchData";

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

type Prop = { endPoint: string };

export const UserList = ({ endPoint }: Prop) => {
	const { data, isLoading } = useFetchData(endPoint);

	const renderData = () => {
		/*
		let node: JSX.Element | JSX.Element[];
		if (isLoading) {
			node = <p>Cargando ...</p>;
		} else {
			if (endPoint == "users") {
				const newData = data as Users[];
				node = newData.map((item: Users): JSX.Element => <li key={item.id}>{item.name}</li>);
			} else {
				const newData = data as Comments[];
				node = newData.map((item: Comments) => <li key={item.id}>{item.body}</li>);
			}
		} 
		*/

		let node = isLoading ? (
			<p>Cargando ...</p>
		) : endPoint == "users" ? ( //& El Casting es con el objetivo de que Ts sepa bien que datos tiene o no el item en especifico
			(data as Users[]).map((item: Users) => <li key={item.id}>{item.name}</li>)
		) : (
			(data as Comments[]).map((item: Comments) => (
				<li key={item.id}>{item.body}</li>
			))
		);

		return node;
	};

	return (
		<>
			<ul>
				{
					renderData() //& Es lo mismo de abajo, que es un ternario tras otro
					//& El truco ara hacerlo en Ts es usar bien los Casting de tipos, pendiente del "(valor as Type)" para que funcione correctamente
					/* 
					isLoading 
						? <p>Cargando ...</p>
						: endPoint == "users" 
							? (data as Users[]).map((item: Users) => ( <li key={item.id}>{item.name}</li> ))
							: (data as Comments[]).map((item: Comments) => ( <li key={item.id}>{item.body}</li>))
					*/
				}
			</ul>
		</>
	);
};
