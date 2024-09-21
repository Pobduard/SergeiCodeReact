import { useState, MouseEvent } from "react";

type Props = {
	value: number;
};

export const ContadorApp = ({ value }: Props) => {
	const [contador, setContador] = useState(value);

	const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
		setContador(contador + 1);
		// console.log(event);
	};

	return (
		<>
			<h1>Contador :</h1>
			<p>{contador}</p>
			<button onClick={(e) => handleClick(e)}>Soy un Boton</button>
		</>
	);
};
