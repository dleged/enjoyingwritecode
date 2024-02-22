// 题目：最大子序和
// 给定一个整数数组 nums，找到一个具有最大和的连续子数组（子数组要求至少包含一个元素），返回其最大和。
// 输入: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// 输出: 6
// 解释: 连续子数组 [4, -1, 2, 1] 的和最大，为 6。
// 要求：
// 请编写一个函数 maxSubArray，接收一个整数数组 nums，返回该数组中具有最大和的连续子数组的和。这个题目考察你对动态规划的理解和应用。如果需要更多提示或其他问题，请告诉我！


function maxSubArray(nums) {

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(currentSum, maxSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// 预期输出: 6

console.log(maxSubArray([1]));
// 预期输出: 1

console.log(maxSubArray([-1]));
// 预期输出: -1

console.log(maxSubArray([-2, -1]));
// 预期输出: -1
