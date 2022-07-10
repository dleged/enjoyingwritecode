
// 每 多长 时间执行一次

function throttle(fn, delay) {

  let timer = null;
  let lastTime = null;

  return (...args) => {

    let now = Date.now();

    // 第一次运行
    if (!lastTime) {
      lastTime = now;
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    } else {
      let diff = now - lastTime;

      clearTimeout(timer);
      timer = setTimeout(() => {
        // 值写完后记录值
        lastTime = now;
        fn.apply(this, args);
      }, Math.max(0, delay - diff));
    }
  }

}

window.addEventListener(
  'resize',
  throttle(function (evt) {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 3000)
);