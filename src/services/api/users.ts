import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users",
            providesTags: ["Users"],
        }),
        getUser: builder.query<User, string>({
            query: (id) => `/users/${id}`,
        }),
        createUser: builder.mutation<User, Partial<User>>({
            query: (newUser) => ({
                url: "/users",
                method: "POST",
                body: newUser,
            }),
            invalidatesTags: ["Users"],
        }),
        updateUser: builder.mutation<User, Partial<User> & { id: number }>({
            query: ({ id, ...patch }) => ({
                url: `/users/${id}`,
                method: "PUT",
                body: patch,
            }),
            invalidatesTags: ["Users"],
        }),
        deleteUser: builder.mutation<void, number>({
            query: (id) => ({
                url: `/users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Users"],
        }),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useCreateUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation,
} = userApi;