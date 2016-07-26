
 

var drawTriangle = function(n){
  
  var Triangle='\n';
  for (var i = 1; i <= n; i++) {
    for (var j = 0; j < i; j++) {
       Triangle=Triangle + '*';
    }
    Triangle=Triangle+"\n"
  }
  return Triangle;
}


var makeString=function(char,numofchar,str){
  for (var i = 0; i < numofchar; i++) {
    str=str+char;
  }
  return str;
}
var drawTriangleTwo = function(n){
       var Triangle="\n"
       //n=n+1;
      for (var i = 1; i <= n ; i++) {
        Triangle=makeString(" ",n-i,Triangle);
        Triangle=makeString("*",(i-1)*2+1,Triangle);
        
        Triangle=Triangle+"\n";
        
   }
   
  return Triangle;
}



var drawbase= function(base,tree){
  var basestr=""
  var numofchar=Math.floor(((tree*2-1)-base)/2)
  for (var i = 1; i <=base; i++) {
    basestr=makeString(" ",numofchar,basestr)
    basestr=makeString("*",3,basestr)+"\n"
    
  }
  return basestr;
}

var drawArrow = function(tree,base){
  var drawArrow=""
  drawArrow=drawTriangleTwo(tree);

  drawArrow=drawArrow+drawbase(base,tree);
  return drawArrow;
}


var invert = function(n){
 var Triangle=""
      for (var i = n; i>=1 ; i--) {
        Triangle=makeString(" ",n-i,Triangle);
        Triangle=makeString("*",(i-1)*2+1,Triangle);
        
        Triangle=Triangle+"\n";
        
   }
   
  return Triangle;
}

var drawInvertedArrow = function(tree,base){
  var InvertedArrow=""

  InvertedArrow="\n"+drawbase(base,tree);
  InvertedArrow=InvertedArrow+invert(tree);
  return InvertedArrow;
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

    *
   ***
  *****
 
 *******
  *****  
   ***
    *
    console.log(upside);
  upside=upside.splice(upside.length-2)
  console.log(upside);
  upside=upside.join("\n")
  console.log(upside);
Now refactor your code to take parameter that is the size of the diamond.
*/

var drawDiamond = function(size){
  var middle=Math.floor(size/2);
  var upside=drawTriangleTwo(middle+1).slice(0,-1);
  var downside=drawInvertedArrow(middle).split("\n");

  for (var i = 1; i < downside.length; i++) {
    downside[i]=" "+downside[i]
  }
  downside=downside.join("\n")
    
  return upside+downside;

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


