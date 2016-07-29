(function () {
  'use strict';

  var name = "../toy_problem.js";
  var drawTriangle = require(name).drawTriangle;
  var triangle = "\n*\n**\n***\n****\n*****\n******\n"
  describe('drawTriangle', function () {
    it('should draw a triangle', function () {
      expect(drawTriangle(6)).toBe(triangle);
    });
  });
  

  var trianlgeTwo = "\n     *\n    ***\n   *****\n  *******\n *********\n***********\n";
  var drawTriangleTwo = require(name).drawTriangleTwo;
  describe('drawTriangleTwo', function () {
    it('should draw a triangle', function () {
      expect(drawTriangleTwo(6)).toEqual(trianlgeTwo);
    });
  });

  var drawArrow = require(name).drawArrow;
  var arrow = "\n     *\n    ***\n   *****\n  *******\n *********\n***********\n    ***\n    ***\n    ***\n";
  describe('drawArrow', function () {
    it('should draw an arrow', function () {
      expect(drawArrow(6,3)).toBe(arrow);
    });
  });

  var drawInvertedArrow = require(name).drawInvertedArrow;
  var invertedArrow = "\n ***\n ***\n*****\n ***\n  *\n";
  describe('drawInvertedArrow', function () {
    it('should draw an inverted arrow', function () {
      expect(drawInvertedArrow(3,2)).toBe(invertedArrow);
    });
  });

  var drawDiamond = require(name).drawDiamond;
  var diamond = "\n    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *\n";
  describe('drawDiamond', function () {
    it('should draw a diamond', function () {
      expect(drawDiamond(9)).toBe(diamond);
    });
  });

  var drawSmile = require(name).drawSmile; 
  var smile = "\n      *********************\n     ***********************\n    ****   ***********   ****\n   *****   ***********   *****\n  *****************************\n  ************     ************\n   ***************************\n    ****                *****\n     ****              *****\n      ****            *****\n       ******************"
  describe('drawSmile', function () {
    it('should draw a smile', function () {
      expect(drawSmile(29,3,5)).toBe(smile);
    });
  });


  var drawSpiral = require(name).drawSpiral; 
  var spiral = "\n   *************\n               *\n   **********  *\n   *        *  *\n   *  ****  *  *\n   *  *     *  *\n   *  *******  *\n   *           *\n   *************\n";
  describe('drawSpiral', function () {
    it('should draw a spiral', function () {
      expect(drawSpiral()).toBe(spiral);
    });
  });

})();
