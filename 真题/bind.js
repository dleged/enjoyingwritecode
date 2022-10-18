// bind 函数特性
// 1. 传入 this 的绑定
// 2. 传入参数
// 3. 返回一个函数
// 4. 柯里化

const foo = {
  value: 'foo'
}

function bar(age) {
  this.name = 'bar';
  console.log(this.value);
  console.log(this.name);
  console.log(age);
}

// bar.prototype.friends = 'jack';
// const bindBar = bar.bind(foo, 20); // bindBar 函数可以当成构造函数使用，这个时候 foo 中的 value 值会丢失，所以要将 foo.value 的值改回来
// const baka = new bindBar();

// console.log(baka.foo, 1);// undefined
// console.log(baka.name, 1);// bar
// console.log(baka.friends, 1);// jack


Function.prototype._bind = function(context){

  if(typeof this !== 'function'){
    throw new Error('this must be a function!')
  }

  // 初始化参数
  const args = Array.prototype.slice(arguments,1);
  const self = this;
  const emptyFn = function(){};

  emptyFn.prototype = this.prototype;

  function bindFn(){
    return self.apply(this instanceof emptyFn ? this : context,args.concat([...arguments]));
  }

  bindFn.prototype = new emptyFn();

  return bindFn;

}

bar.prototype.friends = 'jack';
const bindBar = bar._bind(foo, 20); // bindBar 函数可以当成构造函数使用，这个时候 foo 中的 value 值会丢失，所以要将 foo.value 的值改回来
const baka = new bindBar();

console.log(baka.foo, 1);// undefined
console.log(baka.name, 1);// bar
console.log(baka.friends, 1);// jack


var toStr = Function.prototype.call.bind(Object.prototype.toString);

function isArray(obj){ 
  return toStr(obj) === '[object Array]';
}
// true

// 使用改造后的 toStr
toStr([1, 2, 3]); 	// "[object Array]"
toStr("123"); 		// "[object String]"
toStr(123); 		// "[object Number]"