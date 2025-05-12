import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workOrderApi = createApi({
  reducerPath: "workOrderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001/api/" }),
  endpoints: (builder) => ({
    getWorkOrders: builder.query({
      query: () => "get_work_orders",
    }),
  }),
});

export const { useGetWorkOrdersQuery } = workOrderApi;
