var quote = require("quote")
var empty = function(s){ return s }

var glyphMap = function(glyphs, escapeChar, withQuote){
  if(withQuote == false || typeof escapeChar === "boolean"){
    withQuote = escapeChar
    escapeChar = undefined
  }

  var escChar = (escapeChar === undefined) ? "" : escapeChar
  var quoteFn = (!!(withQuote) === true) ? quote : empty

  return glyphs.reduce(function(obj){
    glyphs.forEach(function(glyph){
      // var code = "\\" + glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      var code = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      obj[glyph.name] = quoteFn(escChar + code)
    })
    return obj
  }, {})
}

module.exports = glyphMap
