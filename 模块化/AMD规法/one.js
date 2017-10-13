~function(w){
	var One = function(){
		console.log('this is 1th script！');
	}
	One.constructor = 'One';
	w.One = One;
}(window)
