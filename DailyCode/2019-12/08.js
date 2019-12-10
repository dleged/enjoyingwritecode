
let tree = [{
    id:1,
    children:[ {
        id:2,
        children:[]
    },{
        id:3,
        children:[]
    }]
}];

function getTreeChildById(tree,id){
	let treeStr = JSON.stringify(tree);
	let reg = new RegExp(`.+(\{"id":${id}.+?\})`);
	let result = treeStr.match(reg);
	let child = result ? result[1] : null;
	return child ? JSON.parse(child) : null;
}

getTreeChildById(tree,2);
