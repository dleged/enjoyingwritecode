const { spawn } = require('child_process');
const child = spawn('node', ['./ipc-child.js'], { stdio: [null, null, null, 'ipc'] });
child.on('message', (m) => {
  console.log(m);
});
child.send('Here Here');
