//Codewars challenge Find the remainder 8kyu
//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value. Division by zero should return NaN.
//P: You will be given two integers of different value.
//R: Return the remainder of dividing the larger value by the smaller value.
//E: n = 17; m = 5; result = 2 (remainder of `17 / 5`)
//P:
function remainder(n, m){
    if(n > m){
        return n % m;
    } else {
        return m % n;
    } 
  }

//Other solutions

function remainder(a, b){ return Math.max(a,b) % Math.min(a,b); }

const remainder = (a, b) => a > b ? a % b : b % a;

