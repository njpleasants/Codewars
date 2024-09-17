//Codewars challenge Reversing Words in a String 8kyu
//You need to write a function that reverses the words in a given string. Words are always separated by a single space. As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
//P: will be given a string of words.
//R: Return the order of the words in reverse. 
//E: "Hello World" --> "World Hello"
//P:
function reverse(string){
    return string.split(' ').reverse().join(' ');
  }

//Other solutions

reverse = string => string.split(' ').reverse().join(' ')

function reverse(string){
    var original = string;
    var rev = original.split(' ').reverse().join(' ');
    return rev;
  }