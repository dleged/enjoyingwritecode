// 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
// 说明：本题中，我们将空字符串定义为有效的回文串。

// 示例 1：
// 输入: "A man, a plan, a canal: Panama"
// 输出: true

// 示例 2：
// 输入: "race a car"
// 输出: false

// 请实现函数 isPalindrome(s: string): boolean 来解决这个问题，并给出测试用例。


function isPalindrome(s) {
  // 空方法，待实现
}

// 测试用例 1
console.log(isPalindrome("A man, a plan, a canal: Panama")); // 应输出 true

// 测试用例 2
console.log(isPalindrome("race a car")); // 应输出 false

// 测试用例 3
console.log(isPalindrome(" ")); // 应输出 true

// 测试用例 4
console.log(isPalindrome("")); // 应输出 true

// 测试用例 5
console.log(isPalindrome("No 'x' in Nixon")); // 应输出 true

// 测试用例 6
console.log(isPalindrome("Was it a car or a cat I saw?")); // 应输出 true