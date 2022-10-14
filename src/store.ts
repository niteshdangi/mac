import { configureStore } from "@reduxjs/toolkit";
import globalState from "./global-state";
const store = configureStore({
  reducer: {
    globalState,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
