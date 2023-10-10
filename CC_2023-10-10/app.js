//Sum Mixed Array 8kyu
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
//P: Treating all items as numbers
//R: Return answer as a number
//E: 
//P:
sumMix = x => x.reduce((prev,curr) => +curr + prev, 0)

//Other codewars solutions
function sumMix(x) {
    return x.reduce((s, n) => s + Number(n), 0)
  }

  function sumMix(x){
    return x.map(a => +a).reduce((a, b) => a + b);
  }

  const sumMix = (arr) => arr.reduce((sum, n) => sum + (+n), 0);