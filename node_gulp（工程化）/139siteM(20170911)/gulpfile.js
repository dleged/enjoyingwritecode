/*project
├── src/ 源码
│   ├── sass/
│   │   └─ main.scss
│   ├── scripts/
│   │   └─ javascript.js
│   └── pages/
│       └─ index.html
├── dist/ 测试环境
└── release/ 发布*/

var gulp = require('gulp'),
  
    browserSync = require('browser-sync').create(),  //多浏览器多设备同步&自动刷新
    SSI         = require('browsersync-ssi'),
    clean = require('gulp-clean'), //clean 用来删除文件
	rename = require('gulp-rename'), //文件重命名
	minify = require('gulp-minify-css'), //压缩css
	uglify = require('gulp-uglify'), //js压缩
    notify = require('gulp-notify'), //提示
    base64 = require('gulp-base64'), //图片base64
    rev = require('gulp-rev'), //- 对文件名加MD5后缀
	revCollector = require('gulp-rev-collector'), //- 路径替换
    //控制task中的串行和并行。这个很重要，它能够严格规定task的执行顺序，
    //否则gulp默认并行，有些时候会产生问题。如先清空再重建文件，可能重建过程中又清空了。
    runSequence = require('gulp-run-sequence'),
    zip         = require('gulp-zip'),
    plumber     = require('gulp-plumber'), //错误处理插件plumber
	baseJs = './src/js/',
	baseCss = './src/css/',
	baseImage = './src/img/',
	baseHtml = './src/pages/',
	distJs = './dist/js/',
	distCss = './dist/css/',
	distImage = './dist/img/',
	distHtml = './dist/pages/',
	src = './src/',
	dist = './dist/',
	distPages = './dist/pages/',
	release = './release/';
	

/*压缩css,并将压缩的css存放在dist\css目录下*/
gulp.task('minCss',function(){
	return gulp.src([baseCss + '*.css','!' + baseCss + '*-*.css'])
				.pipe(minify())
				.pipe(rev())
				.pipe(gulp.dest(distCss))
				.pipe(rev.manifest({
					merge: true // 与存在的json合并
				}))    //生成一个rev-manifest.json,用于改变html压缩style和script文件路径
				.pipe(gulp.dest('./'))
				.pipe(notify({message:'压缩css task ok'}));
});

/*css中的图片,base64化*/
gulp.task('copyImage',function(){
	return gulp.src(baseImage + '*.*')
				.pipe(gulp.dest(distImage));
});
config = { 
	src: distCss + '*.css', 
	dest: distCss, 
	options: { 
		baseDir: distCss, 
		extensions: ['png','jpg'],
		maxImageSize: 20 * 1024, 
	}
}
gulp.task('minImage',['minCss','copyImage'],function (){
	return gulp.src(config.src)
				.pipe(base64(config.options))
				.pipe(gulp.dest(config.dest))
				.pipe(notify({message:'base64编码图片 task ok'}));   //提示成功
});

/*压缩js*/
gulp.task('minJs',['minCss'],function(){
	return gulp.src([baseJs + '*.js','!' + baseCss + '*-*.js'])
				.pipe(uglify())
				.pipe(rev())
				.pipe(gulp.dest(distJs))
				.pipe(rev.manifest({
					merge: true // 与存在的json合并
				})) //生成一个rev-manifest.json,用于改变html压缩style和script文件路径
				.pipe(gulp.dest('./'))
				.pipe(notify({message:'压缩js task ok'}));
});

/*html关联脚步文件资源更名*/ 
gulp.task('revFile',['minImage','minJs'],function(){
    return gulp.src(['./rev-manifest.json', baseHtml + '*.html'])
						.pipe(revCollector())        // 执行文件内css名的替换
						.pipe(gulp.dest(distHtml))    // 替换后的文件输出的目录
        		.pipe(notify({message:'html关联脚步文件资源更名 task ok'})); //提示成功
});

/*clean任务：清空dist文件夹，下边重建dist的时候使用*/
gulp.task('clean', function (){
  return gulp.src('./dist/*', {read: false})
    .pipe(clean());
});

/*dist下的目录复制到release下*/
gulp.task('redist',function(){
	return gulp.src([src + '*',src + '*/*'])
				.pipe(gulp.dest(dist));
});

//publish任务，需要的时候手动执行，将dist中的文件打包压缩放到release中。
gulp.task('publish', function(){
        //取得dist文件夹中的所有文件
    return gulp.src(dist + '*/*')
		        //错误处理模块
		        .pipe(plumber())
		        //压缩成名为publish.zip的文件
		        .pipe(zip('publish.zip'))
		        .pipe(gulp.dest(release))
});

/*监视文件发生变化时处理一些事情,总会返回一个 EventEmitter 来发射（emit）*/
var FILETYPE = {
	css: '.css',
	js: '.js'
}
  
// 代理
/*gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "你的域名或IP"
    }*/
//创建一个名为serve的任务，该任务的内容就是匿名函数中的内容。
gulp.task('serve', function() {
	console.dir(SSI);
    //使用browserSync创建服务器，自动打开浏览器并打开./dist/pages文件夹中的文件（默认为index.html）
    browserSync.init({
        server: {
        	browser: 'google chrome',
            baseDir: dist,
            index: './pages/index.html'
        }
    });
    
    //监听各个目录的文件，如果有变动则执行相应的任务操作文件
   	gulp.watch(src + '*/*.css',['minCss','minImage']);
	gulp.watch(src + '*/*.js',['minJs',]);
	//如果有任何文件变动，自动刷新浏览器
    gulp.watch(distPages+ '*.html').on('change',browserSync.reload);
});
	

/*gulp.task('default',['minCss','minImage','minJs','revFile']);*/

//建立一个名为default的默认任务。当你在gitbash中执行gulp命令的时候，就会
gulp.task('default', function(){
    //先运行redist，启动服务器
    runSequence('revFile','serve');
});