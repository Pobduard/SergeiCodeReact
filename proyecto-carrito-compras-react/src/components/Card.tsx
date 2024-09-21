import { ProductCard } from "../types/Product.dto";
import "../styles/card.css";
import { useState } from "react";

export const Card = ({
	image,
	title,
	description,
	price,
	handleAgregar,
	handleQuitar,
}: ProductCard) => {
	const [added, setAdded] = useState<boolean>(false);

	const clickAgregar = () => {
		handleAgregar(); //& Vacia de parametros porque SOLO llama a otra ArrowFunction anterior que ya se encarga de la funcionalidad
		setAdded(true);
	};
	const clickQuitar = () => {
		handleQuitar(); //& Vacia de parametros porque SOLO llama a otra ArrowFunction anterior que ya se encarga de la funcionalidad
		setAdded(false);
	};

	return (
		<div className="tarjeta">
			<img src={image} alt={title} className="tarjeta-imagen" />
			<div className="tarjeta-contenido">
				<h3 className="tarjeta-titulo">{title}</h3>
				<p className="tarjeta-descripcion">{description}</p>
				<p className="tarjeta-precio">${price}</p>

				{added ? (
					<button type="button" className="boton-quitar" onClick={clickQuitar}>
						Quitar Carrito
					</button>
				) : (
					<button
						type="button"
						className="boton-agregar"
						onClick={clickAgregar}
					>
						Agregar Carrito
					</button>
				)}
			</div>
		</div>
	);
};
