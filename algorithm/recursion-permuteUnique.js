
// 题目：全排列 II
// 给定一个可包含重复数字的数组 nums，返回所有不重复的全排列。
// 输入: [1, 1, 2]
// 输出:
// [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1]
// ]
// 要求：
// 请编写一个函数 permuteUnique，接收一个包含重复数字的整数数组 nums，返回所有不重复的全排列数组。希望这个题目能够帮助你练习回溯算法。如果需要更多提示或其他问题，请告诉我！


function permuteUnique(nums) {
  nums = nums.sort((a, b) => a - b);
  let length = nums.length;
  let result = [];

  function recursion(paths, visited) {

    if (paths.length === length) {
      return result.push([...paths]);
    }

    for (let i = 0; i < length; i++) {

      // 去重
      if (visited[i] || (i > 0 && !visited[i - 1]) && nums[i] === nums[i - 1]) {
        continue;
      }

      paths.push(nums[i]);
      visited[i] = true;
      recursion(paths, visited);
      paths.pop();
      visited[i] = false;


    }


  }

  recursion([], new Array(length).fill(false));

  return result;
}


console.log(permuteUnique([1, 1, 2]));
// 预期输出：
// [
//   [1, 1, 2],
//   [1, 2, 1],
//   [2, 1, 1]
// ]

console.log(permuteUnique([2, 2, 1, 1]));
// 预期输出：
// [
//   [1, 1, 2, 2],
//   [1, 2, 1, 2],
//   [1, 2, 2, 1],
//   [2, 1, 1, 2],
//   [2, 1, 2, 1],
//   [2, 2, 1, 1]
// ]
