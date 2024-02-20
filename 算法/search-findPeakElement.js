// 峰值元素被定义为比其邻居大的元素。给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到任何一个峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，你可以返回任何一个峰值的索引。
// 你可以假设 nums[-1] = nums[n] = -∞，其中 n 是数组的长度。

// 示例：
// 输入: nums = [1, 2, 3, 1]
// 输出: 2
// 解释: 索引 2 处的数字 3 是一个峰值元素。

function findPeakElement(nums){
  if(nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;


  while(left <= right){
    let mid = parseInt((left + right )/2);

    if((nums[mid-1] || 0) < nums[mid] && nums[mid] > (nums[mid+1] || 0)){
      return mid;
    }
    
    if(nums[mid] < nums[mid+1]){
      left = mid + 1;
    }else {
      right = mid - 1;
    }

  }
  return -1;
}



console.log(findPeakElement([1, 2, 3, 1])); // 输出 2
console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])); // 输出 5 或 1（多个峰值的情况）
console.log(findPeakElement([1, 2, 3])); // 输出 2
console.log(findPeakElement([3, 2, 1])); // 输出 0
