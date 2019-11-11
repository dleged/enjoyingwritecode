function CreateImmutable(target){
  this.modified = false;//定义对象是否被修改
  this.target = target;//源对象
  this.copy = undefined;//如果对对象进行修改，存放拷贝的对象
}

CreateImmutable.prototype = {
  get: function(key){
    if(!this.modified) return this.target[key];
    return this.copy[key];
  },
  set: function(key,value){
    if(!this.modified) this.makeChanged();
    return this.copy[key] = value;
  },
  makeChanged: function(){
    if (!this.modified) {
        this.modified = true;
        this.copy = shallowCopy(this.target);
      }
  }
}

function shallowCopy(target){
  if(Array.isArray(target)) return target.slice();
  if(target.__proto__ === undefined) Object.assign(Object.create(null),target);
  return Object.assign({},target);
}

var PROXY_STATE = Symbol('proxy-state');
var handler = {
  get(target, key) {
    if (key === PROXY_STATE) return target;
    return target.get(key);
  },
  set(target, key, value) {
    return target.set(key, value);
  },
};
// 接受一个目标对象和一个操作目标对象的函数
function produce(state, producer) {
  //创建一个可以存储源对象的实例
  const store = new CreateImmutable(state);
  //劫持这个对象
  const proxy = new Proxy(store, handler);//代理
  producer(proxy);
  const newState = proxy[PROXY_STATE];
  if (newState.modified) return newState.copy;
  return newState.target;
}

var state = [
  {
      todo: 'eating dinner',
      done: 'false',
  },
  {
      todo: 'go home',
      done: 'false'
  }
]

var nextState = produce(state,target => {
    //target.push -> CreateImmutable实例的get方法，也就会得到push方法
    target.push({todo: 'go sleep',done: false});
    target[0].todo = true;
})
