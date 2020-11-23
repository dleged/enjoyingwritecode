// 2.将一天24小时按每半小划分成48段，我们用一个位图表示选中的时间区间，例如`110000000000000000000000000000000000000000000000`，
// 表示第一个半小时和第二个半小时被选中了，其余时间段都没有被选中，也就是对应00:00~01:00这个时间区间。一个位图中可能有多个不连续的
// 时间区间被选中，例如`110010000000000000000000000000000000000000000000`，表示00:00-1:00和02:00-02:30这两个时间区间被选中了。

// 要求：写一个函数timeBitmapToRanges，将上述规则描述的时间位图转换成一个选中时间区间的数组。
// 示例输入：`"110010000000000000000000000000000000000000000000"`
// 示例输出：`["00:00~01:00", "02:00~02:30"]`

function timeBitmapToRanges(timeBit) {
  const halfHours = 1000 * 60 * 30;

  return timeBit.split("").reduce((preRanges, item, index) => {
    let len = preRanges.length;
    let isCloseTime = !len ? true : preRanges[len - 1].includes("~");

    
    if (item === "1") {
      let timeStamp = new Date(halfHours * index - 8 * 60 * 60 * 1000);

      // 010
      if (timeBit[index + 1] == "0" && timeBit[index - 1] == "0") {
        let nextTimeStamp = new Date(
          halfHours * (index + 1) - 8 * 60 * 60 * 1000
        );
        console.log(index, nextTimeStamp);
        preRanges.push(
          `${timeStamp.getHours()}:${timeStamp.getMinutes()}~${nextTimeStamp.getHours()}:${nextTimeStamp.getMinutes()}`
        );
      }

      // 1***
      if (index === 0) {
        if (isCloseTime) {
          preRanges.push(`${timeStamp.getHours()}:${timeStamp.getMinutes()}`);
        }
      }

      // 110
      // 0110
      if (
        timeBit[index + 1] === "0" &&
        (timeBit[index - 1] === "1" || index === 0)
      ) {
        if (isCloseTime) {
          preRanges.push(`${timeStamp.getHours()}:${timeStamp.getMinutes()}`);
        } else {
          preRanges[len - 1] = `${
            preRanges[len - 1]
          }~${timeStamp.getHours()}:${timeStamp.getMinutes()}`;
        }
      }
    }

    return preRanges;
  }, []);
}

console.log(
  timeBitmapToRanges("110010000000000000000000000000000000000000000000")
);


function timeBitmapToRanges2(timeBit){

  let timeBitArr2 = [];

  timeBit.replace(/1+/g,function(match,index){
    console.log(index,match.split(''),index + match.length);
    timeBitArr2.push([index,index + match.length]);
  })

  function getHours(time){
    return `0${Math.floor(time / 2)}`;
  }

  function getMinutes(time){
    return time % 2 === 0 ? '00' : '30';
  }

  console.log(timeBitArr2);

  return timeBitArr2.map(([start,end]) => {
    return `${getHours(start)}:${getMinutes(start)}~${getHours(end)}:${getMinutes(end)}`
  });

}

console.log(timeBitmapToRanges2("110010000000000000000000000000000000000000000000"));

