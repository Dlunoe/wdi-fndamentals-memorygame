console.log("Up and running!");
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = (cards[0]);
var cardTwo = (cards[2]);
cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);
if (cardOne === cardTwo) {
	alert("You found a match!");}
else {
	alert("Sorry, try again.");
}
console.log("User Flipped " + cardOne);
console.log("User Flipped " + cardTwo);