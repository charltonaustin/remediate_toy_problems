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

var generateAHand  = function(){
  var deck = [];
  var duckMap = [];
  var result = [];
  for(var i=1 ; i<53 ; i++){
  	deck.push(i);
  }
  for(var i=1 ; i<14 ; i++){
  	var temp = "S"+i;
  	duckMap.push(temp);
  }
  for(var i=1 ; i<14 ; i++){
  	var temp = "H"+i;
  	duckMap.push(temp);
  }
  for(var i=1 ; i<14 ; i++){
  	var temp = "D"+i;
  	duckMap.push(temp);
  }
  for(var i=1 ; i<14 ; i++){
  	var temp = "C"+i;
  	duckMap.push(temp);
  }
  var random = [];
  for(var i=0 ; i<5 ; i++){
  	var temp = Math.floor(Math.random()*52);
  	if(random.length === 0 || random.indexOf(temp) < 0){
  		random.push(temp);
  	} 
  	else{
  		i--;
  	}
  }
  var hand = [];
  for(var i=0 ; i<random.length ; i++){
   var temp = duckMap.splice(random[i],1);
   hand.push(temp);
  }
  return {deck: duckMap, hand: random};
}

var scoreTwoHands = function(handOne, handTwo){
  // Return the higher of the two hands
  return handOne;
}
var replaceCards = function(cardsToKeep, cardsToDiscard){
  // return a full set of cards
}

var playTwoAI = function(aIOne, aITwo){
  // return the winner of the round.
}


