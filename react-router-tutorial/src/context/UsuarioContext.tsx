import { createContext } from "react";
import { usuarioType } from "../types/usuarioType";

const usuarioDefault: usuarioType = {
	nombre: "",
	tecnologia: "",
	email: "",
	redes: "",
};

type usuarioContextType = {
	usuario: usuarioType;
	setUsuario?: (data: usuarioType) => void;
	updateUsuario?: () => void;
};

//& Necesita tener un valor default, que se usa en caso de que no se de ningun provider, osease el ultimo recurso por asi decirlo
export const UsuarioContext = createContext<usuarioContextType>({
	usuario: usuarioDefault,
} as usuarioContextType);
