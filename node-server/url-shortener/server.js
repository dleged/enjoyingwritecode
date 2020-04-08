const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const cookieParser = require('cookie-parser')
let token = require('./token');
let tokenid = 0;
const app = express();

mongoose.connect('mongodb://localhost:27017/urlShortener', {
  useNewUrlParser: true, useUnifiedTopology: true
})

app.set('view engine', 'ejs')
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find();
  let access_token = `url_shortener${Date.now()}`;
  token[access_token] = tokenid++;

  res.cookie('access_token',access_token);
  res.render('index', { shortUrls: shortUrls });
  
})

app.post('/shortUrls', async (req, res) => {
  console.log(req.body)
  await ShortUrl.create({ full: req.body.fullurl })
  res.redirect('/')
})

app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  console.log(req.query);

  if (shortUrl == null) return res.sendStatus(404);
  shortUrl.clicks++;
  shortUrl.save();

  console.dir(req.cookies.access_token);
  console.log(token[req.cookies.access_token]);//模拟token

  // res.render('index', { shortUrls: shortUrls });
  res.redirect(shortUrl.full);
})

app.listen(process.env.PORT || 5000);