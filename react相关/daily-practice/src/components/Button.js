import React from 'react'

class Button extends React.Component {
	render () {
		return <Button {...this.props}>{this.props.child || '按钮'}</Button>
	}
}

export default Button;
