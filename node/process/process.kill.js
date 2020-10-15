
process.on('exit',function(code){
  console.log('SINHUB done',code);
})

console.log('will kill process');

// 1.kill 是给进程发生信号，并不是杀死进程 ⚠️;
// process.kill(process.pid,'SIGINT');


// 2.会直接退出，不登登台其他事件执行完毕
process.exit(0);

// 3.会等待其他事件执行完毕，再退出
process.exitCode = 1;

console.log('process is stop');