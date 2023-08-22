import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (sort) => `/products${sort ? `?sort=${sort}&` : `?`}populate=*`,
    }),
    sortProducts: builder.query({
      query: () => `/products?populate=*`,
    }),
    getProductByCategory: builder.query({
      query: (category) =>
        `/products?filters[category][$eq]=${category}&populate=*`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetProductByCategoryQuery } =
  productsApi;
