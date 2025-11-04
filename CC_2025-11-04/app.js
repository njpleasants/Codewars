//Codewars challenge Simple Calculator 8kyu
//You are required to create a simple calculator that returns the result of addition, subtraction, multiplication or division of two numbers.

// Your function will accept three arguments:
// The first and second argument should be numbers.
// The third argument should represent a sign indicating the operation to perform on these two numbers.

// You should return the result of applying the given operation to these numbers.

// Note: In dynamically typed languages (JS, PHP, Python), the first and second arguments can be not numbers. In that case, return "unknown value".

// If the given operation to perform on the two numbers is not one of the four mentioned above, you should:

// return a value:
// "unknown value" (JS, PHP, Python)
// throw an exception:
// std::invalid_argument (C++)
// ArgumentException (C#)
// IllegalArgumentException (Java)
// Example:
// arguments: 1, 2, "+"
// should return 3

// arguments: 1, 2, "&"
// refer to the description for what you should return in this case

//P: Have three arguments, two can be numbers or not, and the third is a sign indicating addition, subtraction, multiplication, or division. If the first two arguments are not numbers should return "unknown value".
//R: Return the answer for the appropriate operation used on the two numbers or return "unknown value" if either of the first two values is not a number. 
//E: arguments: 1, 2, "+" should return 3
//P:
function calculator(a,b,sign) {
  if(typeof a === 'string') {
    return('unknown value');
  }
  if(typeof b === 'string') {
    return('unknown value');
  }
  if(sign === '+') {
    return a + b;
  } else if(sign === '-') {
    return a - b;
  } else if(sign === '*') {
    return a * b;
  } else if(sign === '/') {
    return a / b;
  } else {
    return('unknown value');
  }
}

//Other solutions

calculator = (a,b,sign) =>
    typeof a == 'number'
    && typeof b == 'number'
    && ['+','-','*','/'].includes(sign) ? sign == '+' ? a + b : sign == '-' ? a - b : sign == '*' ? a * b : a / b : 'unknown value' 

function calculator(a,b,sign){
	if ((typeof a === "number") && (typeof b === "number")) {
    switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    }
  }
  return "unknown value";
}