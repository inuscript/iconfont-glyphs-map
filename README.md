# iconfont-glyphs-map

This is [iconfont](https://github.com/nfroidure/gulp-iconfont/) support package.

## Simple Usage
You can use this gulp-iconfont.

```js
gulp.task("font", function(){
  return gulp.src(fontSetting.src)
    .pipe(iconfont(fontSetting.options))
      .on('glyphs', function(glyphs){
        var glyphMap = glyphsMap(glyphs, true, true)
        file("codepoint.json", JSON.stringify(glyphMap))
          .pipe(gulp.dest("./dest/"))
      })
    .pipe(gulp.dest(fontSetting.dest))
})
```
## API
### `glyphsMap(glyphs, [ appendChar, [ withQuote ] ])`

return glyph `Object`

- glyphs (array)
  - iconfont glyphs array
- appendChar (default `empty`)
  - You can add escape character 
    - For sass, you can append `"\\"`.
    - For json, you can append `"\\u"`.
- withQuote (default `false`)
  - If true return code is quoted double quote

### `glyphsMap.array(glyphs, [ withQuote, [ withBackSlash ] ])`

return glyph as `Object Array` like this

```js
var glyphs = [
  {name: "account", code: "E001"}
]
```

## CSS output Example

Example for pipe `iconfont` -> `_map.scss` -> compile with [`font.scss`](https://github.com/inuscript/example-iconfont-sass/blob/master/scss/font.scss) -> `font.css`

You can see [full example](https://github.com/inuscript/example-iconfont-sass)

```js
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