//实现instanceof
function instanceOf(instance,cons){
  let _prop = instance.__proto__;//实例的隐式原型
  let _consProp = cons.prototype;//构造对象显示原型
  while (true) {
    if(_consProp === null) return false;
    if(_prop === _consProp){
      return true;
    }
    _prop = _prop.__proto__;
  }
}
let arr = new Array(5);
console.log(instanceOf(arr,Array)); //true

let obj = {};
console.log(instanceOf(obj,Object)); //true
console.log(instanceOf(obj,Array)); //false


/*
*  实现new关键字
* 1.创建一个新对象；
* 2.该对象拥有构造函数的protptype；
* 3.该对象具有构造函数的静态方法和属性
* 4.如果执行构造函数，有返回一个object或者这个创建的对象；
*/

function newAchieve(){
  let Constructor = Array.proptotype.shift.call(arguments);
  let me = new Object();
  me.__proto__ = Constructor.protptype;
  let result = Constructor.apply(me,arguments);
  return typeof result === 'object' ? result :  me;
}
