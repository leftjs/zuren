//module.exports = {
//	domain: 'http://3c347834.ap.ngrok.io',
//  'token': 'jasonzhang',//配置中的token
//  'appId': 'wx926e5c3031482d64',//配置里的appid
//  'appSecret': '248630d1718eab25774b5414f944d0f8',//配置中的appsecret
//  'callback': 'http://zuren.ngrok.cc/wechat/oauth/callback',
//  'encodingAESKey': 'WLpK48ptE6U1WV4oAAFMkkfl5HeSGv4bTQCPb9ltgVB',
//	db_uri: 'mongodb://localhost/zuren'
//};

var domain = 'http://43d65f58.ap.ngrok.io'
module.exports = {
	domain: domain,
	'token': 'jasonzhang123',//配置中的token
	'appId': 'wxc7c9e61945ff10c4',//配置里的appid
	'appSecret': '72fd158123c3a27cd176ae8bf0f447d6',//配置中的appsecret
	'callback': domain + '/wechat/oauth/callback',
	'encodingAESKey': 'WLpK48ptE6U1WV4oAAFMkkfl5HeSGv4bTQCPb9ltgVB',
	db_uri: 'mongodb://localhost/zuren'
};
// module.exports = {
//   'token': 'jasonzhang123',//配置中的token
//   'appId': 'wxc7c9e61945ff10c4',//配置里的appid
//   'appSecret': '72fd158123c3a27cd176ae8bf0f447d6',//配置中的appsecret
//   'callback': 'http://zuren.ngrok.cc/wechat/oauth/callback'
// };
