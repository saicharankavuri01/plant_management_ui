import { configureStore } from "@reduxjs/toolkit";
import { workOrderApi } from "./services/workOrderApi";

export const store = configureStore({
  reducer: {
    [workOrderApi.reducerPath]: workOrderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(workOrderApi.middleware),
});
