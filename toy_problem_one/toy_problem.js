
 

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
You should be able to parameterize this with some higher order //29
functions. Try and see if you can make some parameters so you can
control different parts of the face.
*/
var ies=function(fw,is){
  var ies="\n"
  ies=ies+makeString(" ",2," ")+makeString("*",4," ")+makeString(" ",is,"")+makeString("*",fw-(2+4+is+is+4+2),"")+makeString(" ",is,"")+makeString("*",4,"")+"\n"
 ies=ies+makeString(" ",1," ")+makeString("*",5," ")+makeString(" ",is,"")+makeString("*",fw-(2+5+is+is+5),"")+makeString(" ",is,"")+makeString("*",5,"")
 return ies;
}
var nois=function(fw,ns){
  var nois="\n "+makeString("*",fw," ")+"\n";
  nois=nois+"  "+makeString("*",Math.floor((fw-ns)/2),"")+makeString(" ",ns,"")+makeString("*",Math.floor((fw-ns)/2),"")+"\n";
  return nois;
}

var head= function(fw){
  var head="\n"+makeString(" ",4," ")+makeString("*",fw-8," ")+"\n";
  head=head+makeString(" ",3," ")+makeString("*",fw-6," ")+""
 return head;
}
var mouth=function(){
  var smile=""
  var numofsp=18
  for (var i = 27; i >=23; i--) {
    //console.log(i);
    if (i===27){
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",i,smile)+"\n";
    }else if(i===23){
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",18,smile)+"\n";
      
    }else{
      numofsp=numofsp-2;
      console.log(i);
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",4,smile);
      smile=makeString(" ",numofsp,smile);
      smile=makeString("*",5,smile)+"\n";
  }
}
    return smile;

}
var drawSmileup = function(){
  var smile=""
  var numofstar=3
  var x=6;
  for (var i =21 ; i <=27; i=i+2) {
    smile=makeString(" ",x,smile);
    if (i<25){
      smile=makeString("*",i,smile)+"\n";
    }else{
      numofstar=numofstar+1
     
      smile=makeString("*",numofstar,smile);
      smile=makeString(" ",3,smile);
      smile=makeString("*",11,smile);
      smile=makeString(" ",3,smile)
      smile=makeString("*",numofstar,smile)+"\n";
    }
    x=x-1;
  }
  smile=smile+"  "+makeString("*",29,"")+"\n"
  smile=smile+"  "+makeString("*",12,"")+makeString(" ",29-24,"")+makeString("*",12,"")
  return smile;

}


var drawSmileDown = function(){
  var smile=""
  var numofsp=18
  for (var i = 27; i >=23; i--) {
    //console.log(i);
    if (i===27){
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",i,smile)+"\n";
    }else if(i===23){
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",18,smile)+"\n";
      
    }else{
      numofsp=numofsp-2;
      console.log(i);
      smile=makeString(" ",30-i,smile);
      smile=makeString("*",4,smile);
      smile=makeString(" ",numofsp,smile);
      smile=makeString("*",5,smile)+"\n";
  }
}
    return smile;
  
}


var drawSmile = function(fs,is,ns){
  //console.log(mouth().split(""))
  var mouthy=mouth().slice(0,-1);

  return  head(fs)+ies(fs,is)+nois(fs,ns)+mouthy;
  //return "\n"+drawSmileup()+"\n" + drawSmileDown();
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
  var Spiral="\n";
  for (var i = 0; i < 9; i++) {

    if(i%2 ===0){
      console.log(i,Spiral);
      Spiral=Spiral+"*"+makeString("*",11-i,"")+makeString(" ",i,"")+"*\n"
    }else{
     Spiral=Spiral+makeString("*",i-1,"")+makeString(" ",13-i,"")+"*\n"
    }
  }
  return Spiral;
}

module.exports = {drawTriangle, 
                  drawTriangleTwo, 
                  drawArrow, 
                  drawInvertedArrow,
                  drawDiamond,
                  drawSmile,
                  drawSpiral};


