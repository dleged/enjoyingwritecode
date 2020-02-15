/**
 * 
 * @param {*} func 节流函数
 * @param {*} wait 节流有效时间范围
 * @param {*} immediate 是否立即执行一次
 */
function throttle(func,wait = 100,immediate){//每隔一段时间执行一次
    let now = () => Date.now();
    let timer,lastTime,thisTime,context,args;
    let lastFunc = () => {
        timer = setTimeout(() => {
            if(thisTime - lastTime >= wait){// * 
                func.apply(context,args);
                lastTime = thisTime;
            }
        },Math.max(wait - (thisTime - lastTime),0));//超过thisTime - lastTime > 100立即执行 *
    }

    return function(...params){
        thisTime = now();
        context = this,args = params;
        if(!lastTime && immediate){
            lastTime = thisTime;
            func.apply(this,params);
        }else{
            if(!lastTime){ lastTime = thisTime }// *
            clearTimeout(timer);
            lastFunc();
        }
    }
}

window.addEventListener(
    'resize',
    throttle(function(evt) {
      console.log(window.innerWidth);
      console.log(window.innerHeight);
    }, 1000)
  );