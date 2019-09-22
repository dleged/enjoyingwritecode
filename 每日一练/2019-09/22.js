/*
  debounce
  1.多次触发函数在指定时间范围之内不会执行；
  2.超出指定时间范围执行一次函数；
*/

function debounce(fn,time){
  var timer = false;
  return function(args){
    clear(timer)
    timer = setTimeout((args) => {
      fn(args);
    },time || 300);
  }
}

/*
  throttle
  1.指定时间内执行一次；
  2.可多次执行;
*/

function throttle(fn,time){
  var flag = true;
  return function(args){
    if(!flag) return;
    flag = false;
    timer = setTimeout((args) => {
      flag = true;
      fn(args);
    },time || 300);
  }
}
