// 题目：母异位词分组
// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。
// 编写一个函数来将字符串数组中的字母异位词组合在一起。
// 示例：

// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 提示：

// 所有输入均为小写字母。
// 不考虑答案输出的顺序。
// 这个题目的解题思路通常是使用哈希表来记录字母异位词。遍历字符串数组，将每个字符串排序后作为键，将原始字符串加入对应键的值中。这样，相同字母异位词的排序后的形式会得到相同的键，从而归入同一组。

// 测试用例：

function groupAnagrams(strs) {
  const map = {};

  strs.forEach((str) => {

    const newStr = str.split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');

    if (map[newStr]) {
      map[newStr] = [...map[newStr], newStr];
    } else {
      map[newStr] = [newStr];
    }

  });
  return Object.keys(map).reduce((pre,cur) => {pre.push(map[cur]);return pre;},[]);

}

const result = groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat","你我他","我你他"]);
console.log(result);
// 预期输出：
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]