function sum() {
  return [...arguments].reduce((pre, cur) => {
    return pre + cur;
  })
}

function add(sum, ...args) {

  function ret() {

    const argsArr = [...args, ...arguments];
    
    if (![...arguments].length) {
      return sum.apply(this, argsArr);
    } else {
      return add.call(this, sum, ...argsArr)
    }

  }
  ret.valueof = sum.apply(this, args);

  return ret
}

console.log(add(sum, 3)(4)(5)()); // 12
console.log(add(sum, 3)(6)(9)(25).valueof); // 43