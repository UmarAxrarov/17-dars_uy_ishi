// src/pages/UserEdit.tsx
import { useParams, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useGetUserQuery, useUpdateUserMutation } from "../services/api/users";

export default function UserEdit() {
  const { id } = useParams<{ id: string }>();
  const { data: user } = useGetUserQuery(id!);
  const [updateUser] = useUpdateUserMutation();
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) reset(user);
  }, [user]);

  const onSubmit = async (data: any) => {
    await updateUser({ ...data, id: Number(id) }).unwrap();
    navigate("/");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-2">
      <input {...register("name")} className="border p-1 w-full" />
      <input {...register("email")} className="border p-1 w-full" />
      <input {...register("phone")} className="border p-1 w-full" />
      <input {...register("website")} className="border p-1 w-full" />
      <button type="submit" className="bg-green-500 text-white px-4 py-1">
        Update
      </button>
    </form>
  );
}
