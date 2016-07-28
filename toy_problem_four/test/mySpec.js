(function () {
  'use strict';
var name = "../toy_problem.js";
var findMajorityElement=require(name).findMajorityElement;
describe("findMajorityElement",function () {
	it("element which occurs more than n/2 times",function () {
		expect(findMajorityElement(["a","c","c","c"])).toBe("c");
	});

});

})();
