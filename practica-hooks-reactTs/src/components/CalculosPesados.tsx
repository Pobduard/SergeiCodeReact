import { useMemo, useState } from "react";

export const CalculosPesados = () => {
	const [listaNums, setListaNums] = useState([2, 3, 4, 5, 6, 7, 8, 9]);
	const [show, setShow] = useState(true);

	const getCalculo = (listaNums: number[]) =>
		useMemo(() => {
			//& Lo que memoriza
			console.log("Calculando ...");
			return listaNums.reduce((a, b) => a * b);
		}, [listaNums]); //& Lo que hace que se vuelva a llamar lo memorizado

	const agregarNumero = () => {
		setListaNums([...listaNums, listaNums[listaNums.length - 1] + 1]);
		console.log(listaNums);
	};

	return (
		<>
			<h2>Calculo: </h2>
			<p>{getCalculo(listaNums)}</p>

			<button className="btn btn-primary" onClick={() => setShow(!show)}>
				{show ? "Show" : "Hide"}
			</button>
			<button className="btn btn-primary" onClick={() => agregarNumero()}>
				Agregar Numero
			</button>
		</>
	);
};
