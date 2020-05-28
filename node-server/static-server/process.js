// const { exec } = require('child_process');

// exec('node index.js', (err, stdout, stderr) => {
//   if (err) {
//     console.error(`exec error: ${err}`);
//     return;
//   }

//   console.log(`Number of files ${stdout}`);
// });

const {exec} = require('child_process');

let project = exec('node index.js');
console.log(project.pid);
console.log(process.uptime() * 1000,'ms');
