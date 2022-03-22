const initalState = {
  count: 0,
};

export const counterReducer = (state = initalState, action) => {
  switch (action.type) {
    case "INCREMENTA_COUNTER":
      return {
        ...state,
        count: state.count + action.payload,
      };
    case "DECREMENTA_COUNTER":
      return {
        ...state,
        count: state.count - action.payload,
      };

    case "RESET_COUNTER":
      return {
        ...state,
        count: 0,
      };
    default:
      return state;
  }
};
