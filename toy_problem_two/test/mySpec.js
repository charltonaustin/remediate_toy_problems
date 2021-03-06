(function () {
  'use strict';

  var name = "../toy_problem.js";
  var findSumOfPrimesLessThan = require(name).findSumOfPrimesLessThan;
  describe('findPrimesLessThan', function () {
    it('should find sum', function () {
      expect(findSumOfPrimesLessThan(10)).toBe(17);
      expect(findSumOfPrimesLessThan(100)).toBe(1060);
      expect(findSumOfPrimesLessThan(1000)).toBe(3682913);
      expect(findSumOfPrimesLessThan(500000)).toBe("????");
    });
  });

})();
