var wechat = require('wechat')
var config = require('../config')
var user = require('../models/user')
var colors = require('colors/safe')

function handleMsg(req,res,next) {
	var message = req.weixin
	console.log(colors.blue('weixin message'), message)
	if (message.MsgType === 'event' && message.Event === 'LOCATION'){
		user.findOneAndUpdate({
			openid: message.FromUserName
		}, {$set: {
			latitude: message.Latitude,
			longitude: message.Longitude
		}}, {upsert: true, new: true}, function(err, doc) {
			if(err) {
				return next(err)
			}
			console.log(colors.blue('new user with location updated ->'), doc)
		})
		res.send('success')
	}else if(message.MsgType === 'text') {
		res.reply(message.Content)
	}
}

module.exports = {
  handleMsg: handleMsg
}
