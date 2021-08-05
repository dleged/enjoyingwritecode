const findComplementarySet = require('./index.js');

describe('findComplementarySet function', () => {
  test('case 1', () => {
    expect(findComplementarySet([1, 2, 3], [])).toStrictEqual([1, 2, 3]);
  });
  test('case 2', () => {
    expect(findComplementarySet([], [1, 2, 3])).toStrictEqual([]);
  });
  test('case 3', () => {
    expect(findComplementarySet([1, 2], [3])).toStrictEqual([1, 2]);
  });
  
});
