// test 
const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));


function limit(limitMax = 2, arr, pro) {

  return new Promise((resolve, reject) => {

    let ret = [];
    let count = 0;
    let allCount = arr.length;

    const addTask = () => {
      limitMax--;
      let item = arr.shift();
      if (!item) return;
      runTask(item, allCount - arr.length - 1);
    }

    const runTask = (item, index) => {
      pro(item).then((res) => {
        ret[index] = res;
        count++;
        if (count === allCount) {
          return resolve(ret);
        }
        addTask();
      });
    }

    while (limitMax > 0) {
      addTask();
    }

  });

}

limit(2, [1001, 1002, 1003, 1004], timeout).then((res) => {
  console.log(res)
}) 