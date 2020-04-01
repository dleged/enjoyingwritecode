const express = require('express');

const app = new express();

app.get('/',async function(req,res,next){
    res.setHeader("Content-Type", "text/html");
    res.end('hellow jenkins app');
})

app.get('*',async function(req,res,next){
    res.setHeader("Cache-Control", "no-control");
    res.end('page not found');
})


app.listen(process.env.PORT || 3000,function(){
    console.log(`start server port on ${process.env.PORT || 3000}!`);
});



module.exports = app;