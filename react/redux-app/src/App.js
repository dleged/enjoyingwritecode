import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Caculator from './components/Caculator'
import Goods from './components/Goods';
import { combineReducers,createStore }  from 'redux';
import { Provider,connect } from 'react-redux';
import { BrowserRouter as Router,Route } from 'react-router-dom';
//
function productReducer(state = [],action){
  return state;
}
function userReducer(state = '',action){
  return state;
}
let allReducer = combineReducers({
  products: productReducer,
  user: userReducer,
  caculator: caculatorReducer
})

let store = createStore(allReducer,{
  products: [{name:'iphone8'}],
  user: 'ReactUser',
  caculator: {value: 0}
},
window.devToolsExtension && window.devToolsExtension()
);

function caculatorReducer(state = 0,action){
	switch (action.type) {
		case 'ADD_NUMBER':
			return state + action.payload;
			break;
    case 'SUB_NUMBER':
			return state - action.payload;
			break;
		default:
			return state;
	}
	return state;
}

console.log(store.getState());
console.log(Provider);

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Provider store={store}>
            <Router>
              <Route path="/">
                <p className="App-intro">
                  To get started, edit <code>src/App.js</code> and save to reload.
                  <Caculator value={store.getState().caculator.value} dispatch={store.dispatch}/>
                </p>
              </Route>
            </Router>
          </Provider>
        </div>
    );
  }
}

export default App;
