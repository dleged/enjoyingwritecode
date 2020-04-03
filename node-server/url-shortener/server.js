const express = require('express');
const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl.js');
const app = new express();

mongoose.connect('mongodb://localhost/urlshortener',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.set('view engine','ejs');
app.use(express.urlencoded({extended: false}));

app.get('/',function(req,res){
    res.render('index.ejs');
})

app.post('/shortUrls',function(req,res){
   await ShortUrl.createElement({full: req.body.fullurl})
   res.redirect('./');
})

app.listen(process.env.PORT || 5000,() => {
    console.log('server listening at port',process.env.PORT || 5000);
})