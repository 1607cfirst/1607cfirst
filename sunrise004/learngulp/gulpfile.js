// 加载插件
var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

// css
// gulp.task('css', function() {
//     return gulp.src('src/css/main.css')
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(minifycss())
//     .pipe(gulp.dest('dist'))
// });
// script


gulp.task('css', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'           // 配置输出方式,默认为nested
        }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'))
});



gulp.task('script', function() {
  return gulp.src('src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist'))
});
// images
gulp.task('images', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
// 默认任务
gulp.task('default', function() {
    gulp.start('script', 'css', 'images');
});

// 监视


gulp.task('watch', function() {

    gulp.watch('src/sass/**/*.scss', ['sass']);

  // 监视css文件的改动
  gulp.watch('src/css/*.css', ['css']);
  // 监视js文件的改动
  gulp.watch('src/js/*.js', ['script']);
  // 监视images文件的改动
  gulp.watch('src/images/*', ['images']);
  // 创建浏览器自动刷新服务器
  livereload.listen();
  // dist目录下文件有改动就会浏览器刷新
  gulp.watch(['dist/**/*.*']).on('change', livereload.changed);
});