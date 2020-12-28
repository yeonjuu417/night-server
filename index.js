const express = require("express");
const cors = require('cors');
const session = require('express-session');
const logger = require('morgan');
require("./models");
const app = express();
app.use(logger('dev'));
const usersRouter = require('./routes/user');
const socialsRouter = require('./routes/social');

const port = 3001;//포트번호수정 !!!!!!!

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended : true }));
app.use(logger('dev'));

app.use(
  cors({
    origin: ['http://onemeal.xyz','https://onemeal.xyz'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true,

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

app.use('/users', usersRouter);

app.use('/socials', socialsRouter)

app.listen(port); 
module.exports = app;
