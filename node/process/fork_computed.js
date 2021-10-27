function computed() {
  console.info('计算开始');
  console.time('计算耗时');

  let sum = 0;
  for (var i = 0; i < 1e10; i++) {
    sum += i;
  }

  console.info('计算结束');
  console.timeEnd('计算耗时');

  return sum;
}

process.on('message', function (message) {
  process.send(computed());
});

process.on('exit', function (code) {
  console.log('computed process exited!', code);
});
