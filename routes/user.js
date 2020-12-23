var express = require('express');
var router = express.Router();

const { usersController,recipeController } = require('../controller');

// * POST /users/login
router.post('/login', usersController.login.post);
// * POST /users/logout
router.post('/logout', usersController.logout.post);
// * POST /users/signup
router.post('/signup', usersController.signup.post);
// * get /users/userinfo
router.get('/userinfo', usersController.userinfo.get);
// * get /recipe/resultrecipe
router.get('/resultrecipe', recipeController.resultrecipe.get);


module.exports = router;
