// 有效的括号
// 给定一个只包括 '('、')'、'{'、'}'、'[' 和 ']' 的字符串，判断字符串是否有效。
// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 注意空字符串可被认为是有效字符串。

function isValid(s) {
  // your code here

  let charMap = new Map([
    [')', '('],
    ['}', '{'],
    [']', '[']
  ]);

  let stack = [];

  for (let i = 0; i < s.length; i++) {
    if (charMap.has(s[i])) {
      //  最后一个值和遍历到的值不是一对，或者 stack 里面根本没有值插入的是闭合符号
      if(stack[stack.length - 1] !== charMap.get(s[i]) || stack.length === 0){
        return false;
      }
      stack.pop();
    } else {
      stack.push(s[i]);
    }
  }

  return !stack.length;
}

console.log(isValid("()"));        // 预期输出：true
console.log(isValid("()[]{}"));    // 预期输出：true
console.log(isValid("(]"));        // 预期输出：false
console.log(isValid("([)]"));      // 预期输出：false
console.log(isValid("{[]}"));      // 预期输出：true
