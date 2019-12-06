//给定一个字符串， 比如lensProp(a, obj) 返回 'obj.a'的值
//lensProp("a.b", { a: { b: "c" } }); // c
//lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined


function lensProp(key,obj){
  let keys = key.split('.');
  return keys.reduce((result,v) => {
    return result[v] ? result[v] : false;
  },obj);
}

console.log(lensProp("a.b", { a: { b: "c" } }));
console.log(lensProp("a.b.c.d.e.f", { a: { b: "c" } }));
