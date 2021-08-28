export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const MULTIPLY = "MULTIPLY";
export const DIVIDE = "DIVIDE";

export const add = (val1, val2) => ({
  type: ADD,
  payload: val1 + val2,
});

export const subtract = (val1, val2) => ({
  type: SUBTRACT,
  payload: val1 - val2,
})

export const multiply = (val1, val2) => ({
  type: MULTIPLY,
  payload: val1 * val2,
})

export const divide = (val1, val2) => ({
  type: DIVIDE,
  payload: val1 / val2,
})