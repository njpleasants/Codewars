//Codewars challenge List Filtering 7kyu
//In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
//P:There will be given non-negative numbers and strings.
//R:Return a new list with only the negative numbers.
//E: filter_list([1,2,'a','b']) == [1,2]
//P:
const filter_list = l => l.filter(element => typeof element == 'number')

//Other solutions
function filter_list(l) {
    return l.filter(function(item) {
      return typeof item === 'number';
    });
  }


  function filter_list(l) {
    return l.filter( item => typeof item === 'number' );
  }


  function filter_list(arr) {
    return arr.filter(function(item) {
      return typeof(item) == 'number';   
    });
  }
