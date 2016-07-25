/*
These functions are meant to be done without the internet.
They are pretty straight forward. Try and do all of them
without any help from anyone. They require only basic 
JavaScript
*/


/*
 Create a function called drawTriangle that draws the following:

*
**
***
****
*****
******

Then refactor it so that you can contorl the height of the triangle.
for instance drawTriangle(4) gives you back a trianle like

*
**
***
****
Don't forget to write tests for it.
 
*/

var drawTriangle = function(){
  return "";
}

/*
 Create a function called drawTriangleTwo that draws the following:

     *
    ***
   *****
  *******
 *********
***********

Then refactor it to so that it can take a height.
*/

var drawTriangleTwo = function(){
  return "";
}


/*
Create a function, drawArrow, that draws:

     *
    ***
   *****
  *******
 *********
***********
    ***
    ***
    ***

Now refacto the function to take two parameters one for the height of the tree
and another for the height of the base of the tree.
for instance tree(3,4) looks like:
  *
 ***
*****
 ***
 ***
 ***
 ***
*/

var drawArrow = function(){
  return "";
}


/*
Create a function, inverted arrow, that draws:
 ***
 ***
*****
 ***
  *
*/

var drawInvertedArrow = function(){
  return "";
}

/*
Now create a function, diamond, that draws:

    *
   ***
  *****
 *******
*********
 *******
  *****  
   ***
    *

Now refactor your code to take parameter that is the size of the diamond.
*/

var drawDiamond = function(){

}

/*
Create a function called, smile, that draw:
      *********************
     ***********************
    ****   ***********   ****
   *****   ***********   *****
  *****************************
  ************     ************
   ***************************
    ****                *****
     ****              *****
      ****            *****
       ******************
You should be able to parameterize this with some higher order
functions. Try and see if you can make some parameters so you can
control different parts of the face.
*/

var drawSmile = function(){
  return "";
}

/*
Create a funciton called drawSpiral that draws:

   *************
               *
   **********  *
   *        *  *
   *  ****  *  *
   *  *     *  *
   *  *******  *
   *           *
   *************

Refactor this to define the number of turns of the spiral
For instance the one above has 6 turns
*/

var drawSpiral = function(){
  return "";
}

module.exports = {drawTriangle, 
                  drawTriangleTwo, 
                  drawArrow, 
                  drawInvertedArrow,
                  drawDiamond,
                  drawSmile,
                  drawSpiral};


