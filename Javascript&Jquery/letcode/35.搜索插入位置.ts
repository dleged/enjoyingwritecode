// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

// 请必须使用时间复杂度为 O(log n) 的算法。

// 示例 1:

// 输入: nums = [1,3,5,6], target = 5
// 输出: 2
// 示例 2:

// 输入: nums = [1,3,5,6], target = 2
// 输出: 1
// 示例 3:

// 输入: nums = [1,3,5,6], target = 7
// 输出: 4
// 示例 4:

// 输入: nums = [1,3,5,6], target = 0
// 输出: 0
// 示例 5:

// 输入: nums = [1], target = 0
// 输出: 0


//说白了就是要找 l - 1 < positon <= j

function searchInsert(nums: number[], target: number): number {

  let l = 0;
  let ans = nums.length;
  let r = ans - 1;

  while ( l <= r){
    const mid = Math.floor(l + (r - l)/2);
    if(target <= nums[mid]){
      ans = mid;
      r = mid - 1;
    }else{
      l = mid + 1;
    }
  }

  return ans;

};

console.log(searchInsert([1,3,5,6],7));