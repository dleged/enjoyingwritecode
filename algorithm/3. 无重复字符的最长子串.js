// 题目描述：
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
  // 在这里实现算法pwwkew
  //  left = 2,right = 2,3,4,5-

  // let result = 0;
  // let left = 0, right = 0;
  // let map = new Map();

  // while (right < s.length) {
  //   let str = s[right];
  //   if (!map.has(str)) {
  //     map.set(str, 1);
  //     right++;
  //     result = Math.max(result, right - left);
  //   } else {
  //     map.delete(s[left]);
  //     left++;
  //   }

  // }

  // return result;

  // pwwkew arr[[w,k,e]]
  let arr = [];
  let max = 0;
  let i = 0;
  while (i < s.length) {
    const index = arr.indexOf(s[i]);

    if (index !== -1) {
      arr.splice(0, index + 1);
    }
    arr.push(s[i]);

    max = Math.max(max, arr.length);
    i++;

  }

  return max;
}


// 测试用例1
// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
console.log(lengthOfLongestSubstring("abcabcbb")); // 应输出 3

// 测试用例2
// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
console.log(lengthOfLongestSubstring("bbbbb")); // 应输出 1

// 测试用例3
// 输入: s = "pwwkew"
// 输出: 3
// 解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
console.log(lengthOfLongestSubstring("pwwkew")); // 应输出 3

// 测试用例4
// 输入: s = ""
// 输出: 0
console.log(lengthOfLongestSubstring("")); // 应输出 0

// 测试用例5
// 输入: s = "au"
// 输出: 2
console.log(lengthOfLongestSubstring("au")); // 应输出 2

// 测试用例6
// 输入: s = "dvdf"
// 输出: 3
console.log(lengthOfLongestSubstring("dvdf")); // 应输出 3
