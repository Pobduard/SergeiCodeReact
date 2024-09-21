import { useState } from "react";
import { usuarioType } from "../types/usuarioType";
import { UsuarioContext } from "./UsuarioContext";

const usuarioValue: usuarioType = {
	nombre: "Pob",
	tecnologia: "React",
	email: "jeduardoa2003@gmail.com",
	redes: "@Pob",
};

export const UsuarioProvider = ({ children }: { children: JSX.Element[] }) => {
	/* Array porque pueden ser multiples elementos en el children */

	const [usuario, setUsuario] = useState<usuarioType>(null);

	return (
		<UsuarioContext.Provider value={{ usuario, setUsuario }}>
			{/* el Value es los valores que se pasan */}
			{children}
		</UsuarioContext.Provider>
	);
};
