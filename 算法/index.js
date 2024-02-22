// 在排序数组中查找元素的第一个和最后一个位置
// 给定一个按照升序排列的整数数组 nums，以及一个目标值 target。如果 target 在数组中，则返回它的索引范围，如果不存在，则返回 [-1, -1]。

// 示例：
// plaintext
// Copy code
// 输入: nums = [5, 7, 7, 8, 8, 10], target = 8
// 输出: [3, 4]

// 输入: nums = [5, 7, 7, 8, 8, 10], target = 6
// 输出: [-1, -1]
// 要求：
// 请编写一个函数 searchRange，接收一个升序排列的整数数组 nums 和一个目标值 target，返回目标值在数组中的起始位置和结束位置（如果存在），若不存在则返回 [-1, -1]。

function searchRange(nums, target) {
  if (nums.length === 0) {
    return [-1, -1];
  }

  function findIndex(nums, isLeft) {
    let index = -1;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
      let mid = parseInt((left + right) / 2);
      if (nums[mid] === target) {
        index = mid;
        if (isLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return index;
  };

  let left = findIndex(nums, true);
  let right = findIndex(nums, false);

  return [left, right];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // 输出 [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // 输出 [-1, -1]
console.log(searchRange([2, 2], 2)); // 输出 [0, 1]
console.log(searchRange([1, 2, 3, 3, 3, 3, 4, 5, 9], 3)); // 输出 [2, 5]
