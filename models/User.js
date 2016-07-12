/**
 * Created by jason on 7/9/16.
 */
//weixin message { ToUserName: 'gh_1f5fbc0b6442',
//	FromUserName: 'odZO2v2ft-W5lEs0C0pY_cR83N7g',
//	CreateTime: '1468061173',
//	MsgType: 'event',
//	Event: 'LOCATION',
//	Latitude: '31.192005',
//	Longitude: '121.455933',
//	Precision: '65.000000' }

//
//{ openid: 'oXwMusz_1Jrd6T5cEv_WMjRqo5yI',
//	nickname: '微笑丶',
//	sex: 1,
//	language: 'zh_CN',
//	city: 'Taizhou',
//	province: 'Jiangsu',
//	country: 'China',
//	headimgurl: 'http://wx.qlogo.cn/mmopen/yfasibuYoBA4kaq5VwREDO5Q4v51pS76cicaiaJZiaKPMCWrfzBxyxKBGbkFOy0PVqEN7zx9XSe4MKLYdyDS3w43HlPCvdVXPXT2/0',
//	privilege: [] }
var config = require('../config')
var db = require('mongoose').createConnection(config.db_uri)
var Schema = require('mongoose').Schema
var userSchema = Schema({
	openid: String,
	nickname: String,
	headimgurl: String,
	latitude: Number,
	longitude: Number
})

module.exports = db.model('User', userSchema)