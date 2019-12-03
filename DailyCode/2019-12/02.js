/*
  在一个循环有序的列表中查找指定的值。
  比如[6,7,8,1,2,3,4,5]就是一个循环有序数组。
*/

function find(nums,target){
  let start = 0;
  let end = nums.length - 1;

  while(start <= end){
    let mid = start + (end - start) >> 1;
    if(nums[mid] === target) return mid;
    //[start,mid]有序
    if(nums[start] <= nums[mid]){
      //target 在 [start,mid]中
      if(target <= nums[mid] && target >= nums[start]){
        end = mid -1;
      }else{
        //target 在 [mind,end]中
        start = mid + 1;
      }
    }else{
      //[mid,end]有序
      //target 在 [mid,end]中
      if(target >= nums[mid] && target <= nums[end]){
        start = mid + 1;
      }else{
        //target 在 [start,mid]中
        end = mid - 1;
      }
    }
  }
  return -1;
}
// console.log(find([6,7,8,1,2,3,4,5],1));
// console.log(find([6,7,8,1,2,3,4,5],7));
console.log(find([6,7,8,1,2,3,4,5],4));
