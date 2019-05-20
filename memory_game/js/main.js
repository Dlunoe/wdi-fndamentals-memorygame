console.log("Up and running!");
const cards = [
{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png',
},
{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png',
},
{
	rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png',
},
{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png',
}
];
const cardsInPlay = [];
cardsInPlay.push(cards.rank);
function checkForMatch(){
	this.setAttribute(cards[cardId].cardImage);
	if (cardsInPlay[0] === cardsInPlay[1]) {
	console.log("You found a match!");
} else {
	console.log("Sorry, try again.");
}
};
function flipCard(){
	this.getAttribute(data-id);
	console.log("User flipped " + cards[cardId].rank);
	console.log (cards[cardId].cardImage);
	console.log (cards[cardId].suit);
	checkForMatch();
};

function createBoard(){
	for (var i=0; i < 4; i++){
document.getElementsByTagName('cardElement')[0].setAttribute('src', 'images/back.png');
document.cardElement.setAttribute(i);

const queenOfHearts=document.createElement('img');
const queenOfDiamonds=document.createElement('img');
const kingOfHearts=document.createElement('img');
const KingOfDiamonds=document.createElement('img');
cardElement.addEventListener('click', flipCard);
document.querySelector('cardElement').appendChild('game-board');
}
};

createBoard();