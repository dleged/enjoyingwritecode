import React from 'react'

class Goods extends React.Component {
	constructor(props,context){
		super(props);
		this.store = props.store || context.store
	}
	render () {
		console.log(this.props);
		let goods = this.props.store();
		return (
			<div>{goods[0].names}</div>
		);
	}
}

export default Goods;
