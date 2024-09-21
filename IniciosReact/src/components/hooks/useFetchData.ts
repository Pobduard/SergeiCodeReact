import { useEffect, useState } from "react";
import { Data } from "../../UserList";
import { fetchData } from "../helpers/fetchData";

export const useFetchData = (endPoint: string) => {
	const [data, setData] = useState<Data[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const getData = async (endPoint: string) => {
		//& Solo para mostrar la forma de poder hacerlo con Async Await
		const resp = await fetchData(endPoint);
		if (resp) {
			//& Para que Ts no se queje
			const { datas, isLoading } = resp;
			setData(datas);
			setIsLoading(isLoading);
		}
	};

	useEffect(() => {
		//+ Si se quisiera usar el Async, usariamos el getData() aqui en vez del fetchData
		/*
		getData(endPoint);
		*/

		//& UseEffect NO permite trabajar con Async dentro de si, si por fuera, no por dentro, tons toca trabajarlas en forma de promesa, o como se muestra arriba
		fetchData(endPoint).then((resp) => {
			//& Es una promesa, tons lo trabajamos como tal con el .then
			if (resp) {
				//& Le asegura a Ts que solo lo haga si hizo/retorno la promesa correctamete
				setData(resp.datas);
				setIsLoading(resp.isLoading);
			}
		});
	}, [endPoint]);

	return { data, isLoading };
};
