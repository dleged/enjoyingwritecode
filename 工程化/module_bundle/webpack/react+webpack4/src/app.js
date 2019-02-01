import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css';
import './styles/index.sass';
import $ from 'jquery';
import Live from './comopnents/live'


$('body').append('<div style="text-align: center;">我在app.js中使用了jquery!</div>');
ReactDOM.render(
	<div>
		<Live />
	</div>,
	document.getElementById('root')
)
