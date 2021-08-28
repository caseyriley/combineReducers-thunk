const initialState = {
  operator: "plus",
};

export function calcReducer(state = initialState, action) {
  switch (action.type) {
    case "plus":
      return {
        ...state
      }
    default:
      return state;
  }
  console.log("calcReducer00000000000")
}
