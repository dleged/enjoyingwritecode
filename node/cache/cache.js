
const http = require('http');
const path = require('path');
const fs = require('fs');

http.createServer(function(req,res){
  let pathname = req.url;

  let absolutePath = path.join(__dirname,pathname);
  
  console.log(absolutePath,pathname);

  fs.stat(absolutePath,(err,stat) => {
    if(err){
      res.statusCode = 404;
      res.end('not found');
      return;
    }

    if(stat.isFile){
      res.setHeader('Last-Modified', stat.ctime.toGMTString());

      console.log(req.headers['if-modified-since']);
      if(req.headers['if-modified-since'] === stat.ctime.toGMTString()){
        res.statusCode = 304;
        res.end();
        return;
      }
    }

    fs.createReadStream(absolutePath).pipe(res);
  })

}).listen(9999)