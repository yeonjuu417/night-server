var express = require('express');
var router = express.Router();

const { socialsController } = require('../controller');

// * POST /socials/githubLogin
router.post('/githubLogin', socialsController.githubLogin);
// * POST /socials/googleLogin
router.post('/googleLogin', socialsController.googleLogin);

module.exports = router;
