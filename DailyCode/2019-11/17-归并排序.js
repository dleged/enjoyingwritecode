//归并排序
// 复杂度 O(nlogn) 分而治之
function mergeSort(arr){
  let len = arr.length;
  if(len < 2){
    return arr;
  }
  let mid = Math.floor(len/2);
  let left = arr.slice(0,mid);
  let right = arr.slice(mid);
  return merge(mergeSort(left),mergeSort(right));
  function merge(left,right){
    let result = [];
    while(left.length && right.length){
      if(left[0] <= right[0]){
        result.push(left.shift());
      }else{
        result.push(right.shift());
      }
    }

    while(left.length){
      result.push(left.shift());
    }

    while(right.length){
      result.push(right.shift());
    }
    console.log(result);
    return result;
  }
}

console.log(mergeSort([12,3,346,45,32,23,12,43,65,8,11,9,67,56,45,34]));
