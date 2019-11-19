//冒泡排序
//复杂度 O(n) - O(n²)

// 冒泡排序（Bubble Sort）
// 实现思路:
//
// 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
//
// 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。
//
// 针对所有的元素重复以上的步骤，除了最后一个。
//
// 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

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
