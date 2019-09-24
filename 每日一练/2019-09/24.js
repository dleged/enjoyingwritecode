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
