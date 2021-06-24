/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
  解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

  示例 1：

  输入：nums = [1,2,3]
  输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
  示例 2：

  输入：nums = [0]
  输出：[[],[0]]
 */

  // []
  // 1
  // 12
  // 123
  // 13
  // 2
  // 23
  // 3

  console.log(subsets([1,2,3]));


  function subsets(nums) {
    let result = [];

    let backTrack = function(path,index){

      result.push([...path]);
      if(path.length === nums.length){
        return;
      }

      for(let i = index;i<nums.length;i++){
        path.push(nums[i]);
        backTrack(path,i+1);
        path.pop();
      }

    }

    backTrack([],0);

    return result;

  }