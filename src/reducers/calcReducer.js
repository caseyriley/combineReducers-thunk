import {ADD, MULTIPLY, SUBTRACT, DIVIDE} from './actions';

const initialState = {
  result: 0
};

export function calcReducer(state = initialState, action) {
  switch (action.type) {
    case ADD: {
      return {...state, result: action.payload}
    }
    case SUBTRACT: {
      return {...state, result: action.payload}
    }
    case MULTIPLY: {
      return {...state, result: action.payload}
    }
    case DIVIDE: {
      return {...state, result: action.payload}
    }
    default:
      return state
  }
}
