const gulp = require("gulp")
const { series } = require("gulp")
const concat = require("gulp-concat")
const uglify = require("gulp-uglify")
const babel = require("gulp-babel")

function transformacaoJs(cb) {
    // é possivel também retornar o workflow
    return gulp.src("src/**/*.js")
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on("error", err => console.log(err))
        .pipe(concat("codigo.min.js"))
        .pipe(gulp.dest("build"))

    // return cb() 
}

function fim(cb) {
    console.log("fim")
    return cb()
}

exports.default = series(transformacaoJs, fim)