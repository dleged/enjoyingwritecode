function throttle(fn, interval) {
  let timer = null;
  let now = Date.now();

  return function () {
    let context = this;
    let args = arguments;

    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      now = Date.now();
      timer = null;
      fn.apply(context, args);
    }, (interval - (Date.now() - now)));

  }
}


window.addEventListener('resize', throttle(() => console.log(1), 2000));


