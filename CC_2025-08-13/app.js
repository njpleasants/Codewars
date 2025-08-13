//Codewars challenge Area of a Square 8kyu
//Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.
//Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

//P: Given the diagram, return the area of the red square.
//R: Return the area of the square rounded to two decimals using PI.
//E:
//P:
function squareArea(A){
  return +Math.pow(2 * A / Math.PI, 2).toFixed(2);
}

//Other solutions

squareArea = A => +Math.pow((2 * A / 3.1416), 2).toFixed(2);