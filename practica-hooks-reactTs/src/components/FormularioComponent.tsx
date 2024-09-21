import { FormEvent, useEffect, useRef } from "react";
import { useForm } from "../hooks/useForm";

type initialFormType = {
	userName: string;
	email: string;
	password: string;
};

export const FormularioComponent = () => {
	const focusRef = useRef<HTMLInputElement>(null); //& SI o SI hay que pasarne null 1ro si ya no tenemos el elemento que vamos a referenciar

	const initialForm = {
		userName: "",
		email: "",
		password: "",
	};

	const { formState, onInputChange } = useForm<initialFormType>(initialForm);

	const { userName, email, password } = formState;

	const onSubmit = (event: FormEvent) => {
		event.preventDefault();
		console.log(formState);
	};

	useEffect(() => {
		focusRef.current?.focus();
	}, []);

	return (
		<form onSubmit={onSubmit}>
			<div className="mb-3">
				<label
					htmlFor="userName" /* en JSX se usa es "htmlFor" en vez de solo "for" */
					className="form-label"
				>
					User name
				</label>
				<input
					type="text"
					className="form-control"
					name="userName"
					placeholder="Enter Your Username"
					value={userName}
					onChange={onInputChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="email" className="form-label">
					Email address
				</label>
				<input
					ref={focusRef}
					type="email"
					className="form-control"
					name="email"
					placeholder="Enter Your Email"
					value={email}
					onChange={onInputChange}
				/>
			</div>
			<div className="mb-3">
				<label htmlFor="password" className="form-label">
					Password
				</label>
				<input
					type="password"
					className="form-control"
					name="password"
					placeholder="Enter Your Password"
					value={password}
					onChange={onInputChange}
				/>
			</div>
			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	);
};
