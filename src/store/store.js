import { configureStore } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducer/rootReducer";
const persistConfig = {
  key: "root",
  storage,
};
const root_reducer = (state, action) => {
  try {
    let reduxState = state;
    if (action.type === "CLEAR_REDUX") {
      for (let [key] of Object.entries(reduxState)) {
        reduxState[key] = undefined;
      }
      state = reduxState;
    }
    return rootReducer(state, action);
  } catch (error) {
    console.error("root_reducer", error);
  }
};
const persistedReducer = persistReducer(persistConfig, root_reducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
  ],
});
