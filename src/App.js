import "./App.css";
import { connect } from "react-redux";

function App(props) {
  console.log(props);


  return (
    <div className="app">
      <div>
        <button onClick={props.decrement}>-</button>
        <span>Count:{props.count}</span>
        <button onClick={props.increment}>+</button>
        <button onClick={props.reset}>Reset</button>
      </div>
      <div>
        <input type={"number"}/>
          <select id="math-operator-select">
            <option value={""}>choose a math operator</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">x</option>
          </select>
        <input type={"number"}/>
        <span>= ?</span>
      </div>
      <div>
        <button>Calculate</button>
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
