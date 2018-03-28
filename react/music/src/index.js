import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import $ from 'jquery';
//import proxy from 'http-proxy-middleware';
//import axios from 'axios';
//
$.ajax({
	url: '/getSearchTip',
	data: {
		MusicTipCount:5,
		MVTipCount:2,
		albumcount:2,
		keyword: '及',
		callback: 'jQuery191004123277164288508_1517755339994',
		_: '1517755339999'
	},
	type: 'get',
	success: function(data){
		console.log('******getSearchTip:' + data);
	}
})

$.ajax({
	url: '/getstarlist',
	type: 'get',
	dataType: 'json',
	success: function(data){
		console.log('******:' + JSON.stringify(data));
	}
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
