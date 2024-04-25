//Beginner Series #3 Sum of Numbers 7kyu
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.
Note: a and b are not ordered!*/
//P:You will be given two integers and they can be positive or negative
//R:Return the sum of all of the integers between and including the integers provided
//E:(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//P:
function getSum(a, b)
{
    let min = Math.min(a,b)
    let max = Math.max(a,b)
    return (max - min + 1) * (max + min) / 2
}

//Other Codewars solutions

function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}

GetSum = (a, b) => (a + b) * (Math.abs(a - b) + 1) / 2;