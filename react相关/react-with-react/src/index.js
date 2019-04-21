import React from "react";
import ReactDOM from "react-dom";

import * as reactRedux from "react-redux";
import store from "./redux/store";

import TodoApp from "./TodoApp";


window.reactRedux = reactRedux;

const rootElement = document.getElementById("root");
ReactDOM.render(
  <reactRedux.Provider store={store}>
    <TodoApp />
  </reactRedux.Provider>,
  rootElement
);
