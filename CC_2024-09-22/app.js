//Codewars challenge Price of Mangoes 8kyu
//There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
//P: You will be given a quanity and price for a single mango 
//R: Return the total cost of the mangoes in relation to the buy 2 get 1 free offer.
//E: mango(2, 3) ==> 6    # 2 mangoes for $3 per unit = $6; no mango for free
//P:
function mango(quantity, price){
    let result = 0
    for(let i = 1; i <= quantity; i++){
        if(i % 3) {
            result += price
        }
    }
    return result;
}

//Other solutions

function mango(quantity, price){
    return price * (quantity - Math.floor(quantity / 3));
  }

function mango(quantity, price){
    let freeMangos = Math.floor(quantity / 3);
  return (quantity - freeMangos) * price;
  }

const mango = (q,p) =>
    (q - Math.floor(q / 3)) * p