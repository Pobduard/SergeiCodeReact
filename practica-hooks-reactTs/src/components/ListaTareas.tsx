//& Los Reducer como tal Esto sirve como tal, para centralizar en 1 solo lado, toda la logica de algo
// & en este caso toda la logica de las Tareas, de ahi que sea para apps grandes ya

import { FormEvent, useReducer } from "react";
import { useForm } from "../hooks/useForm";

type tareaType = {
	id?: number;
	tarea: string;
	finalizada?: boolean;
};
type actionType =
	| {
			type: string;
			payload?: unknown;
	  }
	| {};

const initialState: tareaType[] = [
	//& Seria la Payload, la carga nueva a montar
	{
		id: new Date().getTime(),
		tarea: "Explicar Reducers",
		finalizada: false,
	},
];

const tareaReducer = (
	state: tareaType[] = initialState,
	action: actionType = {}
): tareaType[] => {
	if (!("type" in action)) {
		return state; //& Asegurar que no sea {}, o que almenos tenga type que total es requerido en el tipo
	}

	switch (action.type) {
		case "[TAREAS] Agregar Tarea":
			return [...state, action.payload] as tareaType[];
		case "[TAREAS] Finalizar Tarea":
			return state.map((tarea) => {
				if (tarea.id === action.payload) {
					console.log(tarea);
					return {
						...tarea,
						finalizada: !tarea.finalizada,
					};
				} else {
					return tarea;
				}
			});
		case "[TAREAS] Eliminar Tarea":
			return state.filter((tarea) => tarea.id !== action.payload);
		case "[TAREAS] Borrar Tareas":
			return [];

		default:
			return state;
	}

	return state;
};

export const ListaTareas = () => {
	/* 	const [tareasState, dispatch] = useReducer<
		(state: tareaType[], action: actionType) => tareaType[] //& SI no le pongo el tipado de forma especifica me da que el dispach no espera argumentos, supuestamente Ts no lo infiere bien y por ello toca especificar
	>(tareaReducer, initialState); //& El errro se debia a que el actionType dentro de la funcion tareaReducer, podia ser {} por default, si eso se elimina no da mas peos, claramente arriba no se ah tipado lo suficientemente bien
 */
	const [tareasState, dispatch] = useReducer<
		(state: tareaType[], action: actionType) => tareaType[]
	>(tareaReducer, initialState);

	const { tarea, formState, onInputChange } = useForm<tareaType>({ tarea: "" });

	const agregarTarea = (event: FormEvent) => {
		event.preventDefault();
		console.log(formState);
		if (formState.tarea == "") return;

		const tarea: tareaType = {
			id: new Date().getTime(),
			tarea: formState.tarea,
			finalizada: false,
		};
		const action: actionType = {
			type: "[TAREAS] Agregar Tarea",
			payload: tarea,
		};
		dispatch(action);
	};

	const finalizarTarea = ({ id }: tareaType) => {
		const action: actionType = {
			type: "[TAREAS] Finalizar Tarea",
			payload: id,
		};

		dispatch(action);
	};

	const eliminarTarea = ({ id }: tareaType) => {
		const action: actionType = {
			type: "[TAREAS] Eliminar Tarea",
			payload: id,
		};

		dispatch(action);
	};

	const clear = () => {
		const action: actionType = {
			type: "[TAREAS] Borrar Tareas",
			payload: "",
		};

		dispatch(action);
	};

	return (
		<>
			<form onSubmit={agregarTarea}>
				<div className="form-group">
					<label htmlFor="tarea">Ingresa Nueva Tarea</label>
					<input
						type="text"
						className="form-control"
						name="tarea"
						placeholder="Ingrese Tarea"
						value={tarea}
						onChange={onInputChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
				<button type="button" className="btn btn-danger" onClick={clear}>
					Clear
				</button>
			</form>

			<hr />
			<ul className="list-group">
				{tareasState.map((item) => {
					return (
						<li
							key={item.id}
							className={`list-group-item d-flex align-items-center justify-content-between ${
								item.finalizada &&
								"bg-success bg-opacity-75 border-success text-white text-decoration-line-through"
							}`}
						>
							<span>{item.tarea}</span>
							<div>
								<input
									type="checkbox"
									value={String(item.finalizada)}
									onChange={() => finalizarTarea(item)}
								/>
								<button
									className="btn btn-danger align-middle"
									onClick={() => {
										eliminarTarea(item);
									}}
								>
									Borrar
								</button>
							</div>
						</li>
					);
				})}
			</ul>
		</>
	);
};
