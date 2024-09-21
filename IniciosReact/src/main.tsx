import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContadorApp } from "./ContadorApp";
import "./styles.css";
import ListadoApp from "./ListadoApp";
import { UsersApp } from "./UsersApp";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		{/* <ContadorApp value={0} /> */}
		{/* <ListadoApp /> */}
		<UsersApp />
	</StrictMode>
);
