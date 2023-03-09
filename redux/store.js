import { configureStore } from "@reduxjs/toolkit";
import shortLinkReducer from "./reducers/shortLinkSlice";

export const store = configureStore({
  reducer: {
    data: shortLinkReducer,
  },
});
