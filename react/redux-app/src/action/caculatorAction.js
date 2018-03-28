export const ADD_NUMBER = 'caculator:ADD_NUMBER';
export const SUB_NUMBER = 'caculator:SUB_NUMBER';
export function additive(num){
	return {
		type: ADD_NUMBER,
		payload: num
	}
}

export function subtraction(num){
	return {
		type: SUB_NUMBER,
		payload: num
	}
}
