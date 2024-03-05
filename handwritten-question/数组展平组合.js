// [['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]


// an0  a -> n -> 0
//      0    0    0

// an1  0    0    1
// am0  0    1    0
// am1
// bn0
// bn1
// bm0
// bm1


function concatArr(arr) {
  let ret = [];
  let len = arr.length;

  function recursion(array, str, i) {

    if (str.length === len) {
      ret.push(str);
      return;
    }

    if (!Array.isArray(array)) return;

    for (let val of array) {

      recursion(arr[i + 1], str + val, i + 1)
    }

  }

  recursion(arr[0], '', 0);

  return ret;
}


console.log(concatArr([['a', 'b'], ['n', 'm'], ['0', '1']]));







