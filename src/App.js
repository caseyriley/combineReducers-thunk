import React, {useRef, useState} from 'react'
import "./App.css";
import { connect, useSelector, useDispatch } from "react-redux";
import {add, subtract, multiply} from "./reducers/actions";

const App = (props) => {
  console.log(props);

  // const result = useSelector((state) => state.result);
  const dispatch = useDispatch();

  const [resultState, setResultState] = useState("?")

  const num1ref = useRef()
  const num2ref = useRef()
  const selectRef = useRef();

  const calculate = () => {
    let num1 = Number(num1ref.current.value);
    let num2 = Number(num2ref.current.value);
    if (selectRef.current.value === "" | selectRef.current.value === "+"){
      let result = dispatch(add(num1, num2));
      setResultState(result.payload);
    } else if (selectRef.current.value ===  "-"){
      let result = dispatch(subtract(num1, num2));
      setResultState(result.payload);
    } else if (selectRef.current.value === "x"){
      let result = dispatch(multiply(num1, num2));
      setResultState(result.payload);
    }
  }

  return (
    <div className="app">
      <div>
        <button onClick={props.decrement}>-</button>
        <span>Count:{props.count}</span>
        <button onClick={props.increment}>+</button>
        <button onClick={props.reset}>Reset</button>
      </div>
      <div>
        <input ref={num1ref} type={"number"}/>
          <select ref={selectRef} id="math-operator-select">
            <option value={""}>choose a math operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
          </select>
        <input ref={num2ref} type={"number"}/>
        {resultState}
      </div>
      <div>
        <button onClick={calculate}>Calculate</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    count: state.countReducer.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({ type: "INCREMENT" }),
    decrement: () => dispatch({ type: "DECREMENT" }),
    reset: () => dispatch({ type: "RESET" }),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
