import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { Product } from "../types/Product.model";

export const CarritoScreen = () => {
	const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
		useContext(CarritoContext);

	const calcularTotal = () => {
		return listaCompras.reduce<number>(
			(total: number, item: Product) => total + (item.price! + item.count!), //& Callback
			0 //& initialValue
		);
	};

	const handleImpresion = () => {
		print(); //& Impresion PDF de la Pantalla Entera
	};

	return (
		<>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Nombre</th>
						<th scope="col">Precio</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{listaCompras.map((item) => (
						<tr key={item.id}>
							<th scope="row">{item.title}</th>
							<td>${item.price}</td>
							<td>
								<button
									className="btn btn-outline-primary"
									onClick={() => disminuirCantidad!(item.id)}
								>
									-
								</button>
								<button className="btn btn-primary">{item.count!}</button>
								<button
									className="btn btn-outline-primary"
									onClick={() => aumentarCantidad!(item.id)}
								>
									+
								</button>
							</td>
							<td>
								<button
									className="btn btn-danger"
									onClick={() => eliminarCompra!(item.id)}
								>
									Eliminar
								</button>
							</td>
						</tr>
					))}

					<th>
						<b>TOTAL: </b> {/* Negrita */}
					</th>
					<td></td>
					<td></td>
					<td>${calcularTotal()}</td>
				</tbody>
			</table>

			{listaCompras.length >= 1 && ( //& Solo se muestra si esto
				<div className="d-grid gap-2">
					<button
						className="btn btn-primary"
						onClick={handleImpresion}
						disabled={listaCompras.length < 1}
					>
						COMPRAR
					</button>
				</div>
			)}
		</>
	);
};
