import {ADD, SUBTRACT} from './actions';

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
    default:
      return state
  }
}
