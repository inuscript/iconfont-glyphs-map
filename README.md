# iconfont-glyphs-map

This is [iconfont](https://github.com/nfroidure/gulp-iconfont/) support package.

## API
### `glyphsMap(glyphs, [ withQuote, [ withBackSlash ] ])`
- glyphs (array)
  - iconfont glyphs array
- withQuote (default `false`)
  - If true return code is quoted double quote
- withBackSlash (default `false`)
  - If true append `//`

## Usage Example

This sample pipe `iconfont` -> `_map.scss` -> compile with [`font.css`](https://github.com/inuscript/example-iconfont-sass/blob/master/scss/font.scss)

You can see more example : [here](https://github.com/inuscript/example-iconfont-sass)

```js
var file = require('gulp-file')
var iconfont = require("gulp-iconfont")
var sass = require("gulp-sass")
var glyphsMap = require('iconfont-glyphs-map');
var jsonSassObj = require('json-sass-obj');

// settings
var fontSetting = {
  src : ["svg/*.svg"],
  dest : "./dest/fonts",
  options : {
    fontName: "myFont",
    timestamp: 10
  }
}

gulp.task("font-with-css", function(){
  return gulp.src(fontSetting.src)
    .pipe(iconfont(fontSetting.options))
      .on('glyphs', function(glyphs){
        var glyphMap = glyphsMap(glyphs, true, true)
        file("_map.scss", JSON.stringify({
          name: fontSetting.options.fontName,
          path: fontSetting.options.dest,
          glyphs: glyphMap
        }))
          .pipe(jsonSassObj({
            prefix: "$font: ",
            suffix: " !default;"
          }))
          .pipe(gulp.dest("./dest/scss"))
        // use this
        // https://github.com/inuscript/example-iconfont-sass/blob/master/scss/font.scss
        gulp.src(["scss/*.scss","dest/scss/*.scss"])
          .pipe(sass())
          .pipe(gulp.dest("./dest/css"))
      })
    .pipe(gulp.dest(fontSetting.dest))
})
```