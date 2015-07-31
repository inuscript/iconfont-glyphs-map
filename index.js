var quote = require("quote")
var empty = function(s){ return s }

module.exports = function(glyphs, withQuote, withBackslash){
  var bs = (withBackslash === true) ? "\\" : ""
  var fn = (withQuote === true) ? quote : empty

  return glyphs.reduce(function(obj, glyph){
    glyphs.forEach(function(glyph){
      // var code = "\\" + glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      var code = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      obj[glyph.name] = fn(bs + code)
    })
    return obj
  }, {})
}

