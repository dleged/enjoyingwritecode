什么是gulp？
gulp是一个前端项目构建工具，是自动化项目的构建利器，它不仅能对网站资源进行优化，而且在开发过程中很多重复的任务能够使用正确的工具自动完成。你可以使用gulp及其插件对你的项目代码（less,sass）进行编译，还可以压缩你的js和css代码，甚至压缩你的图片等等。
我看了很多网上的资料，目前最流行的两种使用JavaScript开发的构建工具是Grunt和Gulp。而grunt多用在文件较多，逻辑复杂的项目构建，如果只是用来管理小项目的话，gulp方便快捷，是最适合不过的了。

使用方法
先保证安装了node，使用node -v 检查是否已按转node

然后在全局安装gulp，是为了通过它来执行gulp任务，也可以通过gulp -v来检查是否安装成功。

    npm install -g gulp
新建一个package.json文件（基于nodejs项目必不可少的配置文件）

    npm init
说明：使用此命令后，会出现很多选项，你根据提示填写完毕就行了。比如项目名称、版本号、项目描述等等...
如下图所示：


特别提示：如果后面需要修改这个json文件，注意不能添加任何注释。

安装gulp需要用到的插件到这个项目，比如gulp-less

    npm install gulp-less --save-dev
说明：后面--save-dev 的意思是把gulp-less插件安装到这个项目，package.json中会在依赖中自动加上gulp-less这个插件。

安装grunt到这个项目

    npm install gulp --save-dev
新建gulpfile.js文件

在项目的根目录下新建gulpfile.js（gulp项目的配置文件），其内容如下：

```js
var gulp = require('gulp'),
        less = require('gulp-less');
    gulp.task('less', function () {
            gulp.src('./css/app.less')
                .pipe(less())
                .pipe(gulp.dest('./css'));
    });
    gulp.task('default',['less']);
```

如下图所示：


上面配置文件主要干的事情就是把less文件变成css文件。用到了gulp的src、pipe、task、dest方法。下面会进行详细介绍。
gulp的API
总的来说，gulp只有四个API，所以学习起来也非常容易，下面就对他们进行详细的介绍。

gulp.src(globs)

说明：src方法是指定需要处理的源文件的路径，globs参数必填（源文件路径）；

具体实例如下：

    gulp.src('less/style.less')  //指定less文件夹下的style.less文件
    gulp.src('js/**/*.js')   //指定js目录下所有子目录里的所有js文件。
    gulp.src(['js/**/*.js', '!js/**/*.min.js'])   //指定js目录下所有js文件（除了以min.js结尾的文件）。
gulp.dest(path)

说明：dest方法是指定处理完后文件输出的路径。

具体实例如下：

    gulp.src('./css/app.less') //该任务针对的文件
            .pipe(less()) //该任务调用的模块
            .pipe(gulp.dest('./css')); //将会在css/下生成app.css
上面用到了一个pipe方法。gulp借鉴了Unix操作系统的管道（pipe）思想，前一级的输出，直接变成后一级的输入。这里的意思是说：gulp.src(方法返回的是文件流，然后调用pipe方法的时候，直接输入文件流。)

gulp.task(name[, deps], fn)

说明：task定义一个gulp任务。
参数： name－任务的名称； deps－此任务依赖的其他任务； fn－此任务进行的操作
具体实例如下：
    var cssMin = require('gulp-minify-css');
    var rename = require('gulp-rename');
    var concat = require('gulp-concat');
    gulp.task('cssmin', ['less'], function() {      //css压缩的任务（要等less任务完成之后）
            return gulp.src('./src/**/*.css')       //指定获取到src下的所有css文件。
            .pipe(cssMin())     //执行压缩操作
            .pipe(concat('app.css'))     //把所有文件连接合成一个文件
            .pipe(rename({     //重命名
                suffix: '-min'
            }))
            .pipe(gulp.dest('./build'));   //会在build文件夹下生成一个app.min.css文件
    });
gulp.watch(glob [, opts], tasks)

说明：watch方法是用于监听文件变化，文件一修改就会执行指定的任务

具体实例如下：

    gulp.task('watchtask', function () {
        gulp.watch('./src/**/*.less', ['less'])     //如果src目录下的less文件有变化，则执行less任务（压缩less文件为css文件）
        gulp.watch('./demo/**/*.html', ['html'])
        gulp.watch('./src/**/*', ['js'])
    });
gulp插件
gulp的插件库相当的丰富，与插件结合使用可以实现强大的功能，我们上面的过程中就用到了很多插件。比如：

gulp-less：将less处理为css文件。
gulp-concat：可以把多个文件合并为一个文件。
gulp-minify-css：压缩css文件。
gulp-rename：重命名文件。
还有很多其他有用的插件，坐个简单的整理：

gulp-imagemin: 压缩图片。
gulp-uglify: 压缩js文件。
gulp-jshint: 检查js
gulp-htmlmin: 压缩html
gulp-livereload: 服务器控制客户端同步刷新(修改文件，浏览器自动刷新)
run-sequence: 让gulp任务，可以相互独立，解除任务间的依赖，增强task复用