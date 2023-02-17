import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { myApi } from "./services";

import authReducer from "./auth-slice";
import cartReducer from "./cart-slice";

const store = configureStore({
  reducer: {
    [myApi.reducerPath]: myApi.reducer,
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(myApi.middleware),
});

export default store;
