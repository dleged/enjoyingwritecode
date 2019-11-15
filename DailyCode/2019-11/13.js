//如何实现一个Event bus（发布订阅模式）

class EventEmitter{
  constructor(){
    this._events = this._events || new Map();
    this._maxListener = this._maxListener || 10;
  }
}

EventEmitter.prototype.addListener = function(type,fn){
  let _events = this._events;
  let handler = _events.get(type);
  let isArray = Array.isArray(handler);

  if(Object.keys(_events).length === this._maxListener) {return new Error(`max listener count is ${this._maxListener}`)}
  if(Object.prototype.toString(fn) === '[Object function]'){ return new Error('arg[1] must be a function!')}
  if(!handler){
    _events.set(type,fn);
  } else if(isArray){
    _events.push(fn);
  }else{
    _events.set(type,[handler,fn]);
  }

  return this;
}

EventEmitter.prototype.emit = function(type,...args){
  let _events = this._events;
  let handler = _events.get(type);
  let isArray = Array.isArray(handler);

  if(isArray){
    for(let i = 0,len = handler.length;i < len;i++){
      if(args.length > 1){
        handler[i].apply(this,args);
      }else{
        handler[i].call(this,args);
      }
    }
  }else if(Object.prototype.toString.call(handler) === '[object Function]'){
    if(args.length > 1){
      handler.apply(this,args);
    }else{
      handler.call(this,args);
    }
  }

  return this;
}

EventEmitter.prototype.remove = function(type,fn){
  let _events = this._events;
  let handler = _events.get(type);
  let isArray = Array.isArray(handler);
  let position = 0;

  if(isArray){
    for(let i = 0,len = handler.length;i < len;i++){
      if(handler[i] === fn){
        position = i
      }else{
        position = -1;
      }
    }
  }

  if(position > -1){
    handler.splice(position,1);
    if(handler.length === 1){
      _events.set(type,handler[0]);
    }
  }

  return this;
}


function sayDogName(name){
  console.log(`Dog name is ${name}`);
}

function sayDog2Name(name){
  console.log(`Dog2 name is ${name}`);
}

function sayCatName(name){
  console.log(`Cat name is ${name}`);
}

let emit = new EventEmitter();
emit.addListener('sayDogName',sayDogName);
emit.addListener('sayDogName',sayDog2Name);
emit.addListener('sayCatName',sayCatName);

emit.emit('sayCatName','团团');
emit.emit('sayDogName','木木');

//移除 sayDogName 的 sayDog2Name
console.log('移除 sayDogName 的 sayDog2Name');
emit.remove('sayDogName',sayDog2Name);
emit.emit('sayCatName','团团');
emit.emit('sayDogName','木木');
