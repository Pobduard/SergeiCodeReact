import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { ComprasScreen } from "./pages/ComprasScreen";
import { CarritoScreen } from "./pages/CarritoScreen";
import { ProductosProvider } from "./context/ProductosContext";
import { CarritoProvider } from "./context/CarritoContext";

export const CarritoApp = () => {
	return (
		<ProductosProvider>
			<CarritoProvider>
				<NavBar />
				<div className="container">
					<Routes>
						<Route path="/" element={<ComprasScreen />} />
						<Route path="/carrito" element={<CarritoScreen />} />
						<Route path="/*" element={<Navigate to="/" />} />{" "}
						{/* El Default, pa que lo lleve a casa*/}
					</Routes>
				</div>
			</CarritoProvider>
		</ProductosProvider>
	);
};
