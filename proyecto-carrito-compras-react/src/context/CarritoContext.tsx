import { createContext, useReducer } from "react";
import { cartActions, CartContext } from "../types/Product.dto";
import { Product } from "../types/Product.model";

const initialState: Product[] = [];

export const CarritoContext = createContext<CartContext>({
	listaCompras: initialState,
});

export const CarritoProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	const comprasReducer: (state: Product[], action: cartActions) => Product[] = (
		//& Ponerlo de Forma explicita directamente en la const pa evitar peos del Reducer despues
		state = initialState,
		action?: cartActions
	) => {
		switch (action?.type) {
			case "[CARRITO] Agregar Compra":
				return [...state, action?.payload as Product];
			case "[CARRITO] Aumentar Cantidad Compra":
				return state.map((item) => {
					const cant = item.count! + 1; //& Podemos asegurar que siempre tiene count para estar en este punto
					if (item.id === action.payload) return { ...item, count: cant };
					return { ...item }; //& No se modifica
				});
			case "[CARRITO] Disminuir Cantidad Compra":
				return state.map((item) => {
					const cant = item.count! - 1; //& Podemos asegurar que siempre tiene count para estar en este punto
					if (item.id === action.payload && item.count! >= 1)
						return { ...item, count: cant };
					return { ...item }; //& No se modifica
				});
				break;
			case "[CARRITO] Eliminar Compra":
				return state.filter((compra) => compra.id !== action?.payload);
			default:
				console.log("Compras Reducer, no matching action found");
				return state;
		}
	};

	const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

	const agregarCompra = (compra: Product) => {
		compra.count = 1; //& Apenas se agrega (1 sola vez) ya inicia en 1
		const action: cartActions = {
			type: "[CARRITO] Agregar Compra",
			payload: compra,
		};
		dispatch(action);
	};
	const aumentarCantidad = (id: number) => {
		const action: cartActions = {
			type: "[CARRITO] Aumentar Cantidad Compra",
			payload: id,
		};
		dispatch(action);
	};
	const disminuirCantidad = (id: number) => {
		const action: cartActions = {
			type: "[CARRITO] Disminuir Cantidad Compra",
			payload: id,
		};
		dispatch(action);
	};
	const eliminarCompra = (id: number) => {
		const action: cartActions = {
			type: "[CARRITO] Eliminar Compra",
			payload: id,
		};
		dispatch(action);
	};

	return (
		<CarritoContext.Provider
			value={{
				listaCompras,
				agregarCompra,
				aumentarCantidad,
				disminuirCantidad,
				eliminarCompra,
			}}
		>
			{children}
		</CarritoContext.Provider>
	);
};
