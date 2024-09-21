import { useFetch } from "../hooks/useFetch";
import { Users } from "../types/userTypes";
export const UsuariosComponent = () => {
	const { data, isLoading, errors } = useFetch<Users[]>(
		"https://jsonplaceholder.typicode.com/users"
	);

	return (
		<>
			<h1>Lista de Usuarios: </h1>
			{isLoading ? (
				<h4>Cargando ....</h4>
			) : errors ? (
				<h1>Han ocurrido un error: {errors}</h1>
			) : (
				<table className="table">
					<thead>
						<tr>
							<th scope="col">Id</th>
							<th scope="col">Name</th>
							<th scope="col">Email</th>
							<th scope="col">Website</th>
						</tr>
					</thead>
					<tbody>
						{data &&
							data.map(
								(
									user: Users
								): JSX.Element => ( //& SI no son () es necesario usar el return para el TSX
									<tr key={user.id}>
										<th scope="row">{user.id}</th>
										<td>{user.name}</td>
										<td>{user.email}</td>
										<td>{user.website}</td>
									</tr>
								)
							)}
					</tbody>
				</table>
			)}
		</>
	);
};
