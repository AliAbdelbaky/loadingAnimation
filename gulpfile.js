const { dest } = require("gulp");
const gulp = require("gulp"),
    sass = require("gulp-sass"),
    pug = require("gulp-pug"),
    sourcemaps = require("gulp-sourcemaps"),
    minify = require("gulp-minify"),
    concat = require("gulp-concat"),
    autoprefixer = require("gulp-autoprefixer"),
    notify = require("gulp-notify");
//- HTML TASK
gulp.task("html", () => {
    return gulp.src("./stage/html/*.pug")
        .pipe(pug({
            pretty: true
        }))
        .pipe(dest('./dist/'))
        .pipe(notify("Your Html Is Ready! ♥"))
});
//- CSS TASK 
gulp.task("css", () => {
    return gulp.src(["./stage/css/sass/*.sass", "./stage/css/libs/*.css"])
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        })).on("error", sass.logError)
        .pipe(autoprefixer('last 2 versions'))
        .pipe(concat("main.css"))
        .pipe(sourcemaps.write("."))
        .pipe(dest("./dist/css/"))
        .pipe(notify("Your Css Is Ready! ♥"))
});
//-JS TASK
gulp.task("js", () => {
    return gulp.src(["./stage/js/app/*.js", "./stage/js/libs/*.js"])
        .pipe(concat('all.js'))
        .pipe(minify())
        .pipe(dest("./stage/js/all/"))
});
//- JS REALOCATE
gulp.task("js-relocate", () => {
    return gulp.src("./stage/js/all/*.js")
        .pipe(dest("./dist/js/"))
        .pipe(notify("Your Js Is Ready! ♥"))
});
//- ASSETES TASK
gulp.task("assets", () => {
    return gulp.src("./stage/assets/*.*")
        .pipe(dest("./dist/img/"))
        .pipe(notify("Your Images Is Ready! ♥"))
});
//- WATCH TASk
gulp.task("watch", () => {
    gulp.watch("./stage/html/**/*.pug", gulp.series("html"));
    gulp.watch(["./stage/css/sass/**/*.sass", "./stage/css/libs/**/*.css"], gulp.series("css"));
    gulp.watch(["./stage/js/app/*.js", "./stage/js/libs/*.js"], gulp.series('js'));
    gulp.watch("./stage/js/all/*.js", gulp.series("js-relocate"));
    gulp.watch("./stage/assets/*.*", gulp.series("assets"));
});