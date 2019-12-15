function merge(...objs){
  return [...objs].reduce((acc,obj) => {
    return Object.keys(obj).reduce((a,v) => {
      acc[v] = acc.hasOwnProperty(v) ? [].concat(acc[v]).concat(obj[v]) : obj[v];
      return acc;
    },{})
  },{})
}

const object = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1
};
const other = {
  a: { z: 3 },
  b: [2, 3],
  c: 'foo'
};
console.log(merge(object, other)); // { a: [ { x: 2 }, { y: 4 }, { z: 3 } ], b: [ 1, 2, 3 ], c: 'foo' }


function omit(obj,arr){
  return Object.keys(obj).filter((v) => !arr.includes(v))
         .reduce((acc,v) => (acc[v] = obj[v],acc),{})
}
console.log(omit({ a: 1, b: '2', c: 3 }, ['b'])); // { 'a': 1, 'c': 3 }
