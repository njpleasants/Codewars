//Expressions Matter 8kyu
//Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
//In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)
//P: Will be given three integers and three operators. The operators and integers may be repeated.
//R: Return the maximum possible result for combining all three integers using the operators.
//E: With the numbers are 1, 2 and 3 , here are some ways of placing signs and brackets:
// 1 * (2 + 3) = 5
// 1 * 2 * 3 = 6
// 1 + 2 * 3 = 7
// (1 + 2) * 3 = 9
// So the maximum value that you can obtain is 9.
//P:
function expressionMatter(a, b, c) {
    return Math.max(a + b + c, a * b * c, (a + b) * c, a * (b + c))
  }

//Other Codewars solutions

const expressionMatter=(a,b,c)=>Math.max(a + b + c, a * (b + c), (a + b) * c, a * b * c);

