function recursive(nums) {

  let flag = false;
  let res = [];

  for (let i = 0; i < nums.length; i++) {

    if (nums[i] instanceof Array) {
      flag = true;
      res.push(recursive(nums[i]));
    }

  }

  if (flag) {
    return Math.max(res) + 1;
  } else {
    return 1;
  }

}

console.log(recursive([[[[0]]], 1, 2]) - 1);


console.log(recursive([]) - 1);