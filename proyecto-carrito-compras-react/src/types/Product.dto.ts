import { Product } from "./Product.model";

export type ProductCard = Pick<
	Product,
	"image" | "title" | "description" | "price"
> & {
	handleAgregar: () => void;
	handleQuitar: () => void /* Vacia de parametros porque SOLO llama a otra ArrowFunction anterior que ya se encarga de la funcionalidad */;
}; //& Opuesto es "Omit"

export type ProductContext = {
	productos: Product[];
	setProductos?: (producto: Product[]) => void;
};

export type cartActions = {
	type:
		| "[CARRITO] Agregar Compra"
		| "[CARRITO] Aumentar Cantidad Compra"
		| "[CARRITO] Disminuir Cantidad Compra"
		| "[CARRITO] Eliminar Compra";
	payload: number | Product;
};

export type CartContext = {
	listaCompras: Product[];
	agregarCompra?: (compra: Product) => void;
	aumentarCantidad?: (id: number) => void;
	disminuirCantidad?: (id: number) => void;
	eliminarCompra?: (id: number) => void;
};
