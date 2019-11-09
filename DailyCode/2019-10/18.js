class Element{
  constructor(type,props,children){
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type,props,children){
  return new Element(type,props,children);
}

function renderDom(element){
  let {type,props,children} = element;
  let dom = document.createElement(element.type);
  setAttr(dom,type,props);
  if(typeof children === 'string'){
    dom.append(document.createTextNode(children));
  }
  if(children instanceof Array){
    children.forEach(v => {
      dom.appendChild(v instanceof Element ? renderDom(v): document.createTextNode(v));
    })
  }else{
    dom.append(children);
  }

  return dom;
}

function setAttr(dom,type,props){
  //children
  Object.keys(props).forEach((v) => {
    switch (v) {
      case 'value':
        if(type.toLocaleLowerCase() === 'input' || type.toLocaleLowerCase() === 'textarea'){
          dom.value = props[v];
        }
      break;
      case 'style':
        dom.style.cssText = props[v];
      break;
      default:
       dom.setAttribute(v,props[v]);
      break;
    }
  })
}

function render(root,element){
  root.appendChild(renderDom(element));
}
