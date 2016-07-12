var OAuth = require('wechat-oauth')
var config = require('../config')
var user = require('../models/user')
var colors = require('colors/safe')

var client = new OAuth(config.appId, config.appSecret);

function redirectToAuth(req,res) {
  var url = client.getAuthorizeURL(config.callback, 'state', 'snsapi_base')
  res.redirect(url)
}


function getUserInfo(req,res,next) {
  client.getAccessToken(req.query.code, function(err, result) {
    if(err) {
      return next(err)
    }
    var accessToken = result.data.access_token
    var openid = result.data.openid
    client.getUser(openid, function(err, result) {
      if(err) {
        return next(err)
      }

	    // 新建或更新
	    user.findOneAndUpdate({openid: result.openid}, {$set: {nickname: result.nickname, openid: result.openid, headimgurl: result.headimgurl}}, {upsert: true, new: true}, function(err, doc){
		    console.log(colors.blue('user doc ==>>'), doc)
	    })

      res.json(result)
    })
  })

}


module.exports = {
  redirectToAuth: redirectToAuth,
  getUserInfo: getUserInfo
}
