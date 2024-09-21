import { Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const NavBar = () => {
	const { listaCompras } = useContext(CarritoContext);

	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<NavLink className="navbar-brand font-weight-bold font-italic" to="#">
					<h3>CarritoApp</h3>
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto">
						<li className="nav-item">
							<NavLink className="nav-link active" to="/">
								Compras
							</NavLink>
						</li>
					</ul>
					<NavLink to="/carrito">
						<Badge badgeContent={listaCompras.length} color="secondary">
							<ShoppingCart color="action" />
						</Badge>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};
