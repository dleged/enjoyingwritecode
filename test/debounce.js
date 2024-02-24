function debounce(fn, time) {

  let timer = null;
  return function () {

    if (timer) {
      clearTimeout(timer);
    };

    timer = setTimeout(() => {
      fn();
      timer = null;
    }, 2000);
  }

}

window.addEventListener('resize', debounce(() => console.log(1), 2000));