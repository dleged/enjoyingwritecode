//工厂模式 🏭
function createCar(name = 'car',color = 'black'){//当没传相应参数，就采用默认值car和black,若传了null,就是值null
  let o = Object.create(null);
  o.name = name;
  o.color = color;
  o.running = function(){
    console.log(`%c a ${this.color} ${this.name} is running 🚗🚗🚗。。。`,`color: ${this.color}`);
    return this;
  }
  return o;
}

let bwa = createCar('BWM','red');
bwa.running();

let benz = createCar('BENZ','yellow');
benz.running();

let audi = createCar('AUDI','blue');
audi.running();

console.log(bwa.running === benz.running); //false


/*
  1.显示创建一个新对象；
  2.赋予对象新属性；
  3.返回这个对象

  创建的对象属性和方法都不是共用的
*/
