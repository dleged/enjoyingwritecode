//实现深度克隆

function isType(p,o){
  if(typeof o !== 'object') return false;
  let type = String.prototype.slice.call(o);
  let bool = false;
  switch (o) {
    case 'Function':
      bool = o === '[object Function]'
      break;
    case 'Array':
      bool = o === '[object Array]'
      break;
    case 'RegExp':
      bool = o === '[object RegExp]'
      break;
    case 'Object':
      bool = o === '[object Object]'
      break;
    case 'Date':
      bool = o === '[object Date]'
      break;
    default:
      bool = false;
  }
  return bool;
}

// g	全局搜索。
// i	不区分大小写搜索。
// m	多行搜索。
// s	允许 . 匹配换行符。
// u	使用unicode码的模式进行匹配。
// y	执行“粘性”搜索,匹配从目标字符串的当前位置开始，可以使用y标志。
function getRegExp(reg){
  let str = '';
  if(reg.global) str += 'g';
  if(reg.ignoreCase) str += 'i';
  if(reg.global) str += 'm';
  if(reg.dotAll) str += 's';
  if(reg.unicode) str += 'u';
  if(reg.sticky) str += 'y';
  return str;
}

function isNormal(target){
  return typeof target !== 'object' || target === null;
}

function deepClone(target){
  //处理循环引用；
  const parents = [];//
  const children = [];//
  if(isNormal(target)) return target;

  var _child,_proto;
  if(isType(target,'Array')){
    _child = [];
  }else if(isType(target,'RegExp')){
    _child = new RegExp(target.source,target(/\w*$/,target));
     if (target.lastIndex) _child.lastIndex = _child.lastIndex;
  }else if(isType(target,'Date')){
    let _date = +target;
    _child = new Date(_date);
  }else{
    _proto = Object.getPrototypeOf(target);
    _child = Object.create(_proto);//赋值原型
  }

  if(isType(target) === 'Object'){
    let index = parents.indexOf(target);
    if(index > -1){
      return children(index);
    }
  }

  parents.push(target);
  children.push(_child);

  for(let i in target){
    if(target.hasOwnProperty(i)){//原型链上的排除
      _child[i] = deepClone(target[i]);
    }
  }
  return _child;
}

var target = {a:1,b:[1,2,3],c:{d:'d'},c: function(){console.log('c')}}
target.__proto__.sayA = function(){console.log(this.a);}

var cloneTarget = deepClone(target);
console.log(cloneTarget);
cloneTarget.sayA();
