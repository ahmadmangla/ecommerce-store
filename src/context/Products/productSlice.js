import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:1338/api" }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      // Define a query function that accepts sortingOptions
      query: ({ sortBy }) => {
        let queryString = "/products?populate=*";

        // Add sorting parameters if provided
        if (sortBy) {
          queryString += `&sort=${sortBy}`;
        }

        return queryString;
      },

      providesTags: ["Products"],
    }),

    getProductByCategory: builder.query({
      query: (category) =>
        `/products?filters[category][$eq]=${category}&populate=*`,
      providesTags: ["Products"],
    }),
    getProductBySlug: builder.query({
      query: (slug) => `/products?filters[slug][$eq]=${slug}&populate=*`,
      providesTags: ["Products"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllProductsQuery,
  useGetProductByCategoryQuery,
  useGetProductBySlugQuery,
} = productsApi;
