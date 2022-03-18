const fs = require('fs');

function operatorAsync(callback) {
  fs.readFile('../net/TCP.js', callback);
}


const startTime = new Date();
setTimeout(function () {

  console.log(new Date() - startTime + '后执行 1 ！');
  process.nextTick(() => console.log('nextTick'));

}, 10);
setTimeout(function () {

  console.log(new Date() - startTime + '后执行 2 ！');

}, 10);

setInterval(function () {

  console.log('100ms 一次 setInterval');

}, 500);

setImmediate(function () {
  console.log('start immediate');
})

function poll() {


  const time = new Date();

  while (new Date() - time < 100) {

  }

  console.log('end while poll');
}


operatorAsync(poll);

console.log('run sync code');