const { fork } = require('child_process');

const child = fork('./master.js', { detached: true });


setid(1);
process.exit();