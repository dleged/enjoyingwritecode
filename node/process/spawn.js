const spawn = require('child_process').spawn;

const child = spawn('ls',['-l'],{cwd: __dirname});

// 输出子进程工作目录中的文件
child.stdout.pipe(process.stdout);

console.log(process.pid,child.pid);