function throttleApply(fn,ms = 2000,immediate){
  let timer = null;
  return function(...args){
    let runNow = !timer && immediate;
    if(runNow){
      fn(...args);
    }
    if(timer){
      return false;
    }
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    },ms);
  }
}
let throttleLog = throttleApply(console.log,5000,true);

function debounceApply(fn,ms = 2000,immediate){
  let timer = null;
  return function(...args){
    let runNow = !timer && immediate;
    if(runNow){
      fn(...args);
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    },ms)
  }
}

let debounceLog = debounceApply(console.log,5000,true);

let tunTimes = 0;
let interval = setInterval(() => {
  if(tunTimes > 1000){
    clearInterval(interval);
  }
  throttleLog('throttleLog:',Math.random());
  debounceLog('debounceLog:',Math.random());
  tunTimes++;
},10)
