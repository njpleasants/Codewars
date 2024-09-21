//Codewars challenge Grasshopper - Array Mean 8kyu
//Find the mean (average) of a list of numbers in an array.
//P: Will be given an array of numbers.
//R: Return the average of the array.
//E: findAverage([1, 3, 5, 7]), 4)
//P:
var findAverage = function (nums) {
    let avg = nums.reduce((a, b) => a + b) / nums.length;
    return avg;
  }

//Other solutions

var findAverage = function (nums) {
    // Code here
    var sum = 0;
    for (num in nums) {
      sum += nums[num];
    }
    return sum / (nums.length);
  }

const findAverage = nums => nums.reduce((a, b) => a + b) / nums.length;

