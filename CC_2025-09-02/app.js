//Codewars challenge Name on Billboard 8kyu
//You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (always 2 for Java).
//You can not use multiplier "*" operator.

//P: It costs $30 per character to put your name on a billboard. 
//R: Return the price for pinting your name on a billboard ad if each character, including spaces, is $30.
//E: If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 letters * 30 = 600 (Space counts as a character).
//P:
function billboard(name, price = 30){
    let adPrice = 0
    for (let i = 0; i < name.length; i++) {
    adPrice += price;
}
    return adPrice; 
} 

//Other solutions
function billboard(name, price = 30) {
  return name.split('').reduce((sum, letter) => sum + price, 0); 
}

function billboard(name, price = 30){
  return name.repeat(price).length;
} 