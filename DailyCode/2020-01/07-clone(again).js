let objectProto = Object.prototype,
    prototypeToString = objectProto.toString;
 let objType = '[object Object]',
     arrType = '[object Array]',
     dateType = '[object Date]',
     regType = '[object RegExp]',
     NumType = '[object Number]',
     StrType = '[object String]',
     funType = '[object Function]';


function isBaseType(value){
    let type = typeof value;
    return type !== 'object' || value === null || value !== value;
}

function getObjectType(value){
    return prototypeToString.call(value);
}

function initCloneArray(value){
    let result = new Array(value.length);
    return result;
}

function cloneArray(value,result){
    if(value){ return [];}
    let index = -1,
        length = value.length;
    while(++index < length){
        baseAssignValue(result,key,value[index]);
    }
}

function cloneObject(value,props){
    if(value){ return {};}
    let index = -1,
        length = props.length;
    while(++index < length){
        baseAssignValue(result,key,value[index]);
    }
}

function baseAssignValue(object,key,value){
    if(key === '__proto__' && defineProperty ){
        defineProperty(object, key, {
            'configurable': true,
            'enumerable': true,
            'value': value,
            'writable': true
            });
    }else{
        object[key] = value;
    }
}

function initCloneObject(value){
    let result = {};
    result.__proto__ = Object.create(value.__proto__);
    return result;
}

/**
 * 
 * @param {*} source 需要克隆的对象；
 * @param {*} isDeep 是否是深拷贝；
 * @returns {*} 返回克隆值
 */
let heap = [];//存储循环引用
function baseClone(source,isDeep){
    let dataType = getObjectType(source),
        result = undefined;
    if(isBaseType(source)){
        return source;
    }
    
    let tag = getObjectType(source);
    if(Array.isArray(source)){
        result = initCloneArray(source);
        if(!isDeep){
            return cloneArray(source,result);
        }
    }else{
        if(dataType === objType){
            result = initCloneObject(source);
            if(!isDeep){
                return cloneObject(source,result);
            }
        }else{
            result = initCloneByTag(tag,source);
        }
    }

    let props = Array.isArray(source) ? null : Object.keys(source);
    forEach(props || source,function(subValue,key){//forEach实现，对不是数组的值不会处理
        if(tag === objType){
            subValue = source[props[key]];
        }
        baseAssignValue(result,subValue,baseClone(subValue,isDeep))
    });

    return result;
}

function forEach(array,iteratee){
    let index = -1,
        length = array.length || 0;
    while(++index < length){
        iteratee(array[index],index,array);
    }
}
// dateType = '[object Date]',
// regType = '[object RegExp]',
// NumType = '[object Number]',
// StrType = '[object String]',
// funType = '[object Function]'
function initCloneByTag(tag,source){
    let Cotr = source.constructor;
    switch(tag){
        case dateType:  
            return new Cotr(+source);
        case NumType: case StrType:
            return new Cotr(source); 
        case regType: 
            return closeReg(source);
        case funType: 
            return cloneFun(source);    
    }
}

function closeReg(reg){
    let regexp = new reg.constructor(reg.source,/\w*$/.exec(reg));
    regexp.lastIndex = reg.lastIndex;
    return regexp;
}

function cloneFun(fn){
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


let objects = {
    'a': {a1: 'a1',a2: 'a2'},
    'b': '2',
    'c': new Date(),
    'd': function(msg){console.log(msg)},
    'e': /.\a/ig,
    'f': [1,2,3]
};

let shallow = baseClone(objects,true);
console.log(shallow);
console.log(shallow.a == objects.a);// false


/**
 * 1.对Array进行单独的处理；
 * 2.对Object进行单独的处理；
 * 3.forEach用while重写循环，处理Array和Object的key赋值；
 * 4.其他对象单独处理，function也可以clone（lodash中对function不进行返回）；
 */