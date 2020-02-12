/*happy new year🧨*/

timeLine = (name,callback,isLog) => {
    console.time(name);
    isLog && console.log(callback());
    console.timeEnd(name);
}

let arr1 = Array.from(new Array(20000000), (x, index)=>{
    return index;
});
let arr2 = Array.from(new Array(10000000), (x, index)=>{
    return index + index;
});
let bigArray = arr1.concat(arr2);
/**
 * 数组去重
 */

let repeatArr = [1,2,3,new String('1'),new String('1'),1,2,3,NaN,NaN,undefined,undefined,{},{}];

//////////////////////////////////
distinctFor = (arr) => {//String,{}不去重
    let result = [];
    for(let i = 0,len = arr.length;i < len;i++){
        let temp = arr[i];
        if(!result.includes(temp)){
            result.push(temp);
        }
    }
    return result;
}

timeLine('distinctFor',() => distinctFor(repeatArr),true);

/////////////////////////////////
distinctSet = (arr) => {//String,{}不去重
    return [...new Set(arr)];//Array.form(new Set(arr))
}
timeLine('distinctFor',() => distinctSet(repeatArr),true);

/////////////////////////////////
distinctFilter = (arr) => {//String,{}不去重;NaN丢失
    return arr.filter((v,i) => arr.indexOf(v) === i);
}
timeLine('distinctFilter',() => distinctFilter(repeatArr),true);

/////////////////////////////////
distinctReduce = (arr) => {//String,{}不去重
    return arr.reduce((pre,cur) => { 
        pre.includes(cur) ? pre : pre.push(cur);
        return pre;
    },[]);
}
timeLine('distinctReduce',() => distinctReduce(repeatArr),true);


console.log('--------------------');
//测试大素组的耗时
timeLine('distinctFor',() => distinctFor(bigArray));
timeLine('distinctSet',() => distinctSet(bigArray));
timeLine('distinctFilter',() => distinctFilter(bigArray));
timeLine('distinctReduce',() => distinctReduce(bigArray));

/**
 * ⚠️需要注意对特殊值的比较
 * 1.includes可以找到NaN，但是对于引用类型不能匹配到；
 * 2.还有 == 和 === 的比较；
 * 3.Set可以去重NaN,但是对对于引用类型不能去重复；
 */