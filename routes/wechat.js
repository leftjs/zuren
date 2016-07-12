var express = require('express');
var router = express.Router();
var wxServerAuth = require('../bizs/wxServerAuth')
var wxOAuth = require('../bizs/wxOAuth')

/* GET home page. */
router.get('/', wxServerAuth);

router.get('/oauth', wxOAuth.redirectToAuth)

router.get('/oauth/callback', wxOAuth.getUserInfo)

module.exports = router;
