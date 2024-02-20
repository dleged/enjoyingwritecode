// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]
// 要求：
// 请编写一个函数 moveZeroes，接收一个整数数组 nums，将数组中所有的 0 移动到末尾，同时保持非零元素的相对顺序。这个题目考察你如何在遍历数组时移动元素位置。如果需要更多提示或其他问题，请告诉我！

function moveZeroes(nums) {

  let noZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] !== 0) {
      nums[noZeroIndex] = nums[i];
      noZeroIndex++;
    }
  }

  for (let i = noZeroIndex; i < nums.length; i++) {
    nums[i] = 0;
  }

  return nums;
}

let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);
// 预期输出: [1, 3, 12, 0, 0]

let nums2 = [0, 0, 1, 2, 0, 4, 5, 0];
moveZeroes(nums2);
console.log(nums2);
// 预期输出: [1, 2, 4, 5, 0, 0, 0, 0]
