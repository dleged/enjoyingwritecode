//二分查找 - binarySearch
//O(log2n) 在数学中，以 2 为底的对数（log2 n）是为了得到 n 必须将 2 乘方的指数。即，对于任何实数 x;

function binarySearch(arr,target){
  let max = arr.length - 1;
  let min = 0;
  while (min < max) {
    let mid = Math.floor((max + min) / 2);
    if(target > arr[mid]){
      min = mid + 1;
    }else if(target < arr[mid]){
      max = mid - 1;
    }else{
      return mid;
    }
  }
  return -1;
}

binarySearch([1,2,3,4,5,6,7,8,9],8);
