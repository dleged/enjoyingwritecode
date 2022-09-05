/**
 * new 关键字实现
 * 1. 创建一个空对象
 * 2. 让这个对象的原型执行构造函数
 * 3. 将这个对象作为构造函数的 this
 * 4. 如果函数执行有返回值，返回函数执行结果，否则返回这个对象
 */

function constructorFn(name) {
  this.name = name;
  return this.name;
}


function createNew() {

  // 第一个参数作为构造函数
  const constructorFn = Array.prototype.shift.call(arguments);

  if (typeof constructorFn !== 'function') {
    throw new Error('')
  }

  const newObj = Object.create(constructorFn.prototype);
  const result = constructorFn.apply(newObj, arguments);
  const flag = result && (typeof result === 'object' || typeof result === 'function')

  return flag ? result : newObj;

}

console.log(createNew(constructorFn,2).name)