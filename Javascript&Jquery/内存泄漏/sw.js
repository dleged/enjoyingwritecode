console.log('Hello from sw.js');
function importScripts(src){
	var src = document.createElement('script');
	src.src = src;
	document.appendChild(src);
}
