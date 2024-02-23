// 题目：组合总和
// 给定一个无重复元素的数组 candidates 和一个目标数 target，找出 candidates 中所有可以使数字和为 target 的组合。
// candidates 中的数字可以无限制重复被选取，但是一个组合中的数字不能重复选取。
// 示例：
// 输入: candidates = [2,3,6,7], target = 7,
// 所求解集为:
// [
//   [7],
//   [2,2,3]
// ]
// 要求：
// 请编写一个函数 combinationSum，接收一个不包含重复数字的整数数组 candidates 和一个目标值 target，返回所有和为 target 的不重复组合数组。这个题目希望你练习回溯算法。如果需要更多提示或其他问题，请告诉我！


function combinationSum(nums,target){
  const result = [];
  const length = nums.length;
  nums = nums.sort((a,b) => a > b);

  function recursion(paths,index,sum){

    if(sum === target){
      return result.push([...paths]);
    }

    for(let i = index;i<length;i++){

      let curSum = sum + nums[i];
      // 大于目标值，退出循环
      if(curSum > target){
        break;
      }

      paths.push(nums[i]);
      recursion(paths,i,curSum);
      paths.pop();

      // 去重
      while(i+1<length && nums[i+1] === nums[i]){
        i++;
      }
    }

  }

  recursion([],0,0);


  return result;
}



console.log(combinationSum([2, 3, 6, 7], 7));
// 预期输出：
// [
//   [2, 2, 3],
//   [7]
// ]

console.log(combinationSum([2, 3, 5], 8));
// 预期输出：
// [
//   [2, 2, 2, 2],
//   [2, 3, 3],
//   [3, 5]
// ]
