//Codewars challenge Formatting Decimal Places #0
//Each number should be formatted that it is rounded to two decimal places. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.
//P: Given two numbers make a function that returns each number with two decimal places. 
//R: Return given numbers rounded to two decimal places. 
//E: Example: 5.5589 is rounded 5.56 -3.3424 is rounded -3.34
//P:
function twoDecimalPlaces(n) {
  return +n.toFixed(2);
}

//Other solutions

const twoDecimalPlaces = n =>  Number(n.toFixed(2))

function twoDecimalPlaces(n) {
  return Math.round(n*100)/100;
}

const twoDecimalPlaces = n => +n.toFixed(2)

