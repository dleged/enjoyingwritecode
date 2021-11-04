// worker.js 子进程处理逻辑如下：

// 1. 创建一个 server 对象，注意这里最开始并没有监听 3000 端口
// 2. 通过 message 事件接收主进程 send 方法发送的消息
// 3. 监听 uncaughtException 事件，捕获未处理的异常，发送自杀信息由主进程重建进程，子进程在链接关闭之后退出

const http = require('http');

const server = http.createServer((req,res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plan',
  });

  res.end(`i am worker, pid: ${process.pid} , ppid: ${process.ppid}`);
  // throw new Error('worker process exception!');
});

let worker;
process.title = 'node-worker';

process.on('message', function (message, sendHandler) {
  if (message === 'server') {
    worker = sendHandler;
    worker.on('connection', (socket) => {
      console.log('建立连接');
      server.emit('connection', socket);
    });
  }
});

process.on('uncaughtException', function (err) {
  // console.error(err);
  process.send({ act: 'suicide' });

  if (worker) {
    worker.close(() => {
      process.exit(1);
    });
  }
});
