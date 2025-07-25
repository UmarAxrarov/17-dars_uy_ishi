// src/pages/UserDetail.tsx
import { useParams } from "react-router";
import { useGetUserQuery } from "../services/api/users";

export default function UserDetail() {
  const { id } = useParams<{ id: string }>();
  const { data: user, isLoading } = useGetUserQuery(id!);

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>User not found</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <p>Company: {user.company.name}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}
