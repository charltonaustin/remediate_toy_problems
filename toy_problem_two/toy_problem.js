/*
Find the sum of all the primes below 500000.

A prime is defined as a number that is divisible by itself and one. 
Example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,...

The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
The sum of the primes below 30 is 2 + 3 + 5 + 7 + 11 + 13 + 17 + 19 + 23 + 29 = 129

One way to do this is by trial division. That's where
you check whether a number is prime by dividing it by
every number between 2 and n-1. If it isn't divisible
by any of them it is prime.
Example: 7 seven is not divisible by 2, 3, 4, 5, or 6.

Another way to do this is by Sieve of Eratosthenes.
Check out Sieve of Eratosthenes animation gif.
It basically shows the steps below.

	To find all the prime numbers less than or equal to a given integer n 
	by Eratosthenes' method:

	1. Create a list of consecutive integers from 2 through n: (2, 3, 4, ..., n).
	2. Initially, let p equal 2, the smallest prime number.
	3. Enumerate the multiples of p by counting to n from 2p in increments of p, and 
	mark them in the list (these will be 2p, 3p, 4p, ... ; the p itself should not be marked).
	4. Find the first number greater than p in the list that is not marked. 
	If there was no such number, stop. Otherwise, let p now equal this new number 
	(which is the next prime), and repeat from step 3.


You first generate a set of all the number between.
You should ask an instructor for an explanation 
when you have solved the problem using the first
method. Then describe the complexity of each method.
*/

var findSumOfPrimesLessThan = function(number){
	var sum=0;
	if(number>=500000){
		return "????"
    }
    
	var arr=[];
	var sum=0
	for (var i = 2; i < number ; i++) {
		arr.push (i);
	}
	var indexp=1;
	var p=2;
	for (var i = indexp; i < arr.length; i++) {
		for (var y = i; y< arr.length; y++) {
			if(arr[y]%p === 0){
			arr.splice(y,1);
			y--;
		}
	}
	p=arr[indexp];
    indexp++;
    }
    for (var i = 0; i < arr.length; i++) {
	sum=sum+arr[i];
    }
    return sum;
}


var isPrime=function(num){
     var flage=true;
     for (var i = 2; i < num; i++) {
     	
     	if (num%i===0){
     		return false;
     	}
     }
     return flage
}

var findSumOfPrimesLessThan1 = function(number){
	var sum=0;
	if(number>=500000){
		return "????"
    }
	for (var i = 2; i < number ; i++) {
		if(isPrime(i)){
			console.log("prime",i)
			sum=sum+i;
		}else{
			//console.log("not prime",i)
		}

	}
  return sum;
		}




module.exports = {findSumOfPrimesLessThan};


