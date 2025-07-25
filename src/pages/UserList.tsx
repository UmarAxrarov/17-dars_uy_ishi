import { NavLink } from "react-router";
import { useDeleteUserMutation, useGetUsersQuery } from "../services/api/users";

export default function UserList() {
  const { data: users, isLoading } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Users</h1>
      <NavLink to="/create" className="text-blue-500 underline">
        Create New User
      </NavLink>
      <ul className="mt-4 space-y-2">
        {users?.map((user) => (
          <li key={user.id} className="border p-2">
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">{user.email}</div>
            <NavLink to={`/users/${user.id}`} className="text-blue-500 mr-2">
              Detail
            </NavLink>
            <NavLink to={`/users/${user.id}/edit`} className="text-yellow-500 mr-2">
              Edit
            </NavLink>
            <button
              className="text-red-500"
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
