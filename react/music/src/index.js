import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';

$.ajax({
	url: 'http://searchtip.kugou.com/getSearchTip',
	data: {
		MusicTipCount:5,
		MVTipCount:2,
		albumcount:2,
		keyword: '及',
		callback: 'jQuery191004123277164288508_1517755339994',
		_: '1517755339999'
	},
	dataType: 'jsonp',
	type: 'POST',
	success: function(data){
		console.log(data);
	}
})



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
