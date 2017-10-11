~function(w){
	var There = function(){
		console.log('this is 3th script！');
	}
	There.constructor = 'There';
	w.There = There;
}(window)
