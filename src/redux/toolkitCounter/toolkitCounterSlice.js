import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 100,
};

const toolkitCounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, val) => {
      state.count += val.payload;
    },
    decrement: (state, val) => {
      state.count -= val.payload;
    },
  },
});

console.log(toolkitCounterSlice)
export const { increment, decrement } = toolkitCounterSlice.actions;
export default toolkitCounterSlice.reducer;
