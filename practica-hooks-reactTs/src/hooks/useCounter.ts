import { useState } from "react";

export const useCounter = (initialValue: number = 0) => {
	//& el = le da un valor default
	const [counter, setCounter] = useState(initialValue);

	const increment = (valor: number = 1) => {
		setCounter(counter + valor);
	};

	const decrement = (valor: number = 1, negativo: boolean = true) => {
		if (!negativo && counter - valor < 0) {
			//& Si la resta es menor
			setCounter(0);
			return;
		}

		setCounter(counter - valor);
	};

	const reset = () => {
		setCounter(0);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
	};
};
