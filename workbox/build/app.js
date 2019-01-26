
function _createNode(node){
	return document.createElement(node);
}

function _appendChildNode(par,node){
	return par.appendChild(node);
}

function _renderFrontEndList(data){
	let developListNode = document.querySelector('#develop-list');
	data.forEach(child => {
		let li = _createNode('li');
		li.classList.add('collection-item');
		let span = _createNode('span');
		li.textContent = child.name;
		span.textContent = child.description;
		_appendChildNode(li,span);
		_appendChildNode(developListNode,li);
	})
}

fetch('../data/data.json')
		.then((response) => {
			return response.json();
		}).then((data) => {
			_renderFrontEndList(data.data)
		})
