/* File: gulpfile.js */

// Use localhost:8080

'use strict';

import gulp          from 'gulp';
import babel         from 'gulp-babel';
import del           from 'del';
import browserSync   from 'browser-sync';
import sass          from 'gulp-sass';
import autoprefixer  from 'gulp-autoprefixer';
import cssnano       from 'gulp-cssnano';
import rename        from 'gulp-rename';
import pug           from 'gulp-pug';
import prettify      from 'gulp-prettify';
import newer         from 'gulp-newer';
import imagemin      from 'gulp-imagemin';
import concat        from 'gulp-concat';
import plumber       from 'gulp-plumber';
import notify        from 'gulp-notify';
import uglify        from 'gulp-uglify';
import purgecss      from 'gulp-purgecss';
import jsimport      from 'gulp-js-import';
import zip           from 'gulp-zip';

const portDest = '8080',
    now = new Date(),
    server = browserSync.create(),
    paths = {
        build: 'build/',
        styles: {
            src: 'src/assets/styles/**/*.scss',
            dest: 'build/assets/styles/'
        },
        scripts: {
            src: 'src/assets/scripts/**/*.js',
            srcMain: 'src/assets/scripts/main.js',
            exSrc: '!src/assets/scripts/components/*.js',
            dest: 'build/assets/scripts/',
        },
        templates: {
            src: 'src/templates/**/*.+(pug|html)',
            exSrc: '!src/templates/include/**/*.+(pug|html)',
            dest: 'build/'
        },
        images: {
            src: 'src/assets/images/**/*.+(jpg|jpeg|png|gif|svg)',
            exSrc: '!src/assets/images/favicon/**/*',
            dest: 'build/assets/images/'
        },
        favicons: {
            src: 'src/assets/images/favicon/**/*.+(ico|png)',
            dest: 'build/'
        },
        fonts: {
            src: 'src/assets/fonts/**/*.+(eot|ttf|svg|woff)',
            dest: 'build/assets/fonts/'
        },
        zip: {
            src: 'src/**/*',
            build: 'build/**/*',
            destOld: 'zip/old',
            destProd: 'zip/prod'
        },
};

export const clean = () => del([paths.build]);

export function reload(done) {
  server.reload();
  done();
}

export function browser(done) {
    return server.init({
        server: {
            baseDir: paths.build
        },
        port: portDest
    });
    done();
}

export const templates = () => gulp.src([paths.templates.src, paths.templates.exSrc])
    .pipe(pug({
        pretty: true,
        defaults: {
            cache: false
        },
        verbose: true
    }))
    .pipe(prettify({
        indent_inner_html: true,
        indent_size: 4,
        unformatted: []
    }))
    .pipe(gulp.dest( paths.templates.dest ))

export const styles = () => gulp.src(paths.styles.src)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(gulp.dest( paths.styles.dest ))
    .pipe(cssnano({
        zindex: false
    }))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest( paths.styles.dest ))

export const images = () => gulp.src([ paths.images.src, paths.images.exSrc ])
    .pipe(newer( paths.images.dest ))
    .pipe(imagemin([
        imagemin.jpegtran({
            progressive: true
        }),
        imagemin.optipng({
            optimizationLevel: 5
        })
    ], {
        verbose: true
    }))
    .pipe(gulp.dest( paths.images.dest ))

export const scripts = () => gulp.src([ paths.scripts.src, paths.scripts.exSrc ])
    .pipe(gulp.dest( paths.scripts.dest ))

export const scriptComps = () => gulp.src(paths.scripts.srcMain)
    .pipe(jsimport({ hideConsole: false }))
    .pipe(concat( 'main.js' ))
    .pipe(gulp.dest( paths.scripts.dest ))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest( paths.scripts.dest ))

export const favicons = () => gulp.src( paths.favicons.src )
    .pipe(gulp.dest( paths.favicons.dest ))

export const fonts = () => gulp.src( paths.fonts.src )
     .pipe(gulp.dest( paths.fonts.dest ))

export const zipsource = () => gulp.src( paths.zip.src )
    .pipe(zip( now.toDateString() + ' ' + now.toLocaleTimeString() + '/' + 'src.zip' ))
    .pipe(gulp.dest( paths.zip.destOld ))

export const zipbuild = () => gulp.src( paths.zip.build )
    .pipe(zip(now.toDateString() + ' ' + now.toLocaleTimeString() + '/' + 'build.zip' ))
    .pipe(gulp.dest( paths.zip.destOld ))

export const zipprod = () => gulp.src( paths.zip.build )
    .pipe(zip(now.toDateString() + ' ' + now.toLocaleTimeString() + '/' + 'build-prod.zip' ))
    .pipe(gulp.dest( paths.zip.destProd ))

export const devwatch = () => {
    gulp.watch( paths.styles.src, gulp.series(styles, reload) );
    gulp.watch( paths.templates.src, gulp.series(templates, reload) );
    gulp.watch( paths.images.src, gulp.series(images, reload) );
    gulp.watch( paths.scripts.src, gulp.series(scripts, scriptComps, reload) );
    gulp.watch( paths.favicons.src, gulp.series(favicons, reload) );
    gulp.watch( paths.fonts.src, gulp.series(fonts, reload) );
};

exports.clean       = clean;
exports.styles      = styles;
exports.templates   = templates;
exports.browser     = browser;
exports.images      = images;
exports.scripts     = scripts;
exports.scriptComps = scriptComps;
exports.favicons    = favicons;
exports.fonts       = fonts;
exports.zipsource   = zipsource;
exports.zipbuild    = zipbuild;
exports.zipprod     = zipprod;
exports.devwatch    = devwatch;

const build = gulp.series( zipsource, zipbuild, clean, templates, styles, scripts, scriptComps, favicons, fonts, images, gulp.parallel( browser, devwatch ));

export const prod = gulp.series(zipprod);

export default build;
