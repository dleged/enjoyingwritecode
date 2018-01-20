var peoples = require('./people.js');
var $ = require('jquery');

$.each(peoples,function(item,i){
	$('body').append('<h1>'+ item[i] +'</h1>')
})

console.log($);
