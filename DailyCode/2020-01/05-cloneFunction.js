/**
 * 1.apply调用原方法；
 * 2.原方法的属性也需要被克隆clone；
 * */

cloneFunction = (fn) => {
    let tempFN = function(){
       return fn.apply(this,arguments);
    }
    for(let key in fn){
        if(fn.hasOwnProperty(key)){
            tempFN[key] = fn[key];
        }
    }
    return tempFN;
}

let ArrayCopy = cloneFunction(Array);
console.log(ArrayCopy(1,2,3));
console.log(ArrayCopy === Array);