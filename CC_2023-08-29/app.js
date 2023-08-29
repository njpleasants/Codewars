//Reversed Words 8kyu
//Complete the solution so that it reverses all of the words within the string passed in. Words are separated by exactly one space and there are no leading or trailing spaces.
//P: Reverse a string of words
//R: Return the string reversed with one space between the words
//E: "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
//P:
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
  }

//Other Codewars solutions
const reverseWords = (str) => str.split(" ").reverse().join(" ");


