import Layer from './components/layer/layer.js';
import './style/common.css';
import './components/layer/layer.less';

const App = function(){
	var layer =  new Layer();
	
	document.getElementById('app').innerHTML = layer.tpl({
		name: 'layer',
		arr: ['apple','xiaomi','huawei']
	});
}

 new App();
