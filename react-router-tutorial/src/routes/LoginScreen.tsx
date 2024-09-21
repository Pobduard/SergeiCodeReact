import { FormEvent, useContext } from "react";
import { useForm } from "../hooks/useForm";
import { usuarioType } from "../types/usuarioType";
import { UsuarioContext } from "../context/UsuarioContext";

export const LoginScreen = () => {
	const initialForm: usuarioType = {
		nombre: "",
		tecnologia: "",
		email: "",
		redes: "",
	};

	const { formState, nombre, tecnologia, email, redes, onInputChange } =
		useForm(initialForm);

	const { setUsuario } = useContext(UsuarioContext);

	const submitForm = (event: FormEvent) => {
		event.preventDefault();
		setUsuario!(formState);
	};

	return (
		<>
			<form className="container" onSubmit={submitForm}>
				<div className="mb-3">
					<label htmlFor="nombre" className="form-label">
						Nombre
					</label>
					<input
						type="text"
						className="form-control"
						name="nombre"
						value={nombre}
						onChange={onInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="tecnologia" className="form-label">
						Tecnologia
					</label>
					<input
						type="text"
						className="form-control"
						name="tecnologia"
						value={tecnologia}
						onChange={onInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="email" className="form-label">
						Email
					</label>
					<input
						type="email"
						className="form-control"
						name="email"
						value={email}
						onChange={onInputChange}
					/>
				</div>
				<div className="mb-3">
					<label htmlFor="redes" className="form-label">
						Redes
					</label>
					<input
						type="text"
						className="form-control"
						name="redes"
						value={redes}
						onChange={onInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Registrar Usuario
				</button>
			</form>
		</>
	);
};
