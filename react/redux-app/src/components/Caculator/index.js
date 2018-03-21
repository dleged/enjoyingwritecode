import React from 'react'
import PropTypes from 'prop-types'
import { combineReducers,createStore }  from 'redux';

class Caculator extends React.Component {
	constructor(props,context){
		super(props);
		this.additive = this.props.additive.bind(this);
		this.subtraction = this.props.subtraction.bind(this);
	}
	additive = () => {
		this.additive(Number(this.textInput.value));
	}
	subtraction = () => {
		this.subtraction(Number(this.textInput.value));
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
