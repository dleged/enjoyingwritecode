function last(arr){
  return arr && arr.length ? arr[arr.length - 1] : undefined;
}

console.log(last([1, 2, 3])); // 3
console.log(last([])); // undefined
console.log(last(null)); // undefined


function minN(arr,n = 1){
  return arr.sort((a,b) => a - b).slice(0,n);
}

console.log(minN([1, 2, 3])); // [1]
console.log(minN([1, 2, 3], 2)); // [1,2]


function similarity(a,b){
  return a.filter((v) => b.includes(v));
}

console.log(similarity([1, 2, 3], [1, 2, 4])); // [1, 2]
