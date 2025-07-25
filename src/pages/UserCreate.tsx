import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useCreateUserMutation } from "../services/api/users";

export default function UserCreate() {
  const { register, handleSubmit } = useForm();
  const [createUser] = useCreateUserMutation();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    const user = {
      name: data.name,
      username: data.username,
      email: data.email,
      phone: data.phone,
      website: data.website,
      address: {
        street: data.street,
        suite: data.suite,
        city: data.city,
        zipcode: data.zipcode,
        geo: {
          lat: data.lat,
          lng: data.lng
        }
      },
      company: {
        name: data.companyName,
        catchPhrase: data.catchPhrase,
        bs: data.bs
      }
    };

    await createUser(user).unwrap();
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-2">
      <input placeholder="Name" {...register("name")} className="border p-1 w-full" />
      <input placeholder="Username" {...register("username")} className="border p-1 w-full" />
      <input placeholder="Email" {...register("email")} className="border p-1 w-full" />
      <input placeholder="Phone" {...register("phone")} className="border p-1 w-full" />
      <input placeholder="Website" {...register("website")} className="border p-1 w-full" />

      <hr />
      <h2 className="font-semibold">Address</h2>
      <input placeholder="Street" {...register("street")} className="border p-1 w-full" />
      <input placeholder="Suite" {...register("suite")} className="border p-1 w-full" />
      <input placeholder="City" {...register("city")} className="border p-1 w-full" />
      <input placeholder="Zipcode" {...register("zipcode")} className="border p-1 w-full" />
      <input placeholder="Latitude" {...register("lat")} className="border p-1 w-full" />
      <input placeholder="Longitude" {...register("lng")} className="border p-1 w-full" />

      <hr />
      <h2 className="font-semibold">Company</h2>
      <input placeholder="Company Name" {...register("companyName")} className="border p-1 w-full" />
      <input placeholder="Catch Phrase" {...register("catchPhrase")} className="border p-1 w-full" />
      <input placeholder="BS" {...register("bs")} className="border p-1 w-full" />

      <button type="submit" className="bg-blue-500 text-white px-4 py-1">
        Create
      </button>
    </form>
  );
}
