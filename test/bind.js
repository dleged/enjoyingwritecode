
// bind (this,...args)
Function.prototype.MyBind = function (context) {

  const [context, ...args] = arguments;
  const fn = this;

  return function Fn(){

    return fn.apply(context,[...args,...arguments]);
  }


}

// const args = [...arguments].slice(1);
// const fn = this;

// return function Fn() {
//   return fn.apply(
//     this instanceof Fn ? this : context
//     , args.concat(...arguments);
//   );
// }