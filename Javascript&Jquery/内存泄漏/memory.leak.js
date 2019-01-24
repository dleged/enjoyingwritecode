// gloabl object memory leak

~function(w){
	let memoryStr = 'gloabl';
	let numStr = 0;
	let body = document.body;
	function clickHandle(){
		let _div = document.createElement('div');
		let str = '-gloabl';
		for(let i = 0;i<100;i++){
			memoryStr = memoryStr + str;
			numStr ++;
			_div.textContent = numStr;
			body.appendChild(_div);
		}
	}
	w.clickHandle = clickHandle;
}(window)

~function(w){
	var detachedNodes;
	var detachedTree;
	function handleCreateSomeElecment() {
	  var ul = document.createElement('ul');
	  for (var i = 0; i < 100; i++) {
	    var li = document.createElement('li');
	    ul.appendChild(li);
	  }
	  detachedTree = ul;//有引用，但没有绘制在dom树，做为分离DOM存在memory中 ；
		//detachedTree = null; //清空可以删除内存中的DOM
		console.log(performance.memory);
	}
	w.handleCreateSomeElecment = handleCreateSomeElecment;
}(window)
