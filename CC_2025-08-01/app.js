//Codewars challenge Multiply the number 8kyu
//Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:
//P: Given a number, multiply it by five raised to the power of the number of digits for the give number.
//R: Return number multiplied by 5 to the nth power. 
//E: 10 -->   250  ( 10 * 5²)
//P:
function multiply(number){
  return number * 5 ** String(Math.abs(number)).length;
}

//Other solutions

const multiply = num => num * 5 ** (Math.abs(num).toString()).length

