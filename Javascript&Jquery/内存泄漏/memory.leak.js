// gloabl object memory leak

let memoryStr = 'gloabl';
let numStr = 0;
let body = document.body;

let _div = document.createElement('div');

function clickHandle(){
	let str = '-gloabl';
	for(let i = 0;i<100000;i++){
		memoryStr = memoryStr + str;
		numStr ++;
		_div.textContent = numStr;
		body.appendChild(_div)
	}

}
