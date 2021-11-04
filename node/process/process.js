const { spawn } = require('child_process');
const child = spawn('node', ['./child_process.js'], { stdio: [null, null, null, 'ipc'] });
child.on('message', (m) => {
  console.log(m);
});
child.send('Here Here');//给子进程发送消息

