//Codewars challenge Powers of 2 8kyu
//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
//P: Will be given a non-negative integer.
//R: Return a list of all the powers of two from 0 to the given integer.
//E: n = 0  ==> [1]        # [2^0] n = 1  ==> [1, 2]     # [2^0, 2^1] n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
//P:
function powersOfTwo(n){
    let power = []
   for(let i = 0; i <= n; i++){
    power.push(Math.pow(2,i));
   }
    return power
  }

//Other Codewars solutions

var powersOfTwo = n => Array.from({length : n + 1}, (val, i) => Math.pow(2, i));

function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++) {
      arr.push(2 ** i);
    }
    return arr;
  }