// 题目：给定两个字符串 s 和 t，判断它们是否是字母异位词。

// "anagram", "nagaram"
// 数组或者 map
// [0,1,2,3,4] -> [a,b,c,d,e]

// function isAnagram(s, t) {
//   let array = Array.from(26).fill(0);

//   for (let index in s) {
//     let key = s[index].charCodeAt() - 'a'.charCodeAt();
//     array[key] = (array[key] || 0) + 1;
//   }

//   for (let index in t) {
//     let key = t[index].charCodeAt() - 'a'.charCodeAt();
//     array[key] = (array[key] || 0) - 1;
//   }

//   for (let index in array) {
//     if (array[index] !== 0) {
//       return false;
//     }
//   }
//   return true;
// }

function isAnagram(s, t) {
  let map = new Map();

  for (let index in s) {
    map.set(s[index], (map.get(s[index]) || 0) + 1);
  }

  // for (let index in t) {
  //   map.set(t[index], (map.get(t[index] || 0)) - 1);
  // }

  for (let index in t) {
    // map 种已经不存在 t[index] 了
    if (!map.get(t[index])) {
      return false;
    } else {
      map.set(t[index], map.get(t[index]) - 1);
    }
  }

  return true;
}



console.log(isAnagram("anagram", "nagaram")); // 应返回 true
console.log(isAnagram("rat", "car"));        // 应返回 false