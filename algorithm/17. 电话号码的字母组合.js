var letterCombinations = function (digits, start = 0) {
  // 递归，深度优先
  // 树形结构

  const map = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  }

  if (digits === '') return [];
  if (start >= digits.length) return [''];

  let digit = digits[start];
  let letters = map[digit];
  let combinations = [];
  let suffixCombinations = letterCombinations(digits, start + 1);

  for (let letter of letters) {
    for (let suffix of suffixCombinations) {
      combinations.push(letter + suffix);
    }
  }

  return combinations;
}


console.log(letterCombinations('26'));