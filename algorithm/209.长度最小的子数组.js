
// 题目：给定一个包含 n 个正整数的数组和一个正整数 target，请找出该数组中满足其和 ≥ target 的长度最小的连续子数组，返回其长度。如果不存在符合条件的子数组，则返回 0。


// [2, 3, 1, 2, 4, 3] ->  sum >= 7
// left
//         right -> 8 
//  left   right -> 6
// 窗口内的值 sum
// 窗口的值大于等于 sum, 比较结果放入，缩小窗口 left++
// 小于 sum，right ++
function minSubArrayLen(nums, target) {

  let sum = 0;
  let left = 0;
  let result = Infinity;

  // 扩大窗口
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];
    // 符合条件
    while (sum >= target) {
      result = Math.min(result, right - left + 1);
      // 符合条件的情况下，缩小窗口
      sum -= nums[left];
      left++;
    }

    // for 循环 right++
  }



  return result === Infinity ? 0 : result;
}


// 测试用例
console.log(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 应输出 2
// console.log(minSubArrayLen([1, 4, 4], 4)); // 应输出 1
// console.log(minSubArrayLen([1, 1, 1, 1, 1, 1, 1, 1], 11)); // 应输出 0
// console.log(minSubArrayLen([1, 2, 3, 4, 5], 11)); // 应输出 3