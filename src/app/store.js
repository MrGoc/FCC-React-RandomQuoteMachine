import { configureStore } from "@reduxjs/toolkit";
/*import counterReducer from "../features/counter/counterSlice";*/
import qouteReducer from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    counter: qouteReducer,
  },
});
