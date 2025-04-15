//Codewars challenge Printing Array elements with Comma delimiters 8kyu
//Input: Array of elements
// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"
//P:Will be given an array of elements with ommas separating the elements. 
//R:Return a string with the elements in the smae order without the commas
//E: ["h","o","l","a"] "h,o,l,a"
//P:
function printArray(array){
    return array.toString();
  }

//Other solutions
function printArray(array){
    return array.join();
  }

let printArray = arr => arr.join();

const printArray = array => array.toString();