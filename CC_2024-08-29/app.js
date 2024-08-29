//Codewars challenge Remove Duplicates from List 8kyu
//Define a function that removes duplicates from an array of non negative numbers and returns it as a result. The order of the sequence has to stay the same.
//P: Will be given an array of positive numbers.
//R: Return the array in the same order removing any duplicates.
//E: [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
//P:
function distinct(arr) {
    let res = []; 
    for(let i = 0; i < arr.length; i++){
      if(!res.includes(arr[i])){
        res.push(arr[i]);
      }
  }
  return res;
  }

//Other solutions
function distinct(a) {
    return [...new Set(a)];
  }

const distinct = a => [...new Set(a)];

function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === a.indexOf(item, index));
  }

function distinct(a) {
    return a.filter((e, i)=> a.indexOf(e) === a.indexOf(e, i))
  }