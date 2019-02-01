import React from 'react'
import PropTypes from 'prop-types'

// react生命周期 https://www.cnblogs.com/gdsblog/p/7348375.html

class Live extends React.Component {
	constructor(props){
		super(props);
		console.log('实力化--getInitialState: '+ this.props.name);
	}

	componentWillMount(props){
		console.log('实力化--componentWillMount: ' + '这个是在render方法调用前可修改state的最后一次机会');
	}

	render () {
		console.log('实力化--render: ' + 'JSX通过这里，解析成对应的虚拟DOM，渲染成最终效果');
		let name = this.props.name;
		return (<div>
							<Name name={this.props.name} />
							<input ref={(e) => (this.inpt = e.target)} onChange={this.change} />
				</div>);
	}

	componentDidMount(){
		console.log('实力化--componentDidMount: ' + '这个方法在首次真实的DOM渲染后调用（仅此一次）当我们需要访问真实的DOM时，这个方法就经常用到。当我们需要请求外部接口数据，一般都在这里处理。');
	}

	componentWillReceiveProps(){
		console.log('存在期--componentWillReceiveProps: ' + '组件props发生改变');
	}

	shouldComponentUpdate(){
		console.log('存在期--shouldComponentUpdate: ' + '是否允许组件更新');
	}

	componentWillUpdate(){
		console.log('存在期--componentWillUpdate: ' + '当props和state发生变化时执行，并且在render方法之前执行，当然初始化render时不执行该方法');
	}

	componentDidUpdate(){
		console.log('存在期--componentDidUpdate: ' + '组件更新结束之后执行，在初始化render时不执行');
	}

	componentWillUnmount(){
		console.log('销毁期--componentWillUnmount: ' + '当组件要被从界面上移除的时候，就会调用componentWillUnmount(),在这个函数中，可以做一些组件相关的清理工作，例如取消计时器、网络请求等');
	}

}

Live.propTypes ={
	name: PropTypes.string
}
Live.defaultProps ={
	name: 'kick'
}

export default Live;


function Name(props){
	return <h3>组件的名字:{props.name}</h3>;
}
