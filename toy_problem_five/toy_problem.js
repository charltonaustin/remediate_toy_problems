/*
Given a set of items, each with weight and benefit, determine the items to include in the knapsack so that the total weight is less than or equal to a given weight limit and the total benefit is maximized. For example, if we are given following four items with their corresponding weights and benefits which items should we include in the knapsack to maximize the benefit. The weight limit for this knapsack is 10?
Item     0     1    2    3
Weight   2     2    4    5
Benefit  3     7    2    9

As you can verify, the items to include in the knapsack(with the weight limit of 10) to get the maximum benefit are item #1, item #2 and item #4. Maximum benefit obtained in that case is 19 and the weight of the knapsack becomes 9 which is within the given weight limit.

Write tests for this guy.
Use your previous toy problems as examples for how to write tests for this guy.
Good luck with it.
*/

var bestItem =function (items,Weightreq){
	var filteronWeight=[]
	var beniftvalue=0;
    var index;
	
	for (var i = 0; i < items.length; i++) {
		var Weight=0;
		for (var j = 0; j < i+1 && j< items.length ; j++) {
			Weight=Weight+items[j][1]
		}
		if(Weight<=Weightreq){
			var smallarr=[]
			for (var i = 0; i< j; i++) {
			smallarr.push(items[i])
		}
		filteronWeight.push(smallarr)
		}

	}
    
	for (var i = 0; i < filteronWeight.length; i++) {
         var sumbenift=0
		for (var j = 0; j < filteronWeight[i].length; j++) {
		        sumbenift=sumbenift+filteronWeight[i][j][2]
		}
		if(sumbenift>beniftvalue){
			beniftvalue=sumbenift;
			index=filteronWeight[i];
		}
	}
	console.log(filteronWeight);
	return index;
}
module.exports = {bestItem:bestItem};


