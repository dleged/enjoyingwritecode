// 题目：括号生成
// 给定一个整数 n，生成所有由 n 对括号组成的合法组合。
// 输入: 3
// 输出: [
//        "((()))",
//        "(()())",
//        "(())()",
//        "()(())",
//        "()()()"
//      ]
// 要求：
// 请编写一个函数 generateParenthesis，接收一个整数 n，返回所有可能的、由 n 对括号组成的合法组合的数组。这个题目希望你练习回溯算法。如果需要更多提示或其他问题，请告诉我！


function generateParenthesis(n) {

  const result = [];

  function backtrack(str, left, right) {

    if (str.length === 2 * n) {
      return result.push(str);
    }

    if (left < n) {
      backtrack(str + '(', left + 1, right);
    }

    if (right < left) {
      backtrack(str + ')', left, right + 1);
    }

  }

  backtrack('', 0, 0);


  return result;
}


console.log(generateParenthesis(3));
// 预期输出：
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

console.log(generateParenthesis(1));
// 预期输出：
// [
//   "()"
// ]
