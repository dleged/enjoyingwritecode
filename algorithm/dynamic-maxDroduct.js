// 题目：乘积最大子数组

// 给定一个整数数组 nums ，找到一个具有最大乘积的连续子数组（子数组至少包含一个数字），返回其最大乘积。

// 状态转移方程可以如下定义：

// 对于 maxProduct[i]：

// 如果 nums[i] 是正数，那么 maxProduct[i] = max(nums[i], maxProduct[i-1] * nums[i])
// 如果 nums[i] 是负数，那么 maxProduct[i] = max(nums[i], minProduct[i-1] * nums[i])
// 如果 nums[i] 是0，那么 maxProduct[i] = 0
// 对于 minProduct[i]：

// 如果 nums[i] 是正数，那么 minProduct[i] = min(nums[i], minProduct[i-1] * nums[i])
// 如果 nums[i] 是负数，那么 minProduct[i] = min(nums[i], maxProduct[i-1] * nums[i])
// 如果 nums[i] 是0，那么 minProduct[i] = 0


function maxProduct(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let max = nums[0];
  let min = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
      [max, min] = [min, max];
    }

    max = Math.max(num, max * num);
    min = Math.min(num, min * num);


    result = Math.max(result, max);

  }


  return result;
}

// 测试用例1
console.log(maxProduct([2, 3, -2, 4])); // 输出: 6

// 测试用例2
console.log(maxProduct([-2, 0, -1])); // 输出: 0

// 测试用例3
console.log(maxProduct([4, -2, 3, 7, -6])); // 输出: 1008

// 测试用例4
console.log(maxProduct([-2, 3, -4])); // 输出: 24
