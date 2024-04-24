//Sum without highest and lowest number 8kyu
//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//P:Array will not be empty
//R:Return the sum of the array witout the highest and lowest numbers by value
//E:{ 6, 2, 1, 8, 10 } => 16
//P:
const sumArray = array => array ? array.sort((a,b) => a - b).slice(1, -1).reduce((prev, curr) => prev + curr, 0) : 0//sort array by lowest to highest numbers
   //return new array without them using pop and push
//sum of array

//Other Codewars solutions

function sumArray(array) {
    if (array == null) {
      return 0;
    } else if (array.length < 2) {
      return 0;
    } else {
      array = array.sort(function(a,b) {return a - b;});
      var total = 0;
      for (var i = 1; i < array.length - 1; i++) {
        total += array[i];
      }
      return total;
    }
  }

  function sumArray(array) {
    array = array || [];
    return array
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((a, b) => a + b, 0);
  }