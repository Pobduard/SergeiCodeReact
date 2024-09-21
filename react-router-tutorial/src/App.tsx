import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HomeScreen } from "./routes/HomeScreen";
import { AboutScreen } from "./routes/AboutScreen";
import { ContactScreen } from "./routes/ContactScreen";
import { LoginScreen } from "./routes/LoginScreen";
import { UsuarioProvider } from "./context/UsuarioProvider";
export const App = () => {
	return (
		<UsuarioProvider>
			<Navbar />
			<Routes>
				<Route path="/" element={<HomeScreen />}></Route>
				<Route path="/login" element={<LoginScreen />}></Route>
				<Route path="/about" element={<AboutScreen />}></Route>
				<Route path="/contact" element={<ContactScreen />}></Route>
				<Route path="/*" element={<Navigate to={"/"} />}></Route>{" "}
				{/* Este es el default, por eso el /*, osea a cualquier cosa */}
			</Routes>
		</UsuarioProvider>
	);
};
