import React from 'react';
import Button from '../components/Button';
import buttonStyles from '../styles/buttonStyles';


const translateStyles = (props) => {
	let _styles = {...buttonStyles.default};
	if(props.disable){
		_styles = {..._styles,...buttonStyles.disable}
	}
	return _styles;
}

const stylesWrapper = (wrapperComponent) => {
		return function(props){
			return <Button style={translateStyles(props)}></Button>
		}
}

export default stylesWrapper(Button);
