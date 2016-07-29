/*
Given an array of size n, find the element which occurs more than n/2 times. This element is called Majority Element.
*/

var findMajorityElement = function(array){
  for (var i = 0; i < array.length; i++) {
  	 var numofi=1
  	for (var j=i+1; j < array.length; j++) {
  		if(array[j]===array[i]){
  			numofi++;
  		}
  	}
  	//console.log(numofi , array.length /2)
  	if(numofi > array.length /2){
  		return array[i]
  	}
  }
}

/*
Given a number, find the next greater number using same digits(or by rearranging the digits). For example, if the given number is 1234 then next greater number would be 1243. For the input 1243, next greater number would be 1324. If the input is 6938652 then the output should be the number 6952368.

If there is no next greater number possible, then the program should return the same number. For example, for number 4321, same number 4321 would be returned.

A part of this challenge is to write tests for this code.
Use the examples in mySpec as a template.
*/

var nextGreaterNumber = function(number){
	var len=number.toString().split('');
	if (Number(len[len.length-1])>Number(len[len.length-2])){
		var swap=len[len.length-2];
		len[len.length-2]=len[len.length-1]
        len[len.length-1]=swap;
       
		return Number(len.join(""))
	}
  return number;
}


/*
Given a string, reverse the string word by word.
Example:
String: "This is a string"
Output: "string a is This"
Again write tests for this guy.

*Hint* String.split(" ") splits a string
on spaces.

Again part of the toy problem is to write 
tests for this guy.
*/

var reverseTheString = function(string){
  var str= string.split(" ")
  string=""
  for (var i= str.length-1; i >=0; i--) {
    string=string+str[i]+" "
  }

  return string.slice(0,-1);
}


/*
Minimum Edit distance between two strings str1 and str2 is defined as the minimum number of insert/delete/substitute operations required to transform str1 into str2. For example if str1 = "ab", str2 = "abc" then making an insert operation of character 'c' on str1 transforms str1 into str2. Therefore, edit distance between str1 and str2 is 1. You can also calculate edit distance as number of operations required to transform str2 into str1. For above example, if we perform a delete operation of character 'c' on str2, it is transformed into str1 resulting in same edit distance of 1.

Looking at another example, if str1 = "INTENTION" and str2 = "EXECUTION", then the minimum edit distance between str1 and str2 turns out to be 5 as shown below. All operations are performed on str1.

INTENTION
EXECUTION

First delete the I -> NTENTION
Second substitute E for N -> ETENTION
Third substitute X for T -> EXENTION
Fourth insert C between E and N -> EXECNTION 
Fifth substitute U for N -> EXECUTION

Credits for above example: Stanford University (https://web.stanford.edu/class/cs124)

Given two strings, write a program to find out the minimum edit distance between them.

Try to break this down into smaller problems. Don't worry about speed. Just
think about how you would solve one small problem at a time.

Write tests for this if you can.
*/

var minEditDistance = function(str1, str2){
  var numofEdit=0;
  for (var i = 0; i < str1.length; i++) {
    if (str1[i]!== str2[i]){
      //console.log(str1[i] , str2[i])
      str1[i]=str2[i];
      //console.log(str1[i] , str2[i])
      numofEdit++
    }
    //console.log(str1)
  }
  console.log(numofEdit)
  return numofEdit;
}
module.exports = { findMajorityElement,
                   nextGreaterNumber,
                   reverseTheString,
                   minEditDistance};


