import { combineReducers,createStore }  from 'redux';
import productReducer from '../reducers/productReducer.js';
import userReducer from '../reducers/userReducer.js';
import caculatorReducer from '../reducers/caculatorReducer.js';

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
export default store;
