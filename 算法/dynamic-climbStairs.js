// 题目：爬楼梯
// 假设你正在爬楼梯。每次你可以爬1个台阶或2个台阶。编写一个函数，计算你到达楼梯顶部的方式总数。

// 示例：
// 输入：3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1阶 + 1阶 + 1阶
// 2. 1阶 + 2阶
// 3. 2阶 + 1阶
// 测试用例：

function climbStairs(stairs) {

  if (stairs === 1) { return 1 }
  if (stairs === 2) { return 2 }

  const ret = [1, 2];

  for (let i = 2; i < stairs; i++) {
    // ret[i - 1] + ret[i - 2] 表示到达第 i 阶楼梯时的总方式数，即通过一步从第 i - 1 阶走上来，或者通过两步从第 i - 2 阶走上来。

    ret.push(ret[i - 1] + ret[i - 2]);
  }
  return ret.pop();
}


console.log(climbStairs(2)); // 应输出 2
console.log(climbStairs(3)); // 应输出 3
console.log(climbStairs(4)); // 应输出 5
console.log(climbStairs(5)); // 应输出 8