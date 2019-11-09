/*
  * 比较两个dom树，先序深度优先遍历，把差异存储在[]中；
  * 比较规则：
  * 1.如果节点为空，{type: 'REMOVE',index: index}
  * 2.是文本，并且内容发生变化，{type: 'TEXT',text: newText}
  * 3.节点type相同，存储差异属性，{tyep: 'ATTR',attr: {class: 'active'}}
  * 4.节点类型不相同，替换节点，{type: 'REPLACE',newNode: newNode}
*/
/*
  * 深度优先遍历
  *       1
  *      / \
  *     2   3    ==> [1,2,null,3,4,null,5,null] (patchs补丁)
  *        /\
  *       4  5
**/

//生成码
function diff(oldNode,newNode){
  let patchs = [];
  let index = 0;//所有节点的下标  帮助查深度优先遍历；
  walk(oldNode,newNode,index,patchs)
  return patchs;
}

function walk(oldNode,newNode,index,patchs){
  let current = [];

  if(!newNode){
    current.push({type: 'REMOVE',index});
  }else if(oldNode === newNode){
    current.push({type: 'TEXT',text: newNode});
  }else if(oldNode.type === newNode.type){
    let attr = diffAttr(oldNode,newNode);
    current.push({type: 'ATTR',attr});
    isArray(oldNode.children) && diffChildren(oldNode.children,newNode.children,index,patchs);
  }else{
    current.push({type: 'REPLACE',newNode});
  }

  if(current.length){
    patchs[index] = current;
  }
}

function isString(v){
  return Object.prototype.toString.call(v) === '[object String]';
}

function isArray(v){
  return Object.prototype.toString.call(v) === '[object Array]';
}

function diffAttr(oldNode,newNode){
  let attrs = {};
  for(let key in oldNode){
    if(oldNode[key] !== newNode[key]){//相同属性，不同值
      attrs[key] = newNode[key];
    }
  }
  for(let key in newNode){
    if(!oldNode.hasOwnProperty(key)){//更新老节点的
      attrs[key] = newNode[key];
    }
  }

  return attrs;
}

function diffChildren(oldNode,newNode,index,patchs){
  oldNode.forEach((v,i) => {
    walk(v,newNode[index],++index,patchs)
  })
}
