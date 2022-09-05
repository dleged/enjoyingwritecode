function debounce(fn, time) {
  let timer = null;
  return function () {
    let args = arguments;
    let context = this;
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn.apply(context, args);
    }, time);

  }

}

window.addEventListener('resize', debounce(() => console.log(1), 2000));