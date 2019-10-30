//web worker
postMessage("i am 08.js worker!");
postMessage("i am 08.js worker too!");

onmessage = function (res){
  console.log('07.html said: ' + res.data);
}

console.log(this);
