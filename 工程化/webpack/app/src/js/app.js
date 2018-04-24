var frontType = require('./frontType.js');
var $ = require('jquery');
require('../style/style.css');


$.each(frontType,function(key,value){
	$('body').append('<h1>' + value + '</h1>')
})
