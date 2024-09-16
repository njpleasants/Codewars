//Codewars challenge Enumerable Magic #25 - Take the First N Elements 8kyu
//Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
//P: Will be given an array and a number.
//R: Return an array that lists the first n elements of the original array.
//E:
//P:
function take(arr, n) {
    return arr.slice(0, n);
  }

//Other solutions

let take = (arr, n) => arr.slice(0, n);

function take(arr, n) {
    let counter = 0;
    let res = [];
    for (let i of arr) {
      counter += 1;
      if (counter <= n && counter <= arr.length) {
        res.push(i);
      }
    }
    return res;
  }