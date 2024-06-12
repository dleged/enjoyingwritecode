// 题目描述：
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  // 在这里实现算法


  if (strs.length <= 1) {
    return strs[0] || '';
  }

  let first = strs.shift();
  let firstLen = first.length;
  let i = 0;
  let commonPrefix = '';

  while (i <= firstLen) {
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== first[i]) {
        i = firstLen;
        break;
      }
      if (j === strs.length - 1) {
        commonPrefix = first.slice(0, i + 1);
      }
    }
    i++;
  }


  return commonPrefix;

}

// 测试用例1
// 输入: ["flower", "flow", "flight"]
// 输出: "fl"
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // 应输出 "fl"

// 测试用例2
// 输入: ["dog", "racecar", "car"]
// 输出: ""
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // 应输出 ""

// 测试用例3
// 输入: ["interstellar", "internet", "interval"]
// 输出: "inte"
console.log(longestCommonPrefix(["interstellar", "internet", "interval"])); // 应输出 "inter"

// 测试用例4
// 输入: ["apple", "ape", "april"]
// 输出: "ap"
console.log(longestCommonPrefix(["apple", "ape", "april"])); // 应输出 "ap"

// 测试用例5
// 输入: ["single"]
// 输出: "single"
console.log(longestCommonPrefix(["single"])); // 应输出 "single"

// 测试用例6
// 输入: []
// 输出: ""
console.log(longestCommonPrefix([])); // 应输出 ""

// 测试用例7
// 输入: ["single"]
// 输出: "single"
console.log(longestCommonPrefix(["flower", "flower"])); // 应输出 "flower"
