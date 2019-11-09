function patch(node, patches){
   let index = 0;
   !function(){
     stepOneWalk = function(node){
       let currentPatche = patches[index++];//第一个补丁
       let childrenNodes = node.childNodes;
       childrenNodes.forEach((v) => stepOneWalk(v));//从子节点进行深度优先遍历，和序列后的补丁进行比较

       if(currentPatche){
         doPatch(node,currentPatche);
       }
     }
     stepOneWalk(node);
   }()
}



function doPatch(node,currentPatche){
  currentPatche.forEach((patch) => updateDom(node,patch));
}

function updateDom(node,patch){
  switch (patch.type) {
    case 'TEXT':
      node.innerHTML = patch.text;
      break;
    case 'ATTR':
      let attr = patch.attr;
      let { props } = attr;
      if(attr && props){
        for(let key in props){
          let v = props[key];
          switch (v) {
            case 'value':
              node.value = v;
            break;
            case 'style':
              node.style.cssText = v;
            break;
            default:
             node.setAttribute(key,v);
            break;
          }
        }
      }
      break;
    case 'REPLACE':
      let newNode = patch.newNode;
      newNode = (newNode instanceof Element) ? renderDom(newNode) : document.createTextNode(newNode);
      node.parentNode.replaceChild(newNode,node);
      break;
    case 'MOVE':
      node.remove();
      break;
    default:
      break;
  }
}
