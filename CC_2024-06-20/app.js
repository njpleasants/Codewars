//Codewars challenge Summing a number's digits 7kyu
//Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.
//P:Will be given a number made up of two integers.
//R:Zreturn the sum of the two integers.
//E: 10 --> 1
//P:
function sumDigits(num) {
    return Math.abs(num).toString().split("").reduce((total,next)=>total+Number(next),0)
    }

//Other Codewars solutions
sumDigits = n => Math.abs(n).toString().split('').reduce((s, e) => s + +e, 0);
