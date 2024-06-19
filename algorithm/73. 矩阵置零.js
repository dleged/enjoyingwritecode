// 给定一个 m x n 的矩阵，如果一个元素为 0，则将其所在行和列的所有元素都设为 0。请使用 O(1) 的空间复杂度实现。

// 示例 1：
// 输入：
// // matrix = [ // [1,1,1], // [1,0,1], // [1,1,1] // ] //
// 输出：
// // [ // [1,0,1], // [0,0,0], // [1,0,1] // ] //

// 示例 2：
// 输入：
// // matrix = [ // [0,1,2,0], // [3,4,5,2], // [1,3,1,5] // ] //
// 输出：
// // [ // [0,0,0,0], // [0,4,5,0], // [0,3,1,0] // ] //

// 请实现函数 setZeroes(matrix: number[][]): void 来解决这个问题，并给出测试用例。

function setZeroes(matrix) {
  // 空方法，待实现 
  let m = matrix.length;
  let n = matrix[0].length;
  let rows = new Set();
  let columns = new Set();
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] !== 0) {
        continue;
      }
      rows.add(i);
      columns.add(j);
    }
  }
  for (let i of rows) {
    for (let j = 0; j < n; j++) {
      matrix[i][j] = 0;
    }
  }

  for (let j of columns) {
    for (let i = 0; i < m; i++) {
      matrix[i][j] = 0;
    }
  }

  return matrix;
}

// 测试用例 1
let matrix1 = [
  [0, 1],
  
];
setZeroes(matrix1);
console.log(matrix1); // 应输出 [[0,0]]

// 测试用例 2
let matrix2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5]
];
setZeroes(matrix2);
console.log(matrix2); // 应输出 [[0, 0, 0, 0], [0, 4, 5, 0], [0, 3, 1, 0]]

// 测试用例 3
let matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
setZeroes(matrix3);
console.log(matrix3); // 应输出 [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// 测试用例 4
let matrix4 = [
  [1, 2],
  [0, 4]
];
setZeroes(matrix4);
console.log(matrix4); // 应输出 [[0, 2], [0, 0]]

// 测试用例 5
let matrix5 = [
  [0, 0, 0],
  [1, 2, 3],
  [4, 5, 6]
];
setZeroes(matrix5);
console.log(matrix5); // 应输出 [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
// 这些测试用例涵盖了不同的场景，包括矩阵中没有 0 的情况、矩阵中有 0 的情况以及边界情况（如只有一行或一列）。通过这些用例，可以确保函数的正确性和鲁棒性。