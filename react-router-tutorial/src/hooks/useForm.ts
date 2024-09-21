import { ChangeEvent, useState } from "react";

type inputTarget = EventTarget &
	Element & {
		name: string;
		value: string;
	}; //& Para poder aceptar los valores nuevos que NO existen en EventTarget o en Element

type FormType<T = {}> = T;

/** 
- Los elementos HTMl (inputs) necesitan tener un `value` y un `name` para identificar el correcto
- retorna:  {...formState<T>, formState<T>, onInputChange}
*/
export const useForm = <T>(initialForm: FormType<T>) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = ({ target }: ChangeEvent) => {
		const { name, value } = target as inputTarget; //& Cast para que acepte los nuevos agrs
		setFormState({
			...formState /* Se copia todos los valores anteriores */,
			[name]: value /* Se modifica el valor necesario */,
			/*
			& Esta Syntaxis nos permite acceder la llave corresponidente en "name" para cambiar su valor especifico
			*/
		});
	};

	return {
		...formState,
		formState,
		onInputChange,
	};
};
