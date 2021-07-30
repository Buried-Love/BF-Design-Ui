const gulp = require('gulp')
const cleanCSS = require('gulp-clean-css')
const sass = require('gulp-sass')
const rename = require('gulp-rename')
const autoprefixer = require('gulp-autoprefixer')
const uglifycss = require('gulp-uglifycss')
const del = require('del')

// 编译sass
gulp.task('css', () => {
  return gulp
    .src('../src/styles/componentStyle/index.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cleanCSS())
    .pipe(uglifycss())
    .pipe(rename('bf-design-ui.css'))
    .pipe(gulp.dest('../dist/styles'))
})

// 拷贝fonts
gulp.task('fonts', () => {
  console.log('Copying fonts...')
  return gulp
    .src('../src/styles/fonts/*.*')
    .pipe(gulp.dest('../dist/styles/fonts'))
})

// 删除styles
gulp.task('clean', async (done) => {
  console.log('Deleting styles...')
  await del(['../dist/styles/**'], {
    force: true,
  })
  done()
})

gulp.task('default', gulp.series('clean', 'css', 'fonts'))
