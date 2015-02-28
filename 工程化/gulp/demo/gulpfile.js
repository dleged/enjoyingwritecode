var gulp = require('gulp'),
	less = require('gulp-less'), //less
	minify = require('gulp-minify-css'), //压缩css
	rename = require('gulp-rename'), //文件重命名
	uglify = require('gulp-uglify'), //js压缩
    notify = require('gulp-notify'),   //提示
	baseLess = './static/less/',
	baseJs = './lib/',
	baseCss = './static/css/';
	

/*less转css*/
gulp.task('less',getLess('app.less'));
function getLess(file){
	var base = baseLess + file;
	gulp.src(baseLess + file)	//该任务针对的文件
		.pipe(less())	//该任务调用的模块 less - css
		.pipe(gulp.dest(baseCss)) //css输出路径
		.pipe(notify({message:'less task ok'}));   //提示成功
}

/*压缩css文件*/
gulp.task('minCss',['less'],minCss()); //css压缩的任务（要等less任务完成之后）
function minCss(){
	gulp.src([baseCss + '*.css','!' + baseCss + '*.min.css'])
		.pipe(minify()) //压缩
	 	.pipe(rename({suffix:'.min'})) //修改文件名
		.pipe(gulp.dest(baseCss)) //输出路径
		.pipe(notify({message:'minCss task ok'})); //提示成功
}

 
/*压缩js文件*/
gulp.task('minJs',minJs());
function minJs(){
	gulp.src([baseJs + '*.js','!' + baseJs + '*.min.js'])
		.pipe(uglify()) //压缩
		.pipe(rename({suffix:'.min'}))     //重命名
		.pipe(gulp.dest(baseJs)) //输出路径
		.pipe(notify({message:'minJs task ok'}));   //提示成功
}

gulp.task('default',['less','minCss','minJs','one']);
/*gulp.task('default',function(){
	gulp.start('less','minCss','minJs');
});*/

/*gulp.watch(glob[, opts, cb])
一个 glob 字符串，或者一个包含多个 glob 字符串的数组，用来指定具体监控哪些文件的变动。*/
gulp.watch(baseJs + '*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});


/*gulp.task('revrev',revrev());
function revrev(){
    gulp.src(['./*.json', '../*.html'])
        .pipe(revCollector())                                   //- 执行文件内css名的替换
        .pipe(gulp.dest(htmlSrc))                    //- 替换后的文件输出的目录
        .pipe(notify({message:'revrev task ok'})); //提示成功
    
}*/

gulp.task('one',function(){
	console.log(123);
});
