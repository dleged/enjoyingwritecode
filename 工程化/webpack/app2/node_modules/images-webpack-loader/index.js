var imagemin = require('imagemin');
var imageminGifsicle = require('imagemin-gifsicle');
var imageminOptipng = require('imagemin-optipng');
var imageminSvgo = require('imagemin-svgo');
var imageminPngquant = require('imagemin-pngquant');
var loaderUtils = require('loader-utils');
var imageminJpegRecompress = require('imagemin-jpeg-recompress');
var debug = require('debug')('images-webpack-loader');
var chalk = require('chalk');
var path = require('path');
var mkdirp = require('mkdirp');
var cwd = process.cwd();
var compressFolder = path.join(cwd, '.compress');
var fs = require('fs');
var md5File = require('md5-file')
mkdirp.sync(compressFolder);

module.exports = function(content) {
  var s1 = Date.now();
  this.cacheable && this.cacheable();
  var resourcePath = this.resourcePath;
  var filename = path.basename(resourcePath);
  var dirname = path.dirname(resourcePath);
  var fileExt = path.extname(resourcePath);
  var fileHash = md5File.sync(resourcePath);
  var filenameWithoutExt = path.basename(resourcePath, fileExt);

  var writeFolder = path.join(compressFolder, dirname.replace(cwd, ''));
  var config = loaderUtils.getLoaderConfig(this, "imageWebpackLoader");
  var options = {
    interlaced: config.interlaced || false,
    progressive: config.progressive || false,
    useCache: config.useCache === undefined ? true : config.useCache,
    optimizationLevel: config.optimizationLevel || 3,
    bypassOnDebug: config.bypassOnDebug || false,
    pngquant: config.pngquant || false,
    jpeg: config.jpeg || { quality: 'medium', min: 40, max: 80, progressive: true},
    svgo: config.svgo || {}
  };

  if (options.useCache) {
    // 创建缓存文件夹
    mkdirp.sync(writeFolder);
  }

  var callback = this.async(), called = false;

  if (this.debug === true && options.bypassOnDebug === true) {
    // Bypass processing while on watch mode
    return callback(null, content);
  } else {
    var plugins = [];
    plugins.push(imageminGifsicle({interlaced: options.interlaced}));
    plugins.push(imageminJpegRecompress(options.jpeg));
    plugins.push(imageminSvgo(options.svgo));
    plugins.push(imageminPngquant(options.pngquant));
    plugins.push(imageminOptipng({optimizationLevel: options.optimizationLevel}));
    var writeDest = path.join(writeFolder, `${filenameWithoutExt}.${fileHash}${fileExt}`);
    if (fs.existsSync(writeDest)) {
      callback(null, fs.readFileSync(writeDest));
      debug(`图片: ${chalk.blue.underline(filename)} 命中缓存 ${writeDest} 处理耗时: ${Date.now() - s1} m`);
      return;
    }

    imagemin
      .buffer(content, {plugins})
      .then(data => {
        debug(`图片: ${chalk.blue.underline(filename)} 压缩处理耗时: ${Date.now() - s1} ms`);
        if (options.useCache) {
          debug(`图片: ${chalk.blue.underline(filename)} 写入到缓存中 ${writeDest}`);
          fs.writeFileSync(writeDest, data);
        }
        callback(null, data);
      })
      .catch(err => {
        callback(err);
      });
  }
};
module.exports.raw = true;
