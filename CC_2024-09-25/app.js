//Codewars challenge Sum of differences in array 8kyu
//Your task is to sum the differences between consecutive pairs in the array in descending order. If the array is empty or the array has only one element the result should be 0.
//P: You will be given an array of integers.
//R: Return the sum of the differences of the conescutive pairs after the array has been sorted into descending order.
//E: [2, 1, 10]  -->  9
//In descending order: [10, 2, 1]
// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
//P:
function sumOfDifferences(arr) {
   let sorted = arr.sort((a, b) => (b - a ));
   let total = 0;
   for(let i = 0; i < sorted.length - 1; i++){
    total += sorted[i] - sorted[i+1];
    }
    return total;
}

//Other solutions

const sumOfDifferences = arr =>
    arr.sort((a, b) => b - a).shift() - arr.pop() || 0;

function sumOfDifferences(arr) {
    return arr.sort((a, b) => b - a).map((el, i) => el - arr[i + 1] || 0).reduce((a, c) => a + c, 0)
  }

function sumOfDifferences(arr) {
    let difference = 0, max = arr[0], min = arr[0];
    for (let n of arr) {
      if (n > max) max = n;
      else if (n < min) min = n;
    }
    return max - min || 0;
  }

