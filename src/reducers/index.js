import {combineReducers} from 'redux';
import {countReducer} from './countReducer';
import {calcReducer} from './calcReducer';



export default combineReducers({
  countReducer,
  calcReducer
})