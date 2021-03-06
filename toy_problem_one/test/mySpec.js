(function () {
  'use strict';

  var name = "../toy_problem.js";
  var drawTriangle = require(name).drawTriangle;
  var triangle = "\n*\n**\n***\n****\n*****\n******\n"
  describe('drawTriangle', function () {
    it('should draw a triangle', function () {
      expect(drawTriangle()).toBe(triangle);
    });
  });

  var trianlgeTwo = "\n     *\n    ***\n   *****\n  *******\n *********\n***********\n";
  var drawTriangleTwo = require(name).drawTriangleTwo;
  describe('drawTriangleTwo', function () {
    it('should draw a triangle', function () {
      expect(drawTriangleTwo()).toBe(trianlgeTwo);
    });
  });

  var drawArrow = require(name).drawArrow;
  var arrow = "\n     *\n    ***\n   *****\n  *******\n *********\n***********\n    ***\n    ***\n    ***\n";
  describe('drawArrow', function () {
    it('should draw an arrow', function () {
      expect(drawArrow()).toBe(arrow);
    });
  });

  var drawInvertedArrow = require(name).drawInvertedArrow;
  var invertedArrow = "\n ***\n ***\n*****\n ***\n  *\n";
  describe('drawInvertedArrow', function () {
    it('should draw an inverted arrow', function () {
      expect(drawInvertedArrow()).toBe(invertedArrow);
    });
  });

  var drawDiamond = require(name).drawDiamond;
  var diamond = "\n    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *\n";
  describe('drawDiamond', function () {
    it('should draw a diamond', function () {
      expect(drawDiamond()).toBe(diamond);
    });
  });

  var drawSmile = require(name).drawSmile; 
  var smile = "\n      *********************\n     ***********************\n    ****   ***********   ****\n   *****   ***********   *****\n  *****************************\n  ************     ************\n   ***************************\n    ****                *****\n     ****              *****\n      ****            *****\n       ******************"
  describe('drawSmile', function () {
    it('should draw a smile', function () {
      expect(drawSmile()).toBe(smile);
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
