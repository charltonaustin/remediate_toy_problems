/*
Write a poker game. 
First write a function which generates
five random cards from a deck. 
A deck is defined as 52 cards.
1-10 Jack Queen King Ace each with a 
suite of either Hearts, Clubs, Diamond, or 
Spades.

Next create a function that generates
two hands and scores them against one another
The different kinds of hands can be (from highest score to lowest score).

Also, check out poker_hand_rangking.png image!

*Royal Flush 	       	
A straight from a ten to an ace with all five cards of the same suit. 
In poker all suits are ranked equally.(Check royal-flush.png)

*Straight Flush 	       	
Any straight with all five cards of the same suit.(Check straight-flush.png)

*Four of a Kind 	       	
Any four cards of the same rank. 
If two players share the same Four of a Kind (on the board), 
the bigger fifth card (the "kicker") decides who wins the pot.

*Full House 	       	
Any three cards of the same rank together with any two cards of the same rank.

*Flush 	       	
Any five cards of the same suit (not consecutive). 
The highest card of the five determines the rank of the flush.

*Straight 	       	
Any five consecutive cards of different suits. 
Aces can count as either a high or a low card.

*Three of a Kind 	       	
Any three cards of the same rank. 
Our example shows three-of-a-kind Aces, 
with a King and a Queen as side cards - the best possible three of a kind.

*Two Pair 	       	
Any two cards of the same rank together with another two cards of the same rank. 
Our example shows the best possible two-pair, Aces and Kings. 
The highest pair of the two determines the rank of the two-pair.

*One Pair 	       	
Any two cards of the same rank.

*High Card 	       	
Any hand not in the above-mentioned hands. Our example shows the best possible high-card hand. 

Next create a function that accepts a set of cards
The player would like to keep and a set of cards
the player would like to replace. And returns a
full hand.

Finally create an AI that plays each other.
Each AI should have some strategy. An example would
be create an AI that holds on to the best suite and 
highest cards.

Another example would be an AI that randomly discards
cards.

Have them play one another and see which AI is the best.
AIs should be higher order functions that accept
a hand and return which cards they would like to 
discard and which cards they would like to keep.
*/

var cardtype =function(){
	//console.log(Math.floor(Math.random()*4+1))
	return Math.floor(Math.random()*3+1);
}
var cardvalue =function(){
	return Math.floor(Math.random()*14+2);
}



var generateAHand  = function(deck){
	var type=["d","h","c","s"]
	var Hand=[]
	//Hand.push([cardtype(), cardvalue()])
	for (var i = 0s; i < 5; i++) {
		/*var card=[cardtype(), cardvalue()]
		console.log(card)
		for (var y = 0; y< Hand.length; y++) {
			console.log(Hand[y][0],card[0],Hand[y][1],card[1])
			if(Hand[y][0]!==card[0]&&Hand[y][1]!==card[1]){
				console.log("ghjk")
				Hand.push(card)
			}else{
				i--
			}
		}*/
		Hand.push([cardtype(), cardvalue()])
	}
  return Hand;
}
var competition=function(){
	handOne=generateAHand();
	handTwo=generateAHand();
	scoreTwoHands(handOne,handTwo);
}

var RoyalFlush=function(hand){
	//return true if the card is RoyalFlus
	if( hand[1][0] == hand[0][0]&&hand[2][0]== hand[0][0]&& hand[3][0]==hand[0][0]&& hand[4][0]==hand[0][0]){
          if(hand[0][1]===14 ||hand[1][1]===14||hand[2][1]===14||hand[3][1]===14||hand[4][1]===14){
          	if(hand[0][1]===13 ||hand[1][1]===13||hand[2][1]===13||hand[3][1]===13||hand[4][1]===14){
          		if(hand[0][1]===12 ||hand[1][1]===12||hand[2][1]===12||hand[3][1]===12||hand[4][1]===12){
          		  if(hand[0][1]===11 ||hand[1][1]===11||hand[2][1]===11||hand[3][1]===11||hand[4][1]===11){
          		   if(hand[0][1]===10 ||hand[1][1]===10||hand[2][1]===10||hand[3][1]===10||hand[4][1]===10){
          		   	return true;
          		   }
          	      }
          	    }
          	}
          }
	}
	return false;
}
var Flush=function(hand){
	//return true if the card is Straight Flush
	if( hand[1][0] == hand[0][0]&&hand[2][0]== hand[0][0]&& hand[3][0]==hand[0][0]&& hand[4][0]==hand[0][0]){
		return true;
	}else
	{
		return false;
	}
}
var straightFlush =function(hand){
	if( hand[1][0] ==function hand[0][0]&&hand[2][0]== hand[0][0]&& hand[3][0]==hand[0][0]&& hand[4][0]==hand[0][0]){
		
			var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
			arr.sort();

            if(isConsecutive(arr)){
			return true;
	        }
	
	
		return false;
	}

}
var isConsecutive=function(arr){
	console.log(arr)
	for (var i = 0; i < arr.length-1; i++) {
		console.log(arr[i]+1 ,arr[i+1])
		if(arr[i]+1 !==arr[i+1]){
			return false
		}
	}
	return true;
}

var Straight=function(hand){
	var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
			arr.sort();

            if(isConsecutive(arr)){
			return true;
	        }
	
	
		return false;

}

var fullHouse=function(hand){
	var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
	arr.sort();
	if(arr[1]===arr[0]&&arr[2]===arr[0]){
		if(arr[4]===arr[3]){
			return true
		}

	}else if(arr[2]===arr[4]&&arr[3]===arr[4]){
       if(arr[0]===arr[1]){
			return true
		}
	}
	return false
	//return true if the card is RoyalFlush
}
var ThreeOfKind=function(hand){
	var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
	arr.sort();
	if(arr[1]===arr[0]&&arr[2]===arr[0]){
		return true
	}else if(arr[2]===arr[4]&&arr[3]===arr[4]){
		return true
		
	}
	return false

} 

var TwoPair=function(Hand){
   /*var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
  arr.sort();
  if(hand[0][1]===hand[1][1]){
  	if(hand[2][1]===hand[3][1]){
        return true
  	}else if(hand[3][1]===hand[4][1]){
        return true
    }
       
  	
  }*/
}

var onePair=function(hand){
	var arr=[hand[0][1],hand[1][1],hand[2][1],hand[3][1],hand[4][1]];
    arr.sort();
    if(hand[0][1]===hand[1][1]||hand[2][1]===hand[3][1]||hand[3][1]===hand[4][1]){
    	return true;
    }
    return false;
}
var HighCard=function(hand){
//any one dosent 
}
var scoreTwoHands = function(handOne, handTwo){
  // Return the higher of the two hands
  //if()
  
  
  return handOne;
}
var replaceCards = function(cardsToKeep, cardsToDiscard){
  // return a full set of cards
  var fullset=cardsToKeep
  for (var i = 0; i <cardsToDiscard; i++) {
  	fullset.push([cardtype(), cardvalue()])
  }
  return fullset

}

var playTwoAI = function(aIOne, aITwo){
  // return the winner of the round.
}


