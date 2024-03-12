// 题目：给定一个字符串，找出其中最长的回文子串。假设输入的字符串长度不超过 1000。

// 示例：

// 输入: "babad"
// 输出: "bab" 或 "aba"

// 输入: "cbbd"
// 输出: "bb"

// 请实现一个函数 longestPalindrome(s: string): string 来解决该问题，并给出测试用例。

// babad
//  |
function longestPalindrome(str) {

  let maxStr = '';

  for (let i = 0; i < str.length; i++) {

    let left = i - 1;
    let right = i + 1;
    let temp = '';


    // 相邻情况 bb
    if (str[i] === str[right]) {
      left = i;
    } else {
      temp = str[i];
    }

    // 从中心点扩展
    while (left > -1 && right < str.length && str[left] === str[right]) {
      temp = str[left] + temp;
      temp += str[right];
      left--;
      right++;
    }

    maxStr = maxStr.length > temp.length ? maxStr : temp;

  }

  return maxStr;
}



// 用例
console.log(longestPalindrome("babad")); // 应输出 "bab" 或 "aba"
console.log(longestPalindrome("cbbd"));  // 应输出 "bb"
console.log(longestPalindrome("a"));     // 应输出 "a"
console.log(longestPalindrome("ac"));    // 应输出 "a"
console.log(longestPalindrome("bb"));    // 应输出 "bb"
