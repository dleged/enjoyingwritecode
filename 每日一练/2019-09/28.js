//实现Object.create
//Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。


Object._create = function(proto){
  let obj = new Object();
  obj.__proto__ = proto;
  return obj;
}

let obj = {a:1};

let exmple = Object._create(obj);
exmple.a = 2;
console.log(obj.a,exmple.a);



function eq(one,other){
  return one === other || (one !== one && other !== other);
}

function assocIndexOf(array,key){
  let { length } = array;
  while(length--){
    if(eq(array[length][0],key)){
      return length
    }
  }
  return -1;
}
