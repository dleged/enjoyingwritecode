const http = require('http');

http.createServer(function(ctx, next) {
  console.log(ctx);
}).listen(80);