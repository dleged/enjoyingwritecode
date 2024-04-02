
let arr = [1, 3, 3, [4, 6, 7, [5, 6, 7, 43, [23, 4]]]]


let max = 0;
function getDeep(arr, level) {

  max = Math.max(max, level)

  arr.reduce((l, nums) => {
    if (Array.isArray(nums)) {
      getDeep(nums, l + 1);
    }
    return l;
  }, level)

}

getDeep(arr, 1);
console.log(max);