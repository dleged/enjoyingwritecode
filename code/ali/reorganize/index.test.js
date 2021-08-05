const reorganize = require('./index.js');


describe('findComplementarySet function', () => {
  test('case 1', () => {
    expect(reorganize('123')).toStrictEqual([ '123', '132', '213', '231', '312', '321' ]);
  });
  test('case 2', () => {
    expect(reorganize('1213')).toStrictEqual(['1213', '1231',
    '1321', '1312',
    '2131', '2131',
    '1213', '1231',
    '1312', '1321',
    '3121', '3121']);
  });
});
