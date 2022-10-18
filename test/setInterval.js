// 实现 interval 函数
// 1. 使用 setTimeout 函数模拟；
// 2. 使用 webWorker 计时；
// 3. 使用 requestAnimationFrame

const { worker } = require("cluster");


function setInterval1((callback, interval) => {

  if (typeof callback !== 'function') {
    throw TypeError('callback must be function');
  }

  const [, , ...args] = arguments;
  let timer = null;

  function loop() {

    timer = setTimeout(() => {
      callback(...args);
      loop;
    }, interval);

  }

  loop();
  return { timer: timer };
});

function setInterval2(callback, interval) {

  worker = new WebWorker('./new.js');

  worker.postMessage(interval);

  worker.onmessage = () => {
    callback();
  };

  function clearInterval() {
    worker.terminate();
  }

  return {
    clearInterval
  }
}



function setInterval3(callback, interval) {

  if (typeof callback !== 'function') {
    throw TypeError('callback must be function');
  }

  const [, , ...args] = arguments;
  let timer = null;
  let now = Date.now();
  let startTime = now;
  let endTime = startTime;

  function loop() {
    let now = Date.now();
    endTime = now;
    if (endTime - startTime >= interval) {
      callback(...args);
      startTime = endTime = now;
    }
  }

  timer = window.requestAnimationFrame(loop);
  return timer;
}