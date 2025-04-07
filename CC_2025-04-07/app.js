//Codewars challenge get character from ASCII Value 8kyu
//Write a function which takes a number and returns the corresponding ASCII char for that value.
//P: Write a function that will take a number and return the corresponding American Standard Code for Information Interchange character.
//R: Return the ASCII character that corresponds with the character provided. The characters are case sensitive
//E: 65 --> 'A' 97 --> 'a'
//P:
function getChar(c){
    return String.fromCharCode(c)
  }

//Other solutions

const getChar = c => String.fromCharCode(c);