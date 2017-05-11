var assert = require("../app/testingLab");
(function() {
  'use strict';

  describe("Produce the reverse order of a word: ", function() {
  describe("Case for en empty string", function() {

    it("should return null for empty string", function() {
      expect(assert.reverseString('')).toEqual(null);
    });

  });

  describe("Case for palindromes", function() {

    it("should return true for `anna`", function() {
      expect(assert.reverseString('anna')).toEqual(true);
    });

    it("should return true for `NaN`", function() {
      expect(assert.reverseString('NaN')).toEqual(true);
    });

    it("should return true for `civic`", function() {
      expect(assert.reverseString('civic')).toEqual(true);
    });

  });

  describe("Case for normal words", function() {

    it("should return `skoob` for `books`", function() {
      expect(assert.reverseString('books')).toEqual('skoob');
    });

    it("should return `nomolos` for `solomon`", function() {
      expect(assert.reverseString('solomon')).toEqual('nomolos');
    });

    it("should return `csim` for `misc`", function() {
      expect(assert.reverseString('misc')).toEqual('csim');
    });

  });

});

})();







