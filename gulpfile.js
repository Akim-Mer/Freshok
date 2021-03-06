const { src, dest, watch, parallel, series} = require('gulp');
const scss = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const browserSync = require('browser-sync').create();
const imagemin    = require('gulp-imagemin');
const del = require('del');
const svgSprite = require('gulp-svg-sprite');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');







function svgSprites() {
	return src('app/images/icons/*.svg') // выбираем в папке с иконками все файлы с расширением svg
	// .pipe(cheerio({
	// 		run: ($) => {
	// 			$("[fill]").removeAttr("fill"); // очищаем цвет у иконок по умолчанию, чтобы можно было задать свой
	// 			$("[stroke]").removeAttr("stroke"); // очищаем, если есть лишние атрибуты строк
	// 			$("[style]").removeAttr("style"); // убираем внутренние стили для иконок
	// 		},
	// 		parserOptions: { xmlMode: true },
	// 	})
	// )  
	.pipe(replace('&gt;','>'))
	.pipe(
		svgSprite({
		  mode: {
			stack: {
			  sprite: '../sprite.svg', // указываем имя файла спрайта и путь
			},
		  },
		})
	  )
		  .pipe(dest('app/images')); // указываем, в какую папку поместить готовый файл спрайта
  }



function images(){
	return src('app/images/**/*')
	.pipe (imagemin(
		[
		imagemin.gifsicle({interlaced: true}),
		imagemin.mozjpeg({quality: 75, progressive: true}),
		imagemin.optipng({optimizationLevel: 5}),
		imagemin.svgo({
			plugins: [
				{removeViewBox: true},
				{cleanupIDs: false}
			]
		})
	]))
	.pipe(dest('dist/images'));
}


function browsersync(){
	browserSync.init({
		server: {
			baseDir: "app/" 
		},
		notify: false
	});
}

function cleanDist(){
	return del ('dist');
}

function styles() {
	return src('app/scss/style.scss')
	.pipe(scss({outputStyle:'expanded'}))
	.pipe(concat('style.min.css')) 
	.pipe(autoprefixer({
		overrideBrowserslist: ['last 10 version'],
		grid: false
	}))
	.pipe(dest('app/css'))
	.pipe(browserSync.stream());
}


function scripts(){
	return src([
		'node_modules/jquery/dist/jquery.js',
		'node_modules/slick-carousel/slick/slick.js',
		'node_modules/mixitup/dist/mixitup.js',
		'node_modules/jquery-form-styler/dist/jquery.formstyler.js',
		'node_modules/nouislider/dist/nouislider.js',
		'node_modules/rateyo/src/jquery.rateyo.js',
		'node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js',
		'app/js/main.js'
	])
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(dest('app/js'))
		.pipe(browserSync.stream());
}


function watching(){
	watch(['app/scss/**/*.scss'], styles);
	watch(['app/js/**/*.js','!app/js/main.min.js'], scripts);
	watch(['app/*.html']).on('change', browserSync.reload);
	watch(['app/images/icons/*.svg'], svgSprites);
}


function build(){
	return src([
		'app/css/style.min.css',
		'app/fonts/**/*',
		'app/js/main.min.js',
		'app/*.html'
	], {base:'app'})
		.pipe(dest('dist'));
}

exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.cleanDist = cleanDist;
exports.watching = watching;
exports.browsersync = browsersync;
exports.svgSprites = svgSprites;

exports.build = series (cleanDist, images, build);
exports.default = parallel(svgSprites, styles, scripts, browsersync, watching);