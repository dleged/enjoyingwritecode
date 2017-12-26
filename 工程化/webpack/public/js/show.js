function showText(text){
	var app = document.createElement('div');
	app.innerText = text;
	app.setAttribute('id','app')
	document.body.append(app);
}
module.exports = showText;