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
	}
}

module.exports = proxy;
