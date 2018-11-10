const files = [
    // put files here
];

const {src, dest, watch} = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

function js(file) {
    return src(file)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(rename({suffix: '.dist'}))
        .pipe(dest(file => file.base))
}

function generateJs() {
    return files.forEach(file => js(file));
}

exports.js = generateJs;
exports.default = () => {
    generateJs();
    watch(files, file => js(file.path));
};
