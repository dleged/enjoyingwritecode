//打家劫舍

// 你是一名专业的小偷，计划偷窃沿街的房屋。每间房屋都存放有一定数量的财产，相邻的房屋装有相互连通的防盗系统，如果小偷同时选择相邻的房屋进行偷窃，系统会自动报警。

// 给定一个代表每个房屋存放财产的非负整数数组 nums，请你计算在不触动警报装置的情况下，能够偷窃到的最高金额。

// 函数签名：

/**
 * @param {number[]} nums
 * @returns {number}
 */
function rob(nums) {

  let len = nums.length;

  if (len === 1) {
    return nums[0];
  } else if (len === 2) {
    return Math.max(nums[0], nums[1]);
  }

  const dp = Array.from(len).fill(0);
  dp[0] = nums[0];
  dp[1] = nums[1];

  // 动态转移方程，max = Math.max(dp[i-2] + nums[i],dp[i-1]);
  // 偷到每个房间有两个选择：偷或者不偷
  // 偷：dp[i-2] + nums[i]
  // 不偷： dp[i-1]
  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[len - 1];
}

const result1 = rob([1, 2, 3, 1]);
console.log(result1);
// 预期输出: 4
// 解释: 偷窃 1 号房屋 (金额 = 1)，然后偷窃 3 号房屋 (金额 = 3)。
//      偷窃到的最高金额 = 1 + 3 = 4 。

const result2 = rob([2, 7, 9, 3, 1]);
console.log(result2);
// 预期输出: 12
// 解释: 偷窃 1 号房屋 (金额 = 2)，然后偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。
//      偷窃到的最高金额 = 2 + 9 + 1 = 12 。