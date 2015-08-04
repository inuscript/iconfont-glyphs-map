var glyphMap = require("../")
var mockCodepoint = require("./fixture/codepoint.json")
var assert = require("power-assert")

describe("iconfont-glyphs-map", function(){
  it("default mapping", function(){
    var map = glyphMap(mockCodepoint)
    assert.deepEqual(map, {
      "account":     "E001",
      "arrow-down":  "E002",
      "arrow-left":  "E003",
      "arrow-right": "E004",
      "arrow-up":    "E005",
      "basket": "E006",
      "close":  "E007",
      "minus":  "E008",
      "plus":   "E009",
      "search": "E00A"
    })
  })

  it("with backslash escape", function(){
    var map = glyphMap(mockCodepoint, "\\")
    assert.deepEqual(map, {
      "account":     "\\E001",
      "arrow-down":  "\\E002",
      "arrow-left":  "\\E003",
      "arrow-right": "\\E004",
      "arrow-up":    "\\E005",
      "basket": "\\E006",
      "close":  "\\E007",
      "minus":  "\\E008",
      "plus":   "\\E009",
      "search": "\\E00A"
    })
  })

  it("with only quote", function(){
    var map = glyphMap(mockCodepoint, true)
    assert.deepEqual(map, {
      "account":     "\"E001\"",
      "arrow-down":  "\"E002\"",
      "arrow-left":  "\"E003\"",
      "arrow-right": "\"E004\"",
      "arrow-up":    "\"E005\"",
      "basket": "\"E006\"",
      "close":  "\"E007\"",
      "minus":  "\"E008\"",
      "plus":   "\"E009\"",
      "search": "\"E00A\""
    })
  })
  it("with quote and backslash", function(){
    var map = glyphMap(mockCodepoint, "\\", true)
    assert.deepEqual(map, {
      "account":     "\"\\E001\"",
      "arrow-down":  "\"\\E002\"",
      "arrow-left":  "\"\\E003\"",
      "arrow-right": "\"\\E004\"",
      "arrow-up":    "\"\\E005\"",
      "basket": "\"\\E006\"",
      "close":  "\"\\E007\"",
      "minus":  "\"\\E008\"",
      "plus":   "\"\\E009\"",
      "search": "\"\\E00A\""
    })
  })
})