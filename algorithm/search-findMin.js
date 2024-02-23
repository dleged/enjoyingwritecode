// 当然，请看以下题目：

// 题目：寻找旋转排序数组中的最小值
// 假设一个按照升序排序的数组在某个未知的点上进行了旋转（例如 [0, 1, 2, 4, 5, 6, 7] 经过了旋转变成了 [4, 5, 6, 7, 0, 1, 2]）。请找出其中最小的元素。你可以假设数组中不存在重复元素。

// 示例：

// plaintext
// Copy code
// 输入: [3, 4, 5, 1, 2]
// 输出: 1
// 解释: 数组中的最小元素为 1。


function findMin(nums){

  if(nums.length === 1) return 0;
  let left = 0;
  let right = nums.length - 1;

  while(left < right){
    let mid = parseInt((left + right)/2);
    
    if(nums[mid] < nums[right]){// 右边有序
      if(nums[mid] < nums[mid-1]){
        return nums[mid];
      }
      right = mid - 1;
    }else {
      left = mid + 1;
    }
    return nums[left];
  }

}


// console.log(findMin([3, 4, 5, 1, 2])); // 输出 1
// console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 输出 0
console.log(findMin([11, 13, 15, 17])); // 输出 11
// console.log(findMin([2, 1])); // 输出 1
