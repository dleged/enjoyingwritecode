const express = require('express');

const app = express();

app.get('/', function(req, res){
	var options = {
    root: __dirname,
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };
  res.sendFile('./index.html',options);
});

app.listen(3000);
