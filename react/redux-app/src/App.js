import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {combineReducers,createStore}  from 'redux';

function productReducer(state = [],action){
  return state;
}
function userReducer(state = '',action){
  return state;
}
let allReducer = combineReducers({
  products: productReducer,
  user: userReducer
})

let store = createStore(allReducer,{
  products: [{name:'iphone8'}],
  user: 'ReactUser'
},
window.devToolsExtension && window.devToolsExtension()
);
// store.dispatch({
//   products: ['iphone1','iphone8'],
//   user: 'redux'
// });
console.log(store.getState());


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
