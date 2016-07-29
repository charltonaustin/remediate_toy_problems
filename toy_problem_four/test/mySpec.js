(function () {
  'use strict';
var name = "../toy_problem.js";
var findMajorityElement=require(name).findMajorityElement;
describe("findMajorityElement",function () {
	it("element which occurs more than n/2 times",function () {
		expect(findMajorityElement(["a","c","c","c"])).toBe("c");
	});

});
var nextGreaterNumber=require(name).nextGreaterNumber;
describe("nextGreaterNumber",function () {
	it("find the next greater number using same digits",function () {
		expect(nextGreaterNumber(1234)).toBe(1243);
	});

});

var reverseTheString=require(name).reverseTheString;
describe("reverseTheString",function () {
	it("Given a string, reverse the string word by word",function () {
		expect(reverseTheString("Elham Ali Rbabah")).toBe("Rbabah Ali Elham");
	});
 console.log("sfsjfgjgjhere")
});

var minEditDistance=require(name).minEditDistance;
describe("minEditDistance",function () {
	it("Minimum Edit distance between two strings str1 and str2",function () {
		expect(minEditDistance("INTENTION","EXECUTION")).toBe(5);
	});

});

})();
