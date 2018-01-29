import tpl from './layer.ejs';
import './layer.less';

function layer(){
	return ({
		name: 'layer',
		tpl: tpl
	})
}

export default layer;
