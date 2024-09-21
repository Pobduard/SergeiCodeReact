import { useContext } from "react";
import { Card } from "../components/Card";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";
import { Product } from "../types/Product.model";

export const ComprasScreen = () => {
	const { productos } = useContext(ProductosContext);

	const { agregarCompra, eliminarCompra } = useContext(CarritoContext);

	const handleAgregar = (compra: Product) => {
		agregarCompra!(compra);
	};
	const handleQuitar = (id: number) => {
		eliminarCompra!(id);
	};

	return (
		<>
			<h1>Compras: </h1>
			<hr />
			{productos.map(
				(producto): JSX.Element => (
					<Card
						key={producto.id}
						image={producto.image}
						title={producto.title}
						description={producto.description}
						price={producto.price}
						//& Ejecutan otras funciones, para las cuales los datos provienen de aqui, tons en vez de enviarlos de comp a comp, pasamos es una ArrowFunction vacias que van a llamar a esta de aqui
						handleAgregar={() => handleAgregar(producto)}
						handleQuitar={() => handleQuitar(producto.id)}
					/>
				)
			)}
		</>
	);
};
