//Codewars challenge Merge two sorted arrays into one 8kyu
//You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays. Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.
//P:Some integers might be repeated in the arrays.
//R:Rzeturn a single array with the integers in ascending order.
//E:[1, 2, 3, 4, 5], [6, 7, 8, 9, 10] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//P:
function mergeArrays(arr1, arr2) {
  return Array.from(new Set (arr1.concat(arr2).sort((a,b) => a-b)))
  }

//Other Codewars solutions

function mergeArrays(arr1, arr2) {
    return arr1
      .filter((item) => !arr2.includes(item))
      .concat(arr2)
      .sort((a, b) => a - b)
  }

function mergeArrays(arr1, arr2) {
    let res = [];
    arr1.concat(arr2).forEach(el => !res.includes(el) ? res.push(el) : 0);
    return res.sort( (a, b) => a - b);
  }