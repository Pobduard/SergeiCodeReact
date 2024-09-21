import { useState } from "react";
import AgregarTarea from "./components/AgregarTarea";

export type ItemProps = {
	id: number;
	nombre: string;
	visto: boolean;
};

const Item = ({ id, nombre, visto }: ItemProps): JSX.Element => {
	return (
		<>
			<li className={visto ? "verde" : "rojo"}>
				{nombre} {visto ? "✅" : "⛔" /*Ternario, uno o el otro*/}
				{/* visto && "✅" /* Condicinal, Si, entonces*/}
			</li>
		</>
	);
};

export default function ListadoApp(): JSX.Element {
	let listadoSecciones: ItemProps[] = [
		{ id: 1, nombre: "Instalaciones Necesarias", visto: true },
		{ id: 2, nombre: "Uso de Vite", visto: true },
		{ id: 3, nombre: "Componentes", visto: true },
		{ id: 4, nombre: "Variables en JSX", visto: true },
		{ id: 5, nombre: "Props", visto: true },
		{ id: 6, nombre: "Eventos", visto: true },
		{ id: 7, nombre: "useState", visto: true },
		{ id: 8, nombre: "Redux", visto: false },
		{ id: 9, nombre: "customHooks", visto: false },
	];

	const [arreglo, setArreglo] = useState(listadoSecciones);

	const onAddTask = (val: string) => {
		if (val.trim().length < 1) return; // Si esta vacio

		const envio: ItemProps = {
			id: arreglo.length + 1, // Retorna el tamaño total, que siempre sera +1, pero como NO empezamos en 0 pues eso
			nombre: val,
			visto: false,
		};
		setArreglo([...arreglo, envio]);
	};

	return (
		<>
			<h1>Listado de Temas del Curso</h1>
			<AgregarTarea newTarea={onAddTask} />
			<ol>
				{arreglo.map(
					(item: ItemProps): JSX.Element => (
						<Item
							id={item.id}
							nombre={item.nombre}
							visto={item.visto}
						/> /* La Key es necesaria porque tienen que ser unicos los elementos o se quejan, usualmente seria una Id o algo */
					)
				)}
			</ol>
		</>
	);
}
