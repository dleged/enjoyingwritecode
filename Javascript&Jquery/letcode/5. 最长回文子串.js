/*给你一个字符串 s，找到 s 中最长的回文子串。
示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
示例 3：

输入：s = "a"
输出："a"
示例 4：

输入：s = "ac"
输出："a"

*/

function getPalindrome(str) {
  if (str.length < 2) {
    return str;
  }
  let result = '';

  for (let i = 0; i < str.length; i++) {
    map(i, i);
    map(i, i + 1);
  }

  function map(i, j) {
    while (i > -1 && j < str.length && str[i] === str[j]) {
      i--;
      j++;
    }
    if (j - i - 1 > result.length) {
      result = str.slice(i, j - i - 1);
    }
  }

  return result;
}

console.log(getPalindrome('babad'));
