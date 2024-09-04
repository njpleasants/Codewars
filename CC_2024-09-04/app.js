//Codewars challenge To square(root) or not to square(root) 8kyu
//Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
//P: WIll be given an array of numbers.
//R: Return a new array of integers with the following guidelines: if the number has a square root, return the square root. If the integer does not have a square root, square the number.
//E: [4,3,9,7,2,1] -> [2,9,3,49,4,1]
//P:
squareOrSquareRoot = array => array.map(x => Math.sqrt(x) % 1 ? x * x : Math.sqrt(x))

//Other solutions

function squareOrSquareRoot(array) {
    return array.map(x => {
      const r = Math.sqrt(x);
      return (r % 1 == 0) ? r : (x*x);
    });  
  }

function squareOrSquareRoot(array) {
    let arr = array
    for (i = 0; i < array.length; i++){
      if (Number.isInteger(Math.sqrt(arr[i])) ){
        arr[i] = Math.sqrt(arr[i])
      } 
      else {
        arr[i] = arr[i] * arr[i] 
      }
    } return arr;  
  }

