

// 我从 1 到 n 选择一个数字。 你需要猜我选择了哪个数字。
// 每次你猜错了，我会告诉你这个数字是高还是低。
// 你调用一个预先定义好的接口 guess(num)，它会返回 -1，0，1 分别代表猜测的数字大于，等于，或小于预先定义好的数字。


function guess(num) {

  if (num === pick) return 0;
  if (num > pick) return 1;
  if (num < pick) return -1;

}

function guessNumber(n) {

  let left = 0;
  let right = n;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    if (guess(mid) === 0) return mid;
    if (guess(mid) === 1) right = mid - 1;
    if (guess(mid) === -1) left = mid + 1
  }

  return -1;
}

let pick = 6;
console.log(guessNumber(10));

pick = 1;
console.log(guessNumber(1));