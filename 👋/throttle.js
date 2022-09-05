

function throttle(fn, time) {

  let curTime = new Date();
  let timer = null;
  return function () {
    const context = this;
    const args = arguments;
    const nowTime = new Date();

    if (timer) {
      return;
    } else {
      timer = setTimeout(() => {
        timer = null;
        curTime = new Date();
        fn.apply(context, args);
      }, Math.max(nowTime - curTime, 0));
    }

  }

}


window.addEventListener('resize', throttle(() => console.log(1), 2000));