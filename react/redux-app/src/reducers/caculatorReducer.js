import {ADD_NUMBER,SUB_NUMBER} from '../action/caculatorAction'

export default function caculatorReducer(state = {},{type,payload}){
	switch (type) {
		case ADD_NUMBER:
			return {value: state.value + payload};
			break;
    case SUB_NUMBER:
			return {value: state.value - payload};
			break;
		default:
			return state;
	}
	return state;
}
