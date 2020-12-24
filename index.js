const express = require("express");
const cors = require('cors');
const session = require('express-session');
const logger = require('morgan');
require("./models");
const app = express();
const usersRouter = require('./routes/user');
const socialsRouter = require('./routes/social');

const csp = require('helmet-csp');
const port = 3001;//포트번호수정 !!!!!!!
const bodyParser = require('body-parser');


app.use(express.json());

app.use(bodyParser.json());

app.use(express.urlencoded({extended : true }));

app.use(logger('dev'));

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'Access-Control-Request-Headers',
      'Access-Control-Allow-Headers',
      'x-custom-header',
      'Content-Range',
      'Content-Security-Policy'
    ],
  })
);


app.use(session({
  secret: '@codestates',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 6 * 60 * 10000,
    httpOnly: true,
    secure: false,
    sameSite : 'none',
  }
}));
app.get('/', (req, res) => {
  res.status(200).send('Success');
});
app.use(function (req, res, next) {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self'; style-src 'self'; frame-src 'self'"
  );
  next();
});
app.use('/users', usersRouter);
app.use('/socials', socialsRouter)
app.listen(port); 
module.exports = app;
