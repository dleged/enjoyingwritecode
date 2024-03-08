// 求 x 的 n 次方是多少，递归的复杂度


// 循环 O(n)
function func1(x, n) {
  let result = 1;

  for (let i = 1; i < n; i++) {
    result = result * x;
  }

  return result;
}


// 递归1 O(n)
function func2(x, n) {
  if (n === 0) { return 1 };

  return func2(x, n - 1) * x;
}


// 递归2 o(n)
function func3(x, n) {
  if (n === 0) return 1;

  const halfInt = Math.floor(n / 2);
  if (n % 2 === 1) {
    return func3(x, halfInt) * func3(x, halfInt) * x;
  }

  return func3(x, halfInt) * func3(x, halfInt);
}

// 递归3 以二为底的 O(logN)，每次计算都是 n/2 次
function func4(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  const t = func4(x, Math.floor(n / 2));

  if (n % 2 === 1) {
    return t * t * x;
  }

  return t * t;
}


// -----TEST------
const x = 10;
const n = 10;
console.time('func1');
console.log(func1(x, n));
console.timeEnd('func1');

console.time('func2');
console.log(func2(x, n));
console.timeEnd('func2');


console.time('func3');
console.log(func3(x, n));
console.timeEnd('func3');


console.time('func4');
console.log(func4(x, n));
console.timeEnd('func4');



