function throttle(fn, interval) {

  let timer = null;
  let startTime = Date.now();

  return function () {
    let now = Date.now();
    let timeRemaining = interval - (now - startTime);
    let args = arguments;
    let context = this;
    clearTimeout(timer);

    if (timeRemaining <= 0) {
      fn.call(context, ...args);
      startTime = now;
    } else {
      timer = setTimeout(() => {
        fn.call(context, ...args);
        startTime = now;
      }, timeRemaining);
    }
  }

}


window.addEventListener('resize', throttle(() => console.log(1), 2000));


