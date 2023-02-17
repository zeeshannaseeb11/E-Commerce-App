import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const myApi = createApi({
  reducerPath: "myApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "?limit=8",
    }),
    getProductsByCategory: builder.query({
      query: (category) => `/category/${category}`,
    }),
    getSingleProduct: builder.query({
      query: (id) => `/${id}`,
    }),
    addNewProduct: builder.mutation({
      query: (payload) => ({
        url: "/add",
        method: "POST",
        body: payload,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetSingleProductQuery,
  useAddNewProductMutation,
} = myApi;
