import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to={"/"}>
				Aplicacion de Enrutamiento
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarText">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink className="nav-link" to={"/"}>
							Home
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={"/about"}>
							About
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={"/contact"}>
							Contact
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink className="nav-link" to={"/login"}>
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
};
