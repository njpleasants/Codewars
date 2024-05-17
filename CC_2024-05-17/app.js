//Codewars challenge Lario and Muigi Pipe Problem 8kyu
//Issue
// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

//P: Will be given an array of integers.
//R: Return a new array where each integer increases by one.
//E: Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8
//P:
function pipeFix(numbers){
    let result = []
    for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++){
        result.push(i)
    }
    return result;
}

//Other Codewars solutions
function pipeFix(num, arr = [] ){
    for ( let i = num[0]; i <= num.slice(-1)[0]; i++){
      arr.push(i)
    }
    return arr
  }

