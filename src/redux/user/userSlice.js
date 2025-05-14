import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  register: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.register.push(action.payload);
    },
  },
});

export const { setUserData } = userSlice.actions;

export default userSlice.reducer;
