var gulp = require('gulp'),
	minify = require('gulp-minify-css'), //压缩css
	rename = require('gulp-rename'), //文件重命名
	uglify = require('gulp-uglify'), //js压缩
    notify = require('gulp-notify'),   //提示
    base64 = require('gulp-base64'),
    rev = require('gulp-rev'), //- 对文件名加MD5后缀
	revCollector = require('gulp-rev-collector'), //- 路径替换
	baseJs = './src/js/',
	baseCss = './src/css/',
	baseImage = './img/',
	distJs = './dist/js',
	distCss = './dist/css',
	distImage = './dist/img',
	htmlSrc = './',
	bulidSrc = './';
	

/*压缩css文件*/
gulp.task('minCss',minCss()); //css压缩的任务（要等less任务完成之后）
function minCss(){
	gulp.src([baseCss + '*.css','!' + baseCss + '*-*.css'])
	 	/*.pipe(rename({suffix:'.min'})) //修改文件名*/
	 	.pipe(minify()) //压缩
	 	.pipe(rev())  //- 文件名加MD5后缀
		.pipe(gulp.dest(distCss)) //输出路径
		.pipe(rev.manifest())    //- 生成一个rev-manifest.json
        .pipe(gulp.dest(bulidSrc))  //- 将 rev-manifest.json 保存到 bulid 目录内
		.pipe(notify({message:'minCss task ok'})); //提示成功
}

/*压缩js文件*/
gulp.task('minJs',minJs());
function minJs(){
	gulp.src([baseJs + '*.js','!' + baseJs + '*.min.js'])
		.pipe(uglify()) //压缩
		.pipe(rename({suffix:'.min'}))  //重命名
		.pipe(gulp.dest(distJs)) //输出路径
		.pipe(notify({message:'minJs task ok'}));   //提示成功
}


/*压缩图片*/
config = { 
	src: distCss + '*.min.css', 
	dest: distCss, 
	options: { 
		baseDir: distCss, 
		extensions: ['png','jpg'],
		maxImageSize: 20 * 1024, 
	}
}
gulp.task('minImage',minImage()); 
function minImage(){ 
	gulp.src(config.src)
		.pipe(base64(config.options))
		.pipe(gulp.dest(config.dest))
		.pipe(notify({message:'minImage task ok'}));   //提示成功
}



gulp.task('revFile',revFile());
function revFile(){
    gulp.src(['./*.json', '../*.html'])
		.pipe(revCollector())        //- 执行文件内css名的替换
        .pipe(gulp.dest(htmlSrc))                    //- 替换后的文件输出的目录
        .pipe(notify({message:'revFile task ok'})); //提示成功
    
}
