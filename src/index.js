import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// we need this to create the redux store
import { applyMiddleware, createStore } from "redux";
// we need this to basically make the store visible to react and vice versa
import { Provider } from "react-redux";
// import the reducer funtion from the reducer file 
import rootReducer from "./reducers/index";
// import thunk to return functions within Redux 
import thunk from 'redux-thunk';

// create the store and pass in the reducer function
const store = createStore(rootReducer, applyMiddleware(thunk));
console.log("store.getState()",store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

