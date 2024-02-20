// 题目：组合总和 II
// 给定一个数组 candidates 和一个目标值 target，找出 candidates 中所有可以使数字和为 target 的唯一组合。candidates 中的每个数字在每个组合中只能使用一次。
// 注意：
// 所有数字（包括目标值）都是正整数。
// 解集不能包含重复的组合。
// 示例：
// 输入: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8,
// 所求解集为:
// [
//   [1, 7],
//   [1, 2, 5],
//   [2, 6],
//   [1, 1, 6]
// ]
// 要求：
// 请编写一个函数 combinationSum2，接收一个整数数组 candidates 和目标值 target，返回所有和为目标值的不重复组合。希望这个题目能够帮助你练习回溯剪枝的算法。如果需要更多提示或其他问题，请告诉我！


function combinationSum2(nums, target) {

  nums = nums.sort((a, b) => a - b);


  let result = [];

  function recursion(path, sum, index) {

    if (sum === target) {
      return result.push([...path]);
    }

    // 去重

    for (let i = index; i < nums.length; i++) {
      if (nums[i] > target - sum) {
        return;
      }

      // 从开始循环处之后去重 *
      if (i > index && nums[i] === nums[i - 1]) {
        continue; // 跳过重复元素
      }


      path.push(nums[i]);
      recursion(path, sum + nums[i], i + 1);
      path.pop();
    }

  }

  recursion([], 0, 0);
  return result;
}



console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
// 预期输出：[[1, 1, 6], [1, 2, 5], [1, 7], [2, 6]]

console.log(combinationSum2([1, 2, 2, 5, 5], 5));
// 预期输出：[[1, 2, 2], [5]]

console.log(combinationSum2([2, 3, 6, 7], 7));
// 预期输出：[[7]]

console.log(combinationSum2([2], 1));
// 预期输出：[]，因为数组中的唯一元素不足以组成和为 1 的组合
