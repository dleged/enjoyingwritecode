// 好的，以下是一套字母异位词分组的算法题及其测试用例：

// 题目：字母异位词分组

// 给定一个字符串数组，将字母异位词组合在一起。字母异位词指字母相同，但排列不同的字符串。

// 示例：

// plaintext
// Copy code
// 输入: ["eat", "tea", "tan", "ate", "nat", "bat"]
// 输出: [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// 测试用例：

function groupAnagrams(str) {

  const map = new Map();

  for (let i = 0; i < str.length; i++) {

    // 排序，确定是否一致
    let s = str[i].split('').sort((a, b) => a.charCodeAt() - b.charCodeAt()).join('');
    
    // map 维护相同的值
    if (map.has(s)) {
      map.set(s, [...map.get(s), str[i]]);
    } else {
      map.set(s, [str[i]]);
    }

  }

  // 转数组
  return Array.from(map.values());

}

const strs1 = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs1));
// 预期输出: [["ate","eat","tea"],["nat","tan"],["bat"]]

const strs2 = ["", ""];
console.log(groupAnagrams(strs2));
// 预期输出: [["",""]]

const strs3 = ["a"];
console.log(groupAnagrams(strs3));
// 预期输出: [["a"]]