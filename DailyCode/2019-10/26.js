//原型模式

function CreateCar(){
}

CreateCar.prototype.name = 'AUDI';
CreateCar.prototype.color = 'yellow';
CreateCar.prototype.running = function(){
  console.log(`%c a ${this.color} ${this.name} is running 🚗🚗🚗。。。`,`color: ${this.color}`);
  return this;
}

let bwa = new CreateCar();
bwa.running();

let benz = new CreateCar();
benz.running();

let audi = new CreateCar();
audi.running();

console.log(bwa.running === benz.running); //true
console.log(bwa.name === benz.name); //true
console.log(bwa.constructor === benz.constructor); //true

benz.name = 'BENZ';//设置了benz实例的name属性
benz.running();

console.log(audi.name);//AUDI 未设置实例属性，所以访问原型的属性


/*
  1.原型属性是共用的；
  2.原型的方法也是共用的；
*/
