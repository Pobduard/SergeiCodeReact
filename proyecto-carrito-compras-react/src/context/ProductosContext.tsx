import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { Product } from "../types/Product.model";
import { ProductContext } from "../types/Product.dto";

export const ProductosContext = createContext<ProductContext>({
	productos: [], //& Valor Default, como son un conjunto/grupo, sirve un array vacio
});

export const ProductosProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	const [productos, setProductos] = useState<Product[]>([]);

	const fetchProductos = async () => {
		const { data } = await axios.get<Product[]>(
			"https://fakestoreapi.com/products"
		);
		console.log(data);

		setProductos(data);
	};

	useEffect(() => {
		fetchProductos();
	}, []);

	return (
		<ProductosContext.Provider value={{ productos, setProductos }}>
			{children}
		</ProductosContext.Provider>
	);
};
