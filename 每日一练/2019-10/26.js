/*
 *观察者模式
 *一种一对多的依赖关系，即对象（主题）发生了变化，所有的观察者都会发生变化；
*/

class Subject{
  constructor(){
    this.observers = [];
  }

  addObserver(observer){
    this.observers.push(observer);
  }

  removeObserver(observer){
    this.observers = this.observers.filter((v) => v !== observer);
  }

  notify(...args){
    this.observers.forEach((v) => v.notify(...args));
  }

}

class Observer{
  constructor(name){
    this.name = name;
  }
  notify(...args){
    console.log(`I am is ${this.name},`,...args);
  }
}

//定义观察者1
let observer1 = new Observer('观察者1');
//定义观察者2
let observer2 = new Observer('观察者2');

//定义主题
let subject = new Subject();
subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notify('Subject fired notify');

//移除观察者1
console.log('移除观察者1');
subject.removeObserver(observer1);
subject.notify('i fired notify');
