const exec = require('child_process').exec;


exec('node -v',(err,stdout,stderr) => {
  console.log({err,stdout,stderr})
})