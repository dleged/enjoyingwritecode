const cluster = require("cluster");
const os = require("os");
const http = require("http");

function childProcess() {
  console.log('Child process started.');
  setInterval(() => {
    console.log('I am still alive!');
    if (Math.random() > 0.5) {
      console.log('Child process ' + process.pid + 'has exited');
    }
  }, 1000);
}

// 主进程，根据多核创建子进程
if (cluster.isMaster) {

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  // 监听进程是否退出
  cluster.on('exit', (worker, code, singal) => {
    console.log('process is exit, code is ' + code);
    cluster.fork();
  });

} else {
  childProcess();
}

