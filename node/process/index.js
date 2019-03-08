const fs = require('fs');
process.on('uncaughtException', (err) => {
  fs.writeSync(1, `捕获的异常：${err}\n`);
});

setTimeout(() => {
  console.log('这里仍然会运行');
}, 500);



// 故意引起异常，但不要捕获它。
console.log('这里不会运行');

console.log(`Starting directory: ${process.cwd()}`);
try {
  process.chdir('/tmp');
	fs.readir
  console.log(`New directory: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir: ${err}`);
}

console.log(process.execArgv);
console.log(process.argv);
console.log(process.execPath);

console.log(`Current gid: ${process.getegid()}`);
console.log(`Current uid: ${process.getuid()}`);
console.log(`This process is pid ${process.pid}`);
console.log(`The parent process is pid ${process.ppid}`);
