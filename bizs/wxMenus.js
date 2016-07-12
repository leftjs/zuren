/**
 * Created by jason on 7/9/16.
 */

var WechatAPI = require('wechat-api')
var config = require('../config')
var api = new WechatAPI(config.appId, config.appSecret)

var menu = {
	button: [
		{
			type: "view",
			name: '首页',
			key: 'V1001_TODAY_MUSIC',
			url : config.domain + '/'
		},
		{
			"name":"菜单",
			"sub_button":[
				{
					"type":"view",
					"name":"搜索",
					"url":"http://www.soso.com/"
				},
				{
					"type":"click",
					"name":"赞一下我们",
					"key":"V1001_GOOD"
				}]
		}
	]
}
function createMenu() {
	api.createMenu(menu, function(err, result) {
		if (err) {
			console.error(err)
			return false
		}
		console.log(result)
		return true
	})
}

module .exports = {
	createMenu: createMenu
}