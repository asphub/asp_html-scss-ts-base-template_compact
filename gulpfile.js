/**
 * @name gulp-packager
 * @version 1.5.0
 * @release 15-07-2021
 */

const { paths } = require("./_config/paths");

const {
  src,
  dest,
  watch,
  series
} = require('gulp');

// const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
const autoprefixer = require('gulp-autoprefixer');
// const sass =  require('gulp-sass')(require('node-sass'));
const sass = require('gulp-sass')(require('sass'));
const cleanCss = require('gulp-clean-css');
const ts = require('gulp-typescript');
const rename = require('gulp-rename');
// const concat = require('gulp-concat');
const purgecss = require('gulp-purgecss');

const browserSync = require('browser-sync').create();

// const del = require('delete');
// const { EventEmitter } = require('events');
// const { exec } = require('child_process');
// const fs = require('fs');

// function clean(cb) {
//   // body omitted
//   cb();
// }

async function SCSS() {
  return src(paths.cssSrc)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ["defaults"]
    }))
    .pipe(sourcemaps.write())
    .pipe(dest(paths.cssDest))
    .pipe(cleanCss())
    // .pipe(purgecss({
    //   content: [
    //     '*.html',
    //     '**/*.js'
    //   ]
    // }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(dest(paths.cssDest))
    .pipe(livereload())
    .pipe(browserSync.reload({ stream: true }));
  // .pipe(browserSync.stream({ match: '**/*.css' }));
}

async function typescript() {
  return src(paths.tsSrc)
    .pipe(ts({
      target: 'ES5',
      noImplicitAny: true,
    }))
    .pipe(dest(paths.tsDest))
    .pipe(livereload());
  // cb();
}

async function syncServe() {
  browserSync.init({
    watch: true,
    server: {
      baseDir: paths.root,
      serveStaticOptions: {
        extensions: ["html"]
      }
    },
    // https: {
    //   key: "./livereload.key",
    //   cert: "./livereload.crt"
    // },
    callbacks: {
      /**
       * This 'ready' callback can be used
       * to access the Browsersync instance
       */
      // ready: function (err, bs) {
      //   // example of accessing URLS
      //   // console.log(bs.options.get('urls'));
      //   // example of adding a middleware at the end
      //   // of the stack after Browsersync is running
      //   bs.addMiddleware("*", function (req, res) {
      //     // console.log(req.url);
      //     res.writeHead(302, {
      //       location: req.url + ".html"
      //     });
      //     res.end("Redirecting!");
      //   });
      // }
    }
  });
  livereload.listen();
}

watch(paths.cssSrc, series(SCSS));
watch(paths.tsSrc, series(typescript));

// function streamTask() {
//   return src('*.js')
//     .pipe(dest('output'));
// }

// function promiseTask() {
//   return Promise.resolve('the value is ignored');
// }

// function eventEmitterTask() {
//   const emitter = new EventEmitter();
//   // Emit has to happen async otherwise gulp isn't listening yet
//   setTimeout(() => emitter.emit('finish'), 250);
//   return emitter;
// }

// function childProcessTask() {
//   return exec('date');
// }

// async function asyncAwaitTask() {
//   const { version } = fs.readFileSync('package.json');
//   console.log(version);
//   await Promise.resolve('some result');
// }
// watch(['*.php', '*.html', '**/*.js', '**/*.css']).on('change', browserSync.reload);

// exports.build = series(clean, parallel(css, javascript));
exports.default = series(SCSS, typescript, syncServe);