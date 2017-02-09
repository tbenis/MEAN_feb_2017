function Deck(cards){
    var deck = cards;
    var shuffledDeck = [];
    this.discardPile;
    this.shuffle = function(){
        this.shuffledDeck = deck.slice(0);
        for(var i = 0; i < shuffledDeck.length; i++){
            randInt = Math.floor(Math.random()*shuffledDeck.length);
            var temp = shuffledDeck[randInt];
            shuffledDeck[randInt] = shuffledDeck[i];
            shuffledDeck[i] = temp;
        }
        // console.log(shuffledDeck);
    }
    this.dealOne = function(){
        return shuffledDeck.pop();
    }

}

function Player(name, deck){
    cardsInHand = 5;
    hand = [];
    function initHand(deck){
        for(var i = 0; i < cardsInHand; i++){
            hand.push(deck.dealOne());
        }
    }
    initHand();
    this.discardRandom = function(){
        hand.splice(Math.floor(Math.random()*cardsInHand), 1);
    }
}

function Card(suit, name, number, unicode){
    this.suit = suit;
    this.name = name;
    this.number = number;
    this.unicode = unicode;
}


var cards = [
    {
        suit: "hearts",
        name: "ace",
        number: 1,
        unicode: "\u1F0B1",
    },
    {
        suit: "hearts",
        name: "two",
        number: 2,
        unicode: "\u1F0B2",
    },
    {
        suit: "hearts",
        name: "three",
        number: 3,
        unicode: "\u1F0B3",
    },
    {
        suit: "hearts",
        name: "four",
        number: 4,
        unicode: "\u1F0B4",
    },
    {
        suit: "hearts",
        name: "five",
        number: 5,
        unicode: "\u1F0B5",
    },
    {
        suit: "hearts",
        name: "six",
        number: 6,
        unicode: "\u1F0B6",
    },
    {
        suit: "hearts",
        name: "seven",
        number: 7,
        unicode: "\u1F0B7",
    },
    {
        suit: "hearts",
        name: "eight",
        number: 8,
        unicode: "\u1F0B8",
    },
    {
        suit: "hearts",
        name: "nine",
        number: 9,
        unicode: "\u1F0B9",
    },
    {
        suit: "hearts",
        name: "ten",
        number: 10,
        unicode: "\u1F0BA",
    },
    {
        suit: "hearts",
        name: "jack",
        number: 11,
        unicode: "\u1F0BB",
    },
    {
        suit: "hearts",
        name: "queen",
        number: 12,
        unicode: "\u1F0BD",
    },
    {
        suit: "hearts",
        name: "king",
        number: 13,
        unicode: "\u1F0BE",
    },
    {
        suit: "spades",
        name: "one",
        number: 1,
        unicode: "\u1F0A1",
    },
    {
        suit: "spades",
        name: "two",
        number: 2,
        unicode: "\u1F0A2",
    },
    {
        suit: "spades",
        name: "three",
        number: 3,
        unicode: "\u1F0A3",
    },
    {
        suit: "spades",
        name: "four",
        number: 4,
        unicode: "\u1F0A4",
    },
    {
        suit: "spades",
        name: "five",
        number: 5,
        unicode: "\u1F0A5",
    },
    {
        suit: "spades",
        name: "six",
        number: 6,
        unicode: "\u1F0A6",
    },
    {
        suit: "spades",
        name: "seven",
        number: 7,
        unicode: "\u1F0A7",
    },
    {
        suit: "spades",
        name: "eight",
        number: 8,
        unicode: "\u1F0A8",
    },
    {
        suit: "spades",
        name: "nine",
        number: 9,
        unicode: "\u1F0A9",
    },
    {
        suit: "spades",
        name: "ten",
        number: 10,
        unicode: "\u1F0AA",
    },
    {
        suit: "spades",
        name: "jack",
        number: 11,
        unicode: "\u1F0AB",
    },
    {
        suit: "spades",
        name: "queen",
        number: 12,
        unicode: "\u1F0AD",
    },
    {
        suit: "spades",
        name: "king",
        number: 13,
        unicode: "\u1F0AE",
    },
{
    suit: "diamonds",
    name: "ace",
    number: 1,
    unicode: "\u1F0C1",
},
{
    suit: "diamonds",
    name: "two",
    number: 2,
    unicode: "\u1F0C2",
},
{
    suit: "diamonds",
    name: "three",
    number: 3,
    unicode: "\u1F0C3",
},
{
    suit: "diamonds",
    name: "four",
    number: 4,
    unicode: "\u1F0C4",
},
{
    suit: "diamonds",
    name: "five",
    number: 5,
    unicode: "\u1F0C5",
},
{
    suit: "diamonds",
    name: "six",
    number: 6,
    unicode: "\u1F0C6",
},
{
    suit: "diamonds",
    name: "seven",
    number: 7,
    unicode: "\u1F0C7",
},
{
    suit: "diamonds",
    name: "eight",
    number: 8,
    unicode: "\u1F0C8",
},
{
    suit: "diamonds",
    name: "nine",
    number: 9,
    unicode: "\u1F0C9",
},
{
    suit: "diamonds",
    name: "ten",
    number: 10,
    unicode: "\u1F0CA",
},
{
    suit: "diamonds",
    name: "jack",
    number: 11,
    unicode: "\u1F0CB",
},
{
    suit: "diamonds",
    name: "queen",
    number: 12,
    unicode: "\u1F0CD",
},
{
    suit: "diamonds",
    name: "king",
    number: 13,
    unicode: "\u1F0CE",
},
{
    suit: "clubs",
    name: "one",
    number: 1,
    unicode: "\u1F0D1",
},
{
    suit: "clubs",
    name: "two",
    number: 2,
    unicode: "\u1F0D2",
},
{
    suit: "clubs",
    name: "three",
    number: 3,
    unicode: "\u1F0D3",
},
{
    suit: "clubs",
    name: "four",
    number: 4,
    unicode: "\u1F0D4",
},
{
    suit: "clubs",
    name: "five",
    number: 5,
    unicode: "\u1F0D5",
},
{
    suit: "clubs",
    name: "six",
    number: 6,
    unicode: "\u1F0D6",
},
{
    suit: "clubs",
    name: "seven",
    number: 7,
    unicode: "\u1F0D7",
},
{
    suit: "clubs",
    name: "eight",
    number: 8,
    unicode: "\u1F0D8",
},
{
    suit: "clubs",
    name: "nine",
    number: 9,
    unicode: "\u1F0D9",
},
{
    suit: "clubs",
    name: "ten",
    number: 10,
    unicode: "\u1F0DA",
},
{
    suit: "clubs",
    name: "jack",
    number: 11,
    unicode: "\u1F0DB",
},
{
    suit: "clubs",
    name: "queen",
    number: 12,
    unicode: "\u1F0DD",
},
{
    suit: "clubs",
    name: "king",
    number: 13,
    unicode: "\u1F0DE",
},

]

console.log(cards.length);
myDeck = new Deck(cards);
myDeck.shuffle();
// console.log(myDeck.shuffledDeck);
myPlayer = new Player('John');

console.log(myPlayer.hand);
myPlayer.discardRandom();
console.log("------------------");
console.log(myPlayer.hand);
