const proxy = {
	"/getSearchTip": {
		"target": "http://searchtip.kugou.com",
		"secure": false,
		"changeOrigin": true
	},
	"/getstarlist": {
		"target": "https://www.imooc.com/index/",
		"secure": false,
		"changeOrigin": true
	},
	"/getstarlist": {
		"target": "http://music.163.com",
		"secure": false,
		"changeOrigin": true
	}

}

module.exports = proxy;
