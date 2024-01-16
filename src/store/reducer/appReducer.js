import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
    updateItem(state, action) {
      state.items[action.payload.index] = action.payload?.item;
    },
  },
});
export const { setItems, updateItem } = userSlice.actions;
export const selectUser = (state) => state.userReducer.items;
export default userSlice.reducer;
