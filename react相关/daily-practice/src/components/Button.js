import React from 'react'

class Button extends React.Component {
	render () {
		return <button {...this.props}>{this.props.child || '按钮'}</button>
	}
}

export default Button;
