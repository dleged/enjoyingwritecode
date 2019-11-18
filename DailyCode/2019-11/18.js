//冒泡排序
//复杂度 O(n²)

function bubleSort(arr){
  let temp;
  for(let i = 0,len = arr.length; i < len;i++){//冒泡第一个，第二个，第三个...
    for(let j = 0,len = arr.length; j < len - 1 -i; j++){//依次比大小
      if(arr[j] > arr[j+1]){
        temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubleSort([232,123,41,213,6,83,23,4,1212]))
