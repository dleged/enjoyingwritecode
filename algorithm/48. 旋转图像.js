// 题目描述
// 给定一个 n × n 的二维矩阵 matrix 表示一个图像。将图像顺时针旋转 90 度。

// 你必须在原地旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要使用另一个矩阵来旋转图像。

// 示例 1：

// 输入：matrix = [
// [1,2,3],
// [4,5,6],
// [7,8,9]
// ]
// 输出：[
// [7,4,1],
// [8,5,2],
// [9,6,3]
// ]
// 示例 2：

// 输入：matrix = [
// [5,1,9,11],     
// [2,4,8,10],
// [13,3,6,7],
// [15,14,12,16]
// ]
// 输出：[
// [15,13,2,5],
// [14,3,4,1],
// [12,6,8,9],
// [16,7,10,11]
// ]

// 请实现一个函数 rotate(matrix: number[][]): void 来解决该问题，并给出测试用例。

function rotate(matrix) {
  // 待实现
  const n = matrix.length;

  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      // 变列为行
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
  return matrix;
}

// 测试用例 1
let matrix1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
rotate(matrix1);
console.log(matrix1); // 输出：[[7, 4, 1], [8, 5, 2], [9, 6, 3]]

// 测试用例 2
let matrix2 = [
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16]
];
rotate(matrix2);
console.log(matrix2); // 输出：[[15, 13, 2, 5], [14, 3, 4, 1], [12, 6, 8, 9], [16, 7, 10, 11]]

// 测试用例 3
let matrix3 = [
  [1, 2],
  [3, 4]
];
rotate(matrix3);
console.log(matrix3); // 输出：[[3, 1], [4, 2]]

// 测试用例 4
let matrix4 = [
  [1]
];
rotate(matrix4);
console.log(matrix4); // 输出：[[1]]

// 测试用例 5
let matrix5 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];
rotate(matrix5);
console.log(matrix5); // 输出：[[13, 9, 5, 1], [14, 10, 6, 2], [15, 11, 7, 3], [16, 12, 8, 4]]