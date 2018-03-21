import {ADD_NUMBER,SUB_NUMBER} from '../action/caculatorAction'

export default function caculatorReducer(state = 0,{type,payload}){
	switch (type) {
		case ADD_NUMBER:
			return state + payload;
			break;
    case SUB_NUMBER:
			return state - payload;
			break;
		default:
			return state;
	}
	return state;
}
