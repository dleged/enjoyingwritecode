let obj = require('./com.js');
console.log(obj);

let test = require('./test');

setInterval(() => {
  console.log(require('./com.js'),obj,test);
},2000);