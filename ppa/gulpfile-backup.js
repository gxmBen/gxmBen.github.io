// generated on 2017-10-16 using generator-webHTML 3.0.1
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');
const browserSync = require('browser-sync').create();
const del = require('del');
const wiredep = require('wiredep').stream;
const runSequence = require('run-sequence');

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

let dev = true;

gulp.task('styles', () => {
  return gulp.src('HTML/css/*.css')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    // .pipe($.sass.sync({
    //   outputStyle: 'expanded',
    //   precision: 10,
    //   includePaths: ['.']
    // }).on('error', $.sass.logError))
    // .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    // .pipe($.if(dev, $.sourcemaps.write()))
    .pipe(gulp.dest('.tmp/css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({stream: true}));
});

gulp.task('scripts', () => {
  return gulp.src('HTML/js/**/*.js')
    .pipe($.plumber())
    .pipe($.if(dev, $.sourcemaps.init()))
    // .pipe($.babel())
    .pipe($.if(dev, $.sourcemaps.write('.')))
    .pipe(gulp.dest('.tmp/js'))
    .pipe(gulp.dest('dist/js'))
    .pipe(reload({stream: true}));
});

function lint(files) {
  return gulp.src(files)
    .pipe($.eslint({ fix: true }))
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
}

gulp.task('lint', () => {
  return lint('HTML/js/**/*.js')
    .pipe(gulp.dest('HTML/js'));
});
gulp.task('lint:test', () => {
  return lint('test/spec/**/*.js')
    .pipe(gulp.dest('test/spec'));
});

gulp.task('html', ['styles', 'scripts'], () => {
  return gulp.src('HTML/*.html')
    .pipe($.useref({searchPath: ['.tmp', 'HTML', '.']}))
    .pipe($.if(/\.js$/, $.uglify({compress: {drop_console: true}})))
    .pipe($.if(/\.css$/, $.cssnano({safe: true, autoprefixer: false})))
    .pipe($.if(/\.html$/, $.htmlmin({
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: {compress: {drop_console: true}},
      processConditionalComments: true,
      removeComments: true,
      removeEmptyAttributes: true,
      removeScriptTypeAttributes: true,
      removeStyleLinkTypeAttributes: true
    })))
    .pipe(gulp.dest('dist'));
});

gulp.task('images', () => {
  return gulp.src('HTML/images/**/*')
    .pipe($.cache($.imagemin()))
    .pipe(gulp.dest('dist/images'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('HTML/fonts/**/*'))
    .pipe($.if(dev, gulp.dest('.tmp/fonts'), gulp.dest('dist/fonts')));
});

gulp.task('extras', () => {
  return gulp.src([
    'HTML/*',
    '!HTML/*.html'
  ], {
    dot: true
  }).pipe(gulp.dest('dist'));
});

gulp.task('extras', () => {
return gulp.src('HTML/css/**/*.css')
.pipe($.plumber())
.pipe($.if(dev, $.sourcemaps.init()))
// .pipe($.babel())
.pipe($.if(dev, $.sourcemaps.write('.')))
.pipe(gulp.dest('.tmp/css'))
.pipe(gulp.dest('dist/css'))
.pipe(reload({stream: true}));
});

gulp.task('clean', del.bind(null, ['.tmp', 'dist']));

gulp.task('serve', () => {
  runSequence(['clean', 'wiredep'], ['styles', 'scripts', 'fonts'], () => {
    browserSync.init({
      notify: false,
      port: 9000,
      server: {
        baseDir: ['.tmp', 'HTML'],
        routes: {
          '/bower_components': 'bower_components'
        }
      }
    });

    gulp.watch([
      'HTML/*.css',
      'HTML/*.html',
      'HTML/images/**/*',
      '.tmp/fonts/**/*'
    ]).on('change', reload);

    gulp.watch('HTML/*.css', ['styles']);
    gulp.watch('HTML/css/*.css', ['styles']);
    gulp.watch('HTML/js/**/*.js', ['scripts']);
    gulp.watch('HTML/fonts/**/*', ['fonts']);
    gulp.watch('bower.json', ['wiredep', 'fonts']);
  });
});

gulp.task('serve:dist', ['default'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['dist']
    }
  });
});

gulp.task('serve:test', ['scripts'], () => {
  browserSync.init({
    notify: false,
    port: 9000,
    ui: false,
    server: {
      baseDir: 'test',
      routes: {
        '/js': '.tmp/js',
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch('HTML/js/**/*.js', ['scripts']);
  gulp.watch(['test/spec/**/*.js', 'test/index.html']).on('change', reload);
  gulp.watch('test/spec/**/*.js', ['lint:test']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('HTML/css/*.css')
    .pipe($.filter(file => file.stat && file.stat.size))
    .pipe(wiredep({
      ignorePath: /^(\.\.\/)+/
    }))
    .pipe(gulp.dest('HTML/css'))
    .pipe(gulp.dest('dist/css'));

  gulp.src('HTML/*.html')
    .pipe(wiredep({
      exclude: ['bootstrap-sass'],
      ignorePath: /^(\.\.\/)*\.\./
    }))
    .pipe(gulp.dest('HTML'));
});

gulp.task('build', ['lint', 'html', 'images', 'fonts', 'extras'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', () => {
  return new Promise(resolve => {
    dev = false;
    runSequence(['clean', 'wiredep'], 'build', resolve);
  });
});