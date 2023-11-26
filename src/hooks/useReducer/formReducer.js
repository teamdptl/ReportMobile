export const SET_INVALID = "SET_INVALID";
export const SET_VALID = "SET_VALID";
export const SET_VALUE = "SET_VALUE";

const formReducer = (state, action) => {
  switch (action.type) {
    case SET_INVALID:
      return {
        ...state,
        [action.field]: { ...state[action.field], isInvalid: true },
      };
    case SET_VALID:
      return {
        ...state,
        [action.field]: { ...state[action.field], isInvalid: false },
      };
    case SET_VALUE:
      return {
        ...state,
        [action.field]: { ...state[action.field], value: action.value },
      };
    default:
      return state;
  }
};

export default formReducer;
