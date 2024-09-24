//Codewars challenge Generate range of integers 8kyu
//Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
//P: Will be given an array of numbers as well as the arguments start, stop, and step.
//R: Return the first and last integer as well as the increment betweeen the integers.
//E: (1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//P:
generateRange = (min, max, step) => Array.from({length: (max - min) / step + 1}, (_,index) => min + index * step)

//Other solutions
function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
  }

function generateRange(min, max, step) {
    for (var res = []; min <= max; min += step) res.push(min)
    return res
  }

function generateRange(min, max, step){
    return Array.from({length:1+(max-min)/step}, (_, i) => min + i*step);
  }

const generateArr = (n, start, step) =>
    Array(n).fill().map( (e,i) => i * step + start);
                                    
const generateRange = (min, max, step) =>
    generateArr(Math.floor((max - min)/step + 1), min, step)