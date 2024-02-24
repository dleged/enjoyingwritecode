// 买卖股票的最大收益
// 给定一个数组 prices，它的第 i 个元素是一支给定股票第 i 天的价格。设计一个算法来计算你所能获取的最大利润。你可以尽可能地完成更多的交易（多次买卖一支股票），但是你不能同时参与多个交易（即，你必须在再次购买前出售掉之前的股票）。
// 示例：
// 输入: [7, 1, 5, 3, 6, 4]
// 输出: 7
// 解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出，利润 = 5-1 = 4；然后在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，利润 = 6-3 = 3。

function maxProfit(prices) {

  let hold = -prices[0];
  let unHold = 0;

  for (let i = 1; i < prices.length; i++) {
    hold = Math.max(hold, unHold - prices[i]);
    unHold = Math.max(unHold, hold + prices[i]);
  }

  return unHold;
}



console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 输出 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 输出 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 输出 0
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 输出 6

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 输出 7
console.log(maxProfit([1, 2, 3, 4, 5])); // 输出 4
console.log(maxProfit([7, 6, 4, 3, 1])); // 输出 0
console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4])); // 输出 6
console.log(maxProfit([1])); // 输出 0
console.log(maxProfit([])); // 输出 0
