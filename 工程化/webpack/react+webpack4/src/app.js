import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/bootstrap.css';
import './styles/index.sass';
import $ from 'jquery';


$('body').append('<div style="text-align: center;">我在app.js中使用了jquery</div>');
ReactDOM.render(
	<div>hellow react</div>,
	document.getElementById('root')
)
