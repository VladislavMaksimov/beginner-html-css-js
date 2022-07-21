const { src, series } = require("gulp");
const ghPages = require("gulp-gh-pages");

const deploy = () => src("src/**/*").pipe(ghPages());

exports.deploy = series(deploy);
exports.default = series(deploy);
