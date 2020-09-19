let obj = require('./com.js');
console.log(obj);

setInterval(() => {
  obj = 'pp';
  console.log(obj);
},2000);

console.log(require.main === module);

module.exports = 1;