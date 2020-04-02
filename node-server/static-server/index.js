const express = require('express');
const serverStatic = require('./lib/serverStatic.js');

const app = new express();

app.get('/',function(req,res,next){
    res.end('home page')
    next();
});

app.get('/assets/*',serverStatic);

app.listen(3000,function(){
    console.log('server listening at port 3000');
});