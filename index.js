var quote = require("quote")
var empty = function(s){ return s }

var glyphMap = function(glyphs, appendChar, withQuote){
  if(withQuote == false || typeof appendChar === "boolean"){
    withQuote = appendChar
    appendChar = undefined
  }

  var chr = (appendChar === undefined) ? "" : appendChar
  var quoteFn = (!!(withQuote) === true) ? quote : empty

  return glyphs.reduce(function(obj){
    glyphs.forEach(function(glyph){
      // var code = "\\" + glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      var code = glyph.unicode[0].charCodeAt(0).toString(16).toUpperCase()
      obj[glyph.name] = quoteFn(chr + code)
    })
    return obj
  }, {})
}

module.exports = glyphMap
