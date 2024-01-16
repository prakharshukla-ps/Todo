import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setLoginLogout(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const { setLoginLogout } = userSlice.actions;
export default userSlice.reducer;
