// 题目：字符串中的第一个唯一字符
// 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 - 1。

// 注意：你可以假定该字符串只包含小写字母。
// 示例
// 示例 1：
// 输入：s = "leetcode"

// 输出：0

// 解释：字符 l 是第一个不重复的字符，它的索引为 0。

// 示例 2：
// 输入：s = "loveleetcode"

// 输出：2

// 解释：字符 v 是第一个不重复的字符，它的索引为 2。


function firstUniqChar(s) {
  let map = {};
  for(let i = 0;i<s.length;i++){
    if(map[s[i]]){
      map[s[i]]++;
    }else{
      map[s[i]] = 1;
    }
  }

  for(let i = 0;i<s.length;i++){
    if(map[s[i]] === 1) return i;
  }

  return -1;
}


console.log(firstUniqChar("leetcode"));     // 预期输出：0
console.log(firstUniqChar("loveleetcode")); // 预期输出：2
console.log(firstUniqChar("cc"));           // 预期输出：-1