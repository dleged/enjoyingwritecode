const http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, { 'Content-Type': 'text/html'})
  res.end('hello world111');
}).listen(9999,() => {
  console.log('server listening at port 9999...')
});