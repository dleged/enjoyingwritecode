import * as redux from "redux";
import rootReducer from "./reducers";

window.redux = redux;
export default redux.createStore(rootReducer);
