//Double Char 8kyu
//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//P: Characters will be a string and not a number
//R: Return a string with each character repeated once
//E:* "String"      -> "SSttrriinngg" * "Hello World" -> "HHeelllloo  WWoorrlldd" * "1234!_ "     -> "11223344!!__  "
//P: 
function doubleChar(str) {
    return str.split('').map(x => x + x).join('');
  }
  
//Other Codewars solutions
