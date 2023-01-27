import { configureStore } from "@reduxjs/toolkit";
/*import counterReducer from "../features/counter/counterSlice";*/
import quoteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
