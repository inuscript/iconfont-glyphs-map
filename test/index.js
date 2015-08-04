var glyphMap = require("../")
var mockCodepoint = require("./fixture/codepoint.json")
var assert = require("power-assert")

describe("iconfont-glyphs-map", function(){
  describe("glyphMap", function(){
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
    describe("appendChar", function(){
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
      it("with backslash escape", function(){
        var map = glyphMap(mockCodepoint, '\\u')
        assert.deepEqual(map, {
          "account":     '\\uE001',
          "arrow-down":  '\\uE002',
          "arrow-left":  '\\uE003',
          "arrow-right": '\\uE004',
          "arrow-up":    '\\uE005',
          "basket": '\\uE006',
          "close":  '\\uE007',
          "minus":  '\\uE008',
          "plus":   '\\uE009',
          "search": '\\uE00A'
        })
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
  describe("glyphMap.array", function(){
    it("should return array", function(){
      var array = glyphMap.array(mockCodepoint)
      assert.deepEqual(array, [
        { name: "account",     code: "E001"},
        { name: "arrow-down",  code: "E002"},
        { name: "arrow-left",  code: "E003"},
        { name: "arrow-right", code: "E004"},
        { name: "arrow-up",    code: "E005"},
        { name: "basket", code: "E006"},
        { name: "close",  code: "E007"},
        { name: "minus",  code: "E008"},
        { name: "plus",   code: "E009"},
        { name: "search", code: "E00A"}
      ])
    })
  })

  describe("glyphMap.map", function(){
    it("should return es6 map", function(){
      try{
        new Map()
      }catch(e){
        skip("Not supported")
        return 
      }
      var map = glyphMap.map(mockCodepoint)
      var expect = new Map()
      expect.set("account", "E001")
      expect.set("arrow-down", "E002")
      expect.set("arrow-left", "E003")
      expect.set("arrow-right", "E004")
      expect.set("arrow-up", "E005")
      expect.set("basket", "E006")
      expect.set("close", "E007")
      expect.set("minus", "E008")
      expect.set("plus", "E009")
      expect.set("search", "E00A")

      assert.deepEqual(map, expect)
    })
  })

})