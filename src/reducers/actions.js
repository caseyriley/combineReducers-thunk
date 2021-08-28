export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";

export const add = (val1, val2) => ({
  type: ADD,
  payload: val1 + val2,
});

export const subtract = (val1, val2) => ({
  type: SUBTRACT,
  payload: val1 - val2,
})