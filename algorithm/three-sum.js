// 输入：nums = [-1, 0, 1, 2, -1, -4]
// 输出：[[-1, -1, 2], [-1, 0, 1]]
// 解释：-1 + (-1) + 2 = 0，-1 + 0 + 1 = 0

function threeSum(nums) {

  // [-4,-1,-1,0,1,2]
  // -1 -1,[-1,-1,0,1,2,2,2,2] -> -1 -1 2 
  // -1,-1 [0,1,2] 

  if (!nums || nums.length < 3) {
    return [];
  }
  const result = [];

  nums = nums.sort((a, b) => a - b);
  let first = 0;
  while (first < nums.length) {

    if (nums[first] > 0) break;

    while (nums[first] === nums[first - 1]) {
      first++;
    }

    let left = first;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[first] + nums[left] + nums[right];

      if (sum === 0) {
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        result.push([nums[first], nums[left], nums[right]]);
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left++;
      }
    }

    first++;

  }

  return result;
}


console.log(threeSum([-1, 0, 1, 2, -1, -4])); // 预期输出: [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([])); // 预期输出: []
console.log(threeSum([0])); // 预期输出: []