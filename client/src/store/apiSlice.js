import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = "https://cute-pink-tick-shoe.cyclic.app";
// const baseURI = "http://localhost:8080";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    // get categories
    getCategories: builder.query({
      // get: 'http://localhost:8080/api/categories'
      query: () => "/api/v1/categories",
      providesTags: ["categories"],
    }),

    // get labels
    getLabels: builder.query({
      // get: 'http://localhost:8080/api/labels'
      query: () => "/api/v1/labels",
      providesTags: ["transaction"],
    }),

    // add new Transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        // post: 'http://localhost:8080/api/transaction'
        url: "/api/v1/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),

    // delete a transaction
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        // delete: 'http://localhost:8080/api/transaction'
        url: "/api/v1/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
