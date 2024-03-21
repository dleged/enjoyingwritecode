// 给定两个字符串 ransomNote 和 magazine，判断第一个字符串 ransomNote 是否可以由第二个字符串 magazine 中的字符构成。如果可以，返回 true；否则，返回 false。
// 每个字符只能在 magazine 中使用一次。


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
function canConstruct(ransomNote, magazine) {
  // 在这里实现算法
  // map 存储 magazine 的所有值，记录匹配的字符串数量
  // 再对 ransomNote 进行遍历，对 map 中匹配的字符做减法，当 ransomeNote 所有字符数量都能被 magazine 覆盖 为 true

  const map = new Map();

  for (let str of magazine) {
    map.set(str, (map.get(str) || 0) + 1);
  }

  for (let str of ransomNote) {
    // 不存在字符或者数量为 0 了，说明 magazine 中该字符少于 ransomNote
    if (!map.get(str)) {
      return false;
    } else {
      map.set(str, map.get(str) - 1);
    }
  }

  return true;
}

console.log(canConstruct("a", "b")); // 输出 false
console.log(canConstruct("aa", "ab")); // 输出 false
console.log(canConstruct("aa", "aab")); // 输出 true