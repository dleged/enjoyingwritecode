//构造函数模式

function CreateCar(name = 'car',color = 'black'){
  this.name = name;
  this.color = color;
  this.running = function(){
    console.log(`%c a ${this.color} ${this.name} is running 🚗🚗🚗。。。`,`color: ${this.color}`);
    return this;
  }
}

let bwa = new CreateCar('BWM','red');
bwa.running();

let benz = new CreateCar('BENZ','yellow');
benz.running();

let audi = new CreateCar('AUDI','blue');
audi.running();

console.log(bwa.running === benz.running); //true

/*
  1.显示创建一个新对象；
  2.赋予对象新属性；
  3.返回这个对象

  创建的对象属性和方法都不是共用的
*/
