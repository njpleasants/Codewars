//Codewars challenge Convert to Binary 8kyu
//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
//P: Will be given a non-negative integer.
//R: Return the non-negative integer in binary. 
//E: toBinary(5)  /* should return 101 */
//P:
function toBinary(n){
    return +n.toString(2);
}

//Other solutions

let toBinary = n => +n.toString(2)

function toBinary(n){
    let arr = []
     for (let i = n; i >= 1; i = Math.floor(i / 2)) {
       arr.push(i % 2 === 0 ? 0 : 1)
       }
   return Number(arr.reverse().join(''))
 }

function toBinary(n){
    return Number(n.toString(2))
}
  