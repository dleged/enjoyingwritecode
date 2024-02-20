
//给定一个有序数组 nums 和目标值 target，请实现一个函数，找到比目标值 target 大的最小数，以及比目标值 target 小的最大数。

function searchMinMax(nums,target){


  function findMax(nums,target){
    let left = -1;
    let right = nums.length;

    while(left + 1 < right){
      let mid = parseInt((left + right)/2);

      if(target >= nums[mid]){
        left = mid;
      }else{
        right = mid;
      }
    }

    return nums[right] || -1;
  }

  function findMin(nums,target){
    let left = -1;
    let right = nums.length;

    while(left + 1 < right){

      let mid = parseInt((left + right)/2);
      if(target <= nums[mid]){
        right = mid;
      }else{
        left = mid;
      }

    }
    return nums[left] || -1;
  }

  let max = findMax(nums,target);
  let min = findMin(nums,target);

  return [max,min];

}


console.log(searchMinMax([2, 3, 5, 8, 10], 5)); // 输出 [8, 3]
console.log(searchMinMax([2, 3, 5, 8, 10], 6)); // 输出 [8, 5]
console.log(searchMinMax([2, 3, 5, 8, 10], 9)); // 输出 [10, 8]
console.log(searchMinMax([2, 3, 5, 8, 10], 1)); // 输出 [2, -1]
console.log(searchMinMax([2, 3, 5, 8, 10], 11)); // 输出 [-1, 10]
