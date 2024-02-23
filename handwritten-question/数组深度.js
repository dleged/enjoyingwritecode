
let arr = [1,3,3,[4,6,7,[5,6,7,43,[23,4]]]]


let max = 0;
function getDeep(arr, level) {
  max = Math.max(level,max);
  for (let i = 0; i < arr.length; i++) {
    if(Array.isArray(arr)){
      getDeep(arr[i],level+1);
    }
  }
}

getDeep(arr, 0);
console.log(max);