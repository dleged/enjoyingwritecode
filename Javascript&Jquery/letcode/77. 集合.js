/**
给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
 */

function combine(n,k){
  let nums = [];
  for(let i=0;i<n;i++){
    nums.push(i+1);
  }

  let result = [];

  const backTrack = function(path,index){

    if(path.length === k){
      result.push([...path]);
      return;
    }

    for(let i = index; i < nums.length;i++){
      path.push(nums[i]);
      backTrack(path,i + 1);
      path.pop();
    }

  }

  backTrack([],0);

  return result;
}

console.log(combine(4,2));