var quote = require("quote")
var empty = function(s){ return s }

var glyphMap = function(glyphs, withQuote, withBackslash){
  var bs = (withBackslash === true) ? "\\" : ""
  var quoteFn = (withQuote === true) ? quote : empty

  return glyphs.reduce(function(obj, glyph){
    glyphs.forEach(function(glyph){
      // var code = "\\" + glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      var code = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      obj[glyph.name] = quoteFn(bs + code)
    })
    return obj
  }, {})
}

module.exports = glyphMap
