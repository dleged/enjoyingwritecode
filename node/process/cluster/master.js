//master.js 主要处理以下逻辑：

// 1. 创建一个 server 并监听 3000 端口。
// 2. 根据系统 cpus 开启多个子进程
// 3. 通过子进程对象的 send 方法发送消息到子进程进行通信
// 4. 在主进程中监听了子进程的变化，如果是自杀信号重新启动一个工作进程。
// 5. 主进程在监听到退出消息的时候，先退出子进程在退出主进程

const fork = require('child_process').fork;
const cpus = require('os').cpus();
const http = require('http');


const workers = {};

const server = http.createServer((req, res) => {
  res.end('hello cluster');
});
server.listen('1234');
process.title = 'main process';

function createCluster() {
  function createWork() {
    const worker = fork('./worker');

    worker.on('message', (msg) => {
      if(msg.act === 'suicide'){
        createWork();
      }
      
    });
    worker.on('exit', (code, signal) => {
      delete workers[worker.pid];
      console.log('worker exited with code: %s signal: %s', code, signal);
    });
    workers[worker.pid] = worker;
    worker.send('server', server);
    console.log(
      'worker process created, pid: %s ppid: %s',
      worker.pid,
      process.pid
    );
  }

  for (let i = 0; i < cpus.length; i++) {
    createWork();
  }
}


process.once('SIGINT',close.bind('SIGINT'));// kill(2) Ctrl-C
process.once('SIGQUIT',close.bind('SIGQUIT'));// kill(3) Ctrl-\
process.once('SIGTERM',close.bind('SIGTERM'));// kill(15) default
process.on('exit', close.bind(this));

function close(code) {
  if (code !== 0) {
    for (let worker in workers) {
      delete workers[worker.pid];
    }
  }

  console.log('main worker closed, code: %s', code);
  process.exit(0);
}

createCluster();
