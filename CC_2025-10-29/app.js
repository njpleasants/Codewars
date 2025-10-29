//Codewars challenge Define a card suit 8kyu
//You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// Our deck (is preloaded):

// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'

//P: Will be given a number and a suit and the name of the card suit needs to be returned in lowercase.
//R: Return the suit in lowercase that is shown as an argument. 
//E: ('3♣') -> return 'clubs'
//P:
function defineSuit(card) {
  let newArr = card.split('')
  if(newArr.includes('♣')){
    return 'clubs';
  }else if( newArr.includes('♦')){
    return 'diamonds';
  }else if( newArr.includes('♥')){
    return 'hearts';
}else{
    return 'spades';
    }
}

//Other solutions

function defineSuit(card) {
  const s = {
    "♣": "clubs",
    "♠": "spades",
    "♦": "diamonds",
    "♥": "hearts"
  }
  return s[card.charAt(card.length - 1)]
}

function defineSuit(card) {
if(card.includes('♥')) return 'hearts'
if(card.includes('♦')) return 'diamonds'
if(card.includes('♣')) return 'clubs'
if(card.includes('♠')) return 'spades' 
}

function defineSuit(card) {
  switch (card.slice(-1)){
    case '♣': return 'clubs';
    case '♦': return 'diamonds';
    case '♥': return 'hearts';
    case '♠': return 'spades';    
  }
    
}