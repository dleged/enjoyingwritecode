const path = require('path');
console.log(path)
modules.exports = {
	entry: './public/app.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname,'./public/dist/js')
	}
}
