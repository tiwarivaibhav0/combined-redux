import { TOGGLE } from "./ToggleActions";

const initialState = {
  status: true,
};

export const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        status: !state.status,
      };
    default:
      return state;
  }
};
