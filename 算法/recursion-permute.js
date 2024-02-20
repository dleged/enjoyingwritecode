
// 题目：全排列
// 给定一个没有重复数字的序列，返回其所有可能的全排列。
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]
// 要求：
// 请编写一个函数 permute，接收一个不包含重复数字的整数数组 nums，返回其所有可能的全排列数组。这个题目希望你练习回溯算法。如果需要更多提示或其他问题，请告诉我！


function permute(nums){
  const result = [];
  const length = nums.length;

  function recursion(paths,visited){
    if(paths.length === length) return result.push([...paths]);

    for(let i = 0;i<length;i++){

      if(visited[i]) continue;
      paths.push(nums[i]);
      visited[i] = true;
      recursion(paths,visited)
      paths.pop();
      visited[i] = false;

    }
  }


  recursion([],new Array(length).fill(false));


  return result;
}


console.log(permute([1,2,3]));