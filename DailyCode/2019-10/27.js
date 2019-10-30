//组合使用构造函数和原型模式

function CreateCar(name = 'car',color = 'black'){
  this.name = name;
  this.color = color;
}

CreateCar.prototype.running = function(){
  console.log(`%c a ${this.color} ${this.name} is running 🚗🚗🚗。。。`,`color: ${this.color}`);
  return this;
}

let bwa = new CreateCar('BWM','red');
bwa.running();

let benz = new CreateCar('BENZ','yellow');
benz.running();

let audi = new CreateCar('AUDI','blue');
audi.running();

console.log(bwa.running === benz.running); //false
console.log(bwa.name === benz.name) //fasle
console.log(bwa.constructor === benz.constructor); //true

/*
  这个是最常用的创建方式；
  好处，可以传入参数，赋值实例属性；共享对方法的引用，极大的节约内存
*/
