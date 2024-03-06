// test 
const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));


function limit(limitMax = 2, arr, pro) {

  return new Promise((resolve, reject) => {
    let count = arr.length;
    let start = -1;
    let res = [];

    function runPro(index) {

      let fnPro = pro(arr[index]);

      fnPro.then((r) => {
        res[index] = r;// 赋值的下标
        count--;
        if (count === 0) return resolve(res);
        start++;
        if (start >= arr.length) return; //  终止条件
        runPro(start);
      });

    }

    while (limitMax > 0) {
      limitMax--;
      start++;
      runPro(start);
    }


  });
}

limit(2, [1001, 1002, 1003,30, 1004], timeout).then((res) => {
  console.log(res)
}) 