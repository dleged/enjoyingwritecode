process.on('message', (m) => {
  //子进程收到消息后，发送给父进程
  process.send(`< ${m}`);
  process.send('> 不要回答x3');
});
