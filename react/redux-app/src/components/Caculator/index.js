import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { additive,subtraction } from '../../action/caculatorAction';
import { bindActionCreators } from 'redux'
class Caculator extends React.Component {
	constructor(props,context){
		super(props);
		this.additive = this.additive.bind(this);
		this.subtraction = this.subtraction.bind(this);
	}
	additive = () => {
		this.props.onAdditive(Number(this.textInput.value));
	}
	subtraction = () => {
		this.props.onSubtraction(Number(this.textInput.value));
	}
	render() {
		debugger;
		return (
			<div>
				加减的值：<input type="text" ref={(input) => { this.textInput = input;}} defaultValue='1'/>
				<button onClick={this.additive}> + </button>
				<button onClick={this.subtraction}> - </button>
				<p>运算后的值：{this.props.caculator.value}</p>
			</div>
		)
	}
}
// 注入 dispatch 和全局 state
// 不要这样做！这会导致每次 action 都触发整个 TodoApp 重新渲染，你做的所有性能优化都将付之东流。
// 最好在多个组件上使用 connect()，每个组件只监听它所关联的部分 state
const mapStateToProps = state => ({
  caculator: state.caculator
})

//注入 dispatch 和 userAction
//绑定dispatch的action，返回函数新函数，其实就是执行dispatch(action(...arg))
const mapDispatchToProps = dispatch => ({
  onAdditive: bindActionCreators(additive,dispatch),
  onSubtraction: bindActionCreators(subtraction,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Caculator);
