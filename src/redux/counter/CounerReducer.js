import { DECREMENT, INCREMENT } from "./CounterActions";

const initialState = {
  count: 5,
};
export const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - action.payload,
      };
    default:
      return state;
  }
};
