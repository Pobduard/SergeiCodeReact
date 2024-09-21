import {
	ChangeEvent,
	Dispatch,
	FormEvent,
	SetStateAction,
	useState,
} from "react";
import { ItemProps } from "../ListadoApp";

// type Props = {
// 	newTarea: Dispatch<SetStateAction<ItemProps[]>>;
// };

type Props2 = {
	newTarea: (val: string) => void;
};

const AgregarTarea = ({ newTarea }: Props2) => {
	const [inputValue, setInputValue] = useState("");

	const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value);
	};

	// const onSubmit = (event: FormEvent<HTMLFormElement>) => {
	// 	const nuevo: ItemProps = {
	// 		nombre: inputValue,
	// 		visto: false,
	// 	};
	// 	event.preventDefault();
	// 	newTarea((tareas: ItemProps[]) => [...tareas, nuevo]); //& Ya nos trae los valores anteriores en la ArrowF, las copiamos, añadimos extra, y listo
	// };

	const onSubmit2 = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		newTarea(inputValue);
	};

	return (
		<form onSubmit={onSubmit2}>
			<input
				type="text"
				placeholder="Agregar Tarea"
				value={inputValue}
				onChange={onInputChange}
			/>
		</form>
	);
};

export default AgregarTarea;
