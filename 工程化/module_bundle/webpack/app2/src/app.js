import Layer from './components/layer/layer.js';
import './style/common.css';
import './components/layer/layer.less';
//import _ from 'lodash';
const App = function(){
	var layer =  new Layer();

	console.info(layer.tpl);
	var tpl = layer.tpl({
		'name': 'layer',
		'types': ['apple','xiaomi','huawei']
	});

	//var compiled = _.template('<b> hello <%- user %>! </b>');
	// var text = compiled({
	// 	'user': 'world'
	// });
	document.getElementById('app').innerHTML = tpl;
	// document.getElementById('app').innerHTML = text;
	//$('body').html('webpack providePlugin!');
}

 new App();
