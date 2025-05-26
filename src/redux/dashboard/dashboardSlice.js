import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboards: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashboard: (state, action) => {
      state.dashboards = action.payload;
    },
    addDashboard: (state, action) => {
      state.dashboards.push(action.payload);
    },
  },
});

export const { setDashboard, addDashboard } = dashboardSlice.actions;
export default dashboardSlice.reducer;
