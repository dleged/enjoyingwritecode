/*
  *发布-订阅模式
  *发布-订阅是观察者的一种变体；
  *发布者和订阅者之间还有第三个消息通道存在；
  *解偶发布者和订阅者，属于一种架构模式，如node的Eventemitter
  *
*/

class SubPub{
  constructor(){
    //创建一个纯净的对象，没有Prototype
    this.events = Object.create(null);
  }
}

SubPub.prototype.on = function(name,fn){
  let events = this.events;
  if(!events[name]){
    events[name] = [];
  }
  events[name].push(fn);
}

SubPub.prototype.emit = function(){
  let events = this.events;
  let args = [].slice.call(arguments);
  let name = args.shift();
  if(name && events[name]){
    events[name].forEach((fn) => {
      fn(...args);
    })
  }
}

SubPub.prototype.remove = function(name){
  let events = this.events;
  if(name){
    delete events[name];
  }
}

let subPub = new SubPub();
subPub.on('subPub1',console.log);
subPub.on('subPub2',console.log);

subPub.emit('subPub1',1,2);
subPub.emit('subPub1',3,4);
console.log('remove subPub1');
subPub.remove('subPub1');
subPub.emit('subPub1',5,6);
