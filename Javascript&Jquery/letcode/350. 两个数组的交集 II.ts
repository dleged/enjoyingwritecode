// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2,2]

// 示例 2:
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[4,9]
//

// 说明：

// 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
// 我们可以不考虑输出结果的顺序。
// 进阶：

// 如果给定的数组已经排好序呢？你将如何优化你的算法？
// 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
// 如果 nums2 的元素存储在磁盘上，内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？

function intersect(nums1: number[], nums2: number[]): number[] {
  let ans = [];

  nums1 = nums1.sort((a,b) => a - b);
  nums2 = nums2.sort((a,b) => a - b);

  for (let i = 0; i < nums1.length; i++) {
    const num = binarySearch(nums1[i], nums2);
    if (typeof num === 'number') {
      ans.push(num);
    }
  }

  function binarySearch(num: number, nums: number[]): number | null {
    let l = 0;
    let r = nums.length - 1;
    
    while (l <= r) {
      const mid = l + ((r - l) >> 1);
      if (nums[mid] === num) {
        nums.splice(mid, 1);
        return num;
      }

      if (nums[mid] < num) {
        l = mid + 1;
      } else {
        r = mid - 1;
      }
    }

    return null;
  }

  return ans;
}

// console.log(intersect([1, 2, 2, 1], [2, 2]));

console.log(intersect([4,7,9,7,6,7],[5,0,0,6,1,6,2,2,4]));
