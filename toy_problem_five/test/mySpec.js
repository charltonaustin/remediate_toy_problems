(function () {
  'use strict';

  var name = "../toy_problem.js";
  var findMajorityElement = require(name).findMajorityElement;
  
  describe('findMajorityElement', function () {
    it('should find the rigth element', function () {
      expect(findMajorityElement([1,2,1])).toBe(1);
      expect(findMajorityElement([1,2,1,2])).toEqual([1,2]);
      expect(findMajorityElement([])).toBeUndefined();
      expect(findMajorityElement([1,1,1,1,1,1])).toBe(1);
      expect(findMajorityElement(["hello", 1, "cat", "", "hello", "hello", "hello"])).toBe("hello");
    });
  });

})();
