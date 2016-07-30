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
var countStar = function(n){
	var result = "";
	for(var i=0; i<n ; i++){
		result = result+"*";
	}
	return result;
}
var countSpace = function(n){
	var result = "";
	for(var i=0; i<n ; i++){
		if(i===2 || i===3 || i===4 || i===16 || i===17 || i===18){
			result=result+" ";
    }else{
		  result = result+"*";
    }
	}
	return result;
}
var upperPart = function(n){
	var result = "\n";
	var star = countStar(21);
	var star2 = countSpace(21);
	for(var i=0 ; i<n ; i++){
		var space="";
		for(var x=0 ; x<(n-i)-1 ; x++){
			space = space + " ";
		}
		if(i===2){
			result = result+space+"**"+star2+"**"+"\n";
		}
    else if(i===3){
      result=result+space+""
    }
    else{
  		result = result+space+star+"\n";
  		star=star+"**";
  }
	}
	return result;
}
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
var stars = function(n){
  var star = "";
  for(var i=0 ; i<n+(n+1) ; i++){
    star = star + "*";
  }
  return star;
}
var drawSpiral = function(n){
var result = "\n";
var begin = "   ";
var star = stars(n);
for(var i=0 ; i<n+3; i++){
  if(i===1){
    var s="";
    for(var e=0 ; e<12 ; e++){
      s=s+" ";
    }
    result=result+begin+s+"*"+"\n";
  }
  else if(i===2){
    var s = "";
    for(var c=0 ; c<10 ; c++){
      s=s+"*";
    }
    result=result+begin+s+"  "+"*"+"\n";
  }else if(i===3){
    var sp="";
    for(var t=0 ; t<8 ; t++){
      sp=sp+" ";
    }
    result=result+begin+"*"+sp+"*"+"  "+"*"+"\n";
  }
  else if(i===4){
    result=result+begin+"*"+"  "+"****"+"  "+"*"+"  "+"*"+"\n";
  }
  else if(i===5){
    var p="";
    for(var r=0 ; r<5 ; r++){
      p=p+" ";
    }
    result=result+begin+"*"+"  "+"*"+p+"*"+"  "+"*"+"\n";
  }
  else if(i===6){
    var s="";
    for(var w=0 ; w<7 ; w++){
      s=s+"*";
    }
    result=result+begin+"*"+"  "+s+"  "+"*"+"\n";
  }
  else if(i===7){
    var s="";
    for(var e=0 ; e<11 ; e++){
      s=s+" ";
    }
    result=result+begin+"*"+s+"*"+"\n";
  }
  else{
    result=result+begin+star+"\n";
  }
}
return result;
}
var spiralRefactor = function(n){
  var result = [];
  var row =[];
  var drawRow = function(n){
    for(var i=0 ; i<n+3 ; i++){
      if(i%2 !==0){
        for(var e=0 ; e<2*n+1 ; e++){
          row.push("*");
        }
      }
    }
    
  }
  
  return result;
}
 module.exports = {  drawTriangle, 
                   drawTriangleTwo, 
                   drawArrow, 
                   drawInvertedArrow,
                   drawDiamond,
                   drawSmile,
                   drawSpiral};}
