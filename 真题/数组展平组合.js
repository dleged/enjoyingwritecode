// [['a', 'b'], ['n', 'm'], ['0', '1']] => ["an0", "an1", "am0", "am1", "bn0", "bn1", "bm0", "bm1"]


function concatArr(arr) {
  let size = arr.length;
  let ret = [];

  function recursion(path, index) {
    const curArr = arr[index];

    if (path.length === size) {
      return ret.push(path);
    }

    if (!curArr) {
      return;
    }

    for (let i = 0; i < curArr.length; i++) {
      recursion(path + curArr[i], index + 1);
    }

  }

  recursion('', 0)
  return ret;
}


console.log(concatArr([['a', 'b'], ['n', 'm'], ['0', '1']]));





