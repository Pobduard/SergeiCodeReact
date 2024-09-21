import { useState } from "react";
import { usuarioType } from "../types/usuarioType";
import { UsuarioContext } from "./UsuarioContext";

export const UsuarioProvider = ({
	children,
}: {
	children: JSX.Element | JSX.Element[];
}) => {
	/* Array porque pueden ser multiples elementos en el children */

	const [usuario, setUsuario] = useState<usuarioType>(null);

	return (
		<UsuarioContext.Provider value={{ usuario, setUsuario }}>
			{/* el Value es los valores que se pasan */}
			{children}
		</UsuarioContext.Provider>
	);
};
