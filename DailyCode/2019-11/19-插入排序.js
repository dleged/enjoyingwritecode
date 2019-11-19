//插入排序
//时间复杂度 O(n) - O(n²)
/*
  1.从第二项开始，插入已经排好序的数列；
  2.依次比较左边项的大小，找到符合要求的项后插入进去；
  3.直到最后一位数插入数组中，即完成。
*/

let k = 0;

function inserSort(arr){
  let len = arr.length;
  for(let i = 1; i < len;i++){
    aaa:
    for(let j = 0; j < i;j++){
      console.log(k++)
      if(arr[i] < arr[j]){
        arr.splice(j,0,arr.splice(i,1)[0]);
        break;
      }
    }
  }
  return arr;
}


let arr = [2321,3213,4,324,324,31,312,3,13,1,4,32,5432,532,1];
console.log(inserSort(arr));
