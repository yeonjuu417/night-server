var express = require('express');
var router = express.Router();

const { usersController } = require('../controller');

// * POST /users/login
router.post('/login', usersController.login.post);
// * POST /users/logout
router.post('/logout', usersController.logout.post);
// * POST /users/signup
router.post('/signup', usersController.signup.post);
// * get /users/userinfo
router.get('/userinfo', usersController.userinfo.get);
// // // * get /users/userinfoup
router.post('/userinfoup', usersController.userinfoup.post);
// // // * get /recipe/resultrecipe
router.get('/resultrecipe', usersController.resultrecipe.get);
// // // * post /users/saverecipe
router.post('/saverecipe', usersController.saverecipe.post);


module.exports = router;
