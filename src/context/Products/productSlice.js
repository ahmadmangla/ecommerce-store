import { createSelector } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // Define a query function that accepts sortingOptions
      query: () => "/products",
      transformResponse: (response, queryApi, options) => {
        if (!response) return;
        return response.products;
      },
    }),

    getProductByCategory: builder.query({
      query: (category) => ({
        url: `/products/category/${category}`,
      }),
      transformResponse: (response) => {
        return response.products;
      },
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/products/${slug}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery, useGetProductByCategoryQuery, useGetProductBySlugQuery } = productsApi;
