const http = require('http');
const fork = require('child_process').fork;


const server = http.createServer((req,res) => {

  if(req.url === '/computed'){

      const computed = fork('./fork_computed.js');

      computed.send('message');

      computed.on('close',() => {
        computed.kill('SIGTERM');
      })

      computed.on('message', (m) => {
        res.end(`computed sum: ${m}`);
        computed.exitCode = 1;
      })

  }else{
    res.end('end');
  }

});


server.listen('1234',() => {
  console.log('listening on port 1234');
})