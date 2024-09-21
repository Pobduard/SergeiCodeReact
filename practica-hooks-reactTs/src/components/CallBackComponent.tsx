import { useCallback, useState } from "react";
import { Incrementar } from "./Incrementar";

/*
& COMO TAL LA NECESIDAD DE ESTE HOOK
& Recae en las veces donde por alguna razon combinamos la logica y el TSX/JSX dentro de un componente, lo que quiere decir que cuando re-renderizamos el componente
& Cambiamos el origen de la funcion, lo que causa que se re-renderice lo que la recibe
& Cosa que se puede solucionar a traves de helpers, osea sacar esas funciones/logica fuera del JSX y dejarlo lo mas puro posible (pura UI/sin logica)
& Pero en caso de que no se pueda, asi se soluciona, con el useCallBack
*/

export const CallBackComponent = () => {
	const [counter, setCounter] = useState(0); //& RECORDAR que el valor tambien se encuentra dentro del setter, como su 1er parametro de hecho

	const incrementarPadre = useCallback(
		(val: number) => {
			setCounter((contadorActual) => contadorActual + val); //& Param es el mismo valor del setter + lo que deseamos sumar
			// & Se hace porque por alguna razon, si usamos el counter directamente, solo se hacw 1 vez y ya
		},
		[] //& Hacen que cuando cambien esos valores, se VUELVA a guardar/Memorizar la funcion en si
	);

	return (
		<>
			<h1>Contador: {counter}</h1>
			<Incrementar incrementar={incrementarPadre} />
		</>
	);
};
