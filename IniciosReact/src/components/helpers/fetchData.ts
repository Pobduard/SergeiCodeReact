import { Data } from "../../UserList";

export const fetchData = async (endPoint: string) => {
	try {
		const resp: Response = await fetch(
			//+ El Await hace que se salga de la promesa, tons retorna una respuesta
			`https://jsonplaceholder.typicode.com/${endPoint}`
		);
		const datas: Data[] = await resp.json(); //+ Salimos del envoltorio de la respuesta con el await
		console.log(datas);

		const isLoading = false;
		return { datas, isLoading };
	} catch (error) {
		console.log(error);
	}
};
