//Codewars challenge Sum the Strings 8kyu
/*Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):
Example: (Input1, Input2 -->Output)*/
//P:Will be given two strings
//R:Return the sum of the two strings also as a string
//E:"4",  "5" --> "9"    "34", "5" --> "39"
//P:
function sumStr(a,b) {
    if(a === '') a = 0;
    if(b === '') b = 0;
    return `${parseInt(a) + parseInt(b)}`
}

//Other Codewars solutions
function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

function sumStr(a,b) {
    const num1 = Number(a);
    const num2 = Number(b);
    return String(num1 + num2)
  }

const sumStr = (a,b) => String(Number(a)+Number(b)) ;