/**
 * 
 * @param {*} func 防抖函数
 * @param {*} wait 防抖有效时间范围
 * @param {*} immediate 是否立即执行一次
 */

function debounce(func,wait = 100,immediate){
    let timer = 0,context,args;
    let later = () => {
        timer = setTimeout(() => {
            timer = 0;
            func.apply(context,args);
        },wait);
    }
    return function(...params){
        if(!timer){ 
            if(immediate){
                func.apply(this,params);
            }else{
                context = null;
                args = null;
            }
        }else{
            clearTimeout(timer);
            later();
        }
    }
}


//极简版
function debounceSimple(func,wait = 100){
    let timer = null;
    return function(...params){
        clearTimeout(timer);
        setTimeout(() => func.apply(this,params),wait);
    }
}


function debounce(func,wait = 100,immediate){
    let timer = 0,context,args;
    let later = () => {
        timer = setTimeout(() => {
            timer = 0;
            func.apply(context,args);
        },wait);
    }
    return function(...params){
        if(!timer){ 
            if(immediate){
                func.apply(this,params);
            }else{
                context = null;
                args = null;
                later();
            }
        }else{
            clearTimeout(timer);
            later();
        }
    }
}

window.addEventListener(
  'resize',
  debounce(() => {
    console.log(window.innerWidth);
    console.log(window.innerHeight);
  }, 100)
);
