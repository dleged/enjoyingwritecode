const express = require('express');
const path = require('path');
const open = require('opn');
const app = express();
const port = 9000;

app.use(express.static(path.join(__dirname, 'build')));

// /*可以访问所有的路由
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
// DEBUG:
app.listen(9000,function(err){
    if(!err){
        console.log(
            `
            Local:            http://localhost:${port}/
            On Your Network:  http://192.168.11.100:${port}/

            `
        );

        open(`http://192.168.11.100:${port}/`);
    }

});
