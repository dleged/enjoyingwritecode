~function(w){
	var Two = function(){
		console.log('this is 2th script！');
	}
	Two.constructor = 'Two';
	w.Two = Two;
}(window)
