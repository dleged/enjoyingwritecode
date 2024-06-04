// 题目描述：
// 给你一个字符串 s，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。
// 单词是指仅由字母组成、不包含任何空格字符的最大子字符串。

/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLastWord(s) {
    // 在这里实现算法

    s = s.trim();

    let length = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        length++;
        if (i - 1 < 0 || s[i - 1] === ' ') {
            return length;
        }
    }
}

// 测试用例1
// 输入: "Hello World"
// 输出: 5
console.log(lengthOfLastWord("Hello World")); // 应输出 5

// 测试用例2
// 输入: "   fly me   to   the moon  "
// 输出: 4
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // 应输出 4

// 测试用例3
// 输入: "luffy is still joyboy"
// 输出: 6
console.log(lengthOfLastWord("luffy is still joyboy")); // 应输出 6

// 测试用例4
// 输入: "a"
// 输出: 1
console.log(lengthOfLastWord("a")); // 应输出 1

// 测试用例5
// 输入: "a "
// 输出: 1
console.log(lengthOfLastWord("a ")); // 应输出 1