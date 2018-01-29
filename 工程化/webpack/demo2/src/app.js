import Layer from './components/layer/layer.js';
import './style/common.css';
import './components/layer/layer.less';

const App = function(){
	var layer =  new Layer();

	var tpl = layer.tpl({
		name: 'layer',
		arr: ['apple','xiaomi','huawei']
	});
	document.getElementById('app').innerHTML = tpl;
	//$('body').html('webpack providePlugin!');
}

 new App();
