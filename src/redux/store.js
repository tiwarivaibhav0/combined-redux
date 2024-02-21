import { CounterReducer } from "./counter/CounerReducer";
import { toggleReducer } from "./toggle/ToggleReducer";
import abc from "./toolkitCounter/toolkitCounterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: CounterReducer,
    toggler: toggleReducer,
    toolkitCounter: abc,
  },
});
