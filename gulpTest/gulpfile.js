var gulp = require('gulp'),
    cssmin = require('gulp-minify-css'),//压缩css文件
    concat = require('gulp-concat'),//合并文件 --合并只是放一起--压缩才会真正合并相同样式
    uglify = require('gulp-uglify'),//压缩js文件
    rename = require('gulp-rename'),//设置压缩后的文件名
    del = require('del'),//删除文件
    imagemin = require('gulp-imagemin'),//压缩图片
    pngquant = require('imagemin-pngquant'),//深度压缩图片
    spriter=require('gulp-css-spriter');//合并图片
          
//压缩css
    gulp.task('cssmin', function() {
       	gulp.src('src/css/*.css')      //压缩的文件
	        .pipe(cssmin()) //压缩css
	        .pipe(rename({suffix:'.min'}))
           	.pipe(gulp.dest('dist/css'))   //输出文件夹
    });

//压缩图片
    gulp.task('imgmin', function () {
	    gulp.src('src/img/*.{png,jpg,gif,ico}')
	        .pipe(imagemin({
	            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
	            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
	            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
	            multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
	        }))
	        .pipe(gulp.dest('dist/img'));
	});

//深度压缩图片
	gulp.task('testImagemin', function () {
	    gulp.src('src/images/*.{png,jpg,gif,ico}')
	        .pipe(imagemin({
	            progressive: true,
	            svgoPlugins: [{removeViewBox: false}],//不要移除svg的viewbox属性
	            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
	        }))
	        .pipe(gulp.dest('dist/images'));
	});

    
//合并css图片 --执行了css1  再执行css2  	
   	gulp.task('spriter',['cssmin'], function () {
	    gulp.src(['dist/css/app.min.css']) //该任务针对的文件
         	.pipe(spriter({
	            // 生成的spriter的位置
	            spriteSheet: 'dist/img/spritesheet.png',
	            // 生成样式文件图片引用地址的路径
	            pathToSpriteSheetFromCSS: '../img/spritesheet.png',
	            spritesmithOptions: {
	                padding: 10
	            }
	        }))
	        .pipe(gulp.dest('dist/img/'));
	});
    
//压缩js
   	gulp.task('jsmin', function() {
      	gulp.src('src/js/*.js')
          	.pipe(concat('main.js'))    //合并所有js到main.js
          	.pipe(gulp.dest('dist/js'))    //输出main.js到文件夹
          	.pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
          	.pipe(uglify())    //压缩
          	.pipe(gulp.dest('dist/js'));  //输出
   	});
   	
//执行压缩前，先删除文件夹里的内容
    gulp.task('clean', function(cb) {
    	del(['dist/*'], cb)
    });
    
//默认命令，在cmd中输入gulp后，执行的就是这个命令
    gulp.task('default', function() {
        gulp.start('cssmin', 'jsmin','imgmin');
    });