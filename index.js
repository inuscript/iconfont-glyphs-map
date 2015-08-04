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

var asArray =  function(glyphs, appendChar, withQuote){
  var obj = glyphMap(glyphs, appendChar, withQuote)
  var arr = []
  Object.keys(obj).forEach(function(name){
    var code = obj[name]
    arr.push({ name: name, code: code })
  })
  return arr
}

var asMap = function(glyphs, appendChar, withQuote){
  var obj = asArray(glyphs, appendChar, withQuote)
  var map = new Map()
  obj.forEach(function(item){
    map.set(item[0], item[1])
  })
  return map
}

module.exports = glyphMap
module.exports.array = asArray
module.exports.map = asMap
