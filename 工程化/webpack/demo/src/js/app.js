var peoples = require('./people.js');
var $ = require('jquery');
require('../style/style.css');
console.log(peoples);
$.each(peoples,function(key,value){
	$('body').append('<h1>' + value + '</h1>')
})

console.log($);
