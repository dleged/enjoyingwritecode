import React from 'react'
import PropTypes from 'prop-types'
import { combineReducers,createStore }  from 'redux';


function additive(num){
	return {
		type: 'ADD_NUMBER',
		payload: num
	}
}

function subtraction(num){
	return {
		type: 'SUB_NUMBER',
		payload: num
	}
}



class Caculator extends React.Component {
	constructor(props,context){
		super(props);
		this.dispatch = this.props.dispatch;
	}
	additive = () => {
		this.dispatch(additive(Number(this.textInput.value)));
	}
	subtraction = () => {
		this.dispatch(subtraction(Number(this.textInput.value)));
	}
	render () {
		let value = this.props.value || 0;

		return (
			<div>
				加减的值：<input type="text" ref={(input) => { this.textInput = input;}} defaultValue='1'/>
				<button onClick={this.additive}> + </button>
				<button onClick={this.subtraction}> - </button>
				<p>运算后的值：{value}</p>
			</div>
		)
	}
}

export default Caculator;
