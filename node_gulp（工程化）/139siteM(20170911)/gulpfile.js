var gulp = require('gulp'),
    browserSync = require('browser-sync').create(), //多浏览器多设备同步&自动刷新
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
    runSequence = require('gulp-run-sequence');
	baseJs = './src/js/',
	baseCss = './src/css/',
	baseImage = './src/img/',
	baseHtml = './src/pages/',
	distJs = './dist/js/',
	distCss = './dist/css/',
	distImage = './dist/img/',
	distHtml = './dist/pages/';
	

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
/*css图片,base64*/
config = { 
	src: distCss + '*.css', 
	dest: distCss, 
	options: { 
		baseDir: distCss, 
		extensions: ['png','jpg'],
		maxImageSize: 20 * 1024, 
	}
}
gulp.task('minImage',['minCss'],function (){
	console.log(123);
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
gulp.task('revFile',['minJs'],function(){
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


/*默认执行task*/
gulp.task('default',['minCss','minImage','minJs','revFile']);

/*dist下的目录复制到test下*/
gulp.task('copy-test',function(){
	return gulp.src(['./dist/*','./dist/*/*'])
				.pipe(gulp.dest('./test'));
});
