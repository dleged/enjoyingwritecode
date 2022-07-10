function debounce(func, delay) {

  let timer = null;
  return (...args) => {
    lastTime = now;
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  }

}


de = debounce((a) => console.log(a),3000);

de(1);
de(2);
de(3);