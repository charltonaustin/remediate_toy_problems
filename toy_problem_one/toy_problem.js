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
var drawTriangle = function(n){
	var x="\n";
	var x2="";
	for(var i=0 ; i<n ; i++){
		x2=x2+"*";
		x=x+x2+"\n";
	}
  return x;
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
var drawTriangleTwo = function(n){
	var star = "*";
	var result = "\n";
	for(var i=0 ; i<n ; i++){
		var space = "";
for(var x=0 ; x<(n-i)-1 ;x++){
space=space+" ";
}
result=result+space+star+"\n";
star=star+"**";
}
return result;
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
var drawArrow = function(n1,n2){
var result =drawTriangleTwo(n1);
//console.log(result);
var spaceH = (n1+(n1-1)-3)/2;
var star = "***";
for(var i=0 ; i<n2 ; i++){
var space = "";
for(var x=0 ; x<spaceH ; x++){
space = space+" ";
}
result=result+space+star+"\n";
}
return result;
}
/*
Create a function, inverted arrow, that draws:
 ***
 ***
*****
 ***
  *
*/
var reversArrow = function(n){
var result="";
//var starN = n+(n-1);
var space = "";
for(var x=0 ; x<n ; x++){
var star = "";
var temp=1;
for(var i=0 ; i<(2*n-2*x)-1; i++){
star = star+"*";
temp++;
}
result=result+space+star+"\n";
space=space+" ";
}
return result;
}
var drawInvertedArrow = function(n1,n2){
var result = "\n";
var spaceH = (n2+(n2-1)-3)/2;;
var star = "***";
for(var i=0 ; i<n1 ; i++){
var space = "";
for(var x=0 ; x<spaceH ; x++){
space = space+" ";
}
result = result+space+star+"\n";
}
var temp = reversArrow(n2);
result = result + temp;
return result;
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
var drawDiamond = function(n){
var star = "*";
var result = "\n";
var m=n-1
for(var i=0 ; i<m ; i++){
var space = "";
for(var x=0 ; x<(n-i)-1 ;x++){
space=space+" ";
}
if(i===m){
result=result+" "+space+star+"\n";
star=star+"**";
}
result=result+space+star+"\n";
star=star+"**";
}
var lower = reversArrow(n);
var result = result+lower;
return result;
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
for(var i=0 ; i<11 ; i++){
}
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
 module.exports = {  drawTriangle, 
                   drawTriangleTwo, 
                   drawArrow, 
                   drawInvertedArrow,
                   drawDiamond,
                   drawSmile,
                   drawSpiral};