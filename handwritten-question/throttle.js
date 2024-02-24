function throttle(fn, delay) {

  let timer = null;
  let lastTime = Date.now();

  return function () {
    let now = Date.now();
    // let timeRemainning = Math.max(delay - (lastTime - now),0);
    if (timer) return;
    timer = setTimeout(() => {
      lastTime = now;
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  }
}

// 测试 
const task = () => { console.log('run task') }
const throttleTask = throttle(task, 1000)
window.addEventListener('scroll', throttleTask) 