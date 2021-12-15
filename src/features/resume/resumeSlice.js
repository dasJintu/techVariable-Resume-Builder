import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  values: {},
};

const resumeSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.values = action.payload;
    },
  },
});

export const { addData } = resumeSlice.actions;
export default resumeSlice.reducer;
