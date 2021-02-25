const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request', function(req, res) {
  // fs.readFile('./bigfile.js',(err,data) => {
  //   res.end(data);
  // });
  const file = fs.createReadStream('./bigfile.js');
  file.pipe(res);
  // res.end(JSON.stringify('10'));
})

server.listen(3333,function(){
  console.log('server listening on port 3000!!!')
})