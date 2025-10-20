//Codewars challenge Contamination #1 String 8kyu
//An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// Starting with the original text, and given a character, return the text once it has been mutated so that all of the characters in the original text have been replaced with the character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

//P: Will be given a string that needs to swap its text with a mutated character
//R: Return the string with each character being replaced by the mutated character. If the string is empty return an empty string.
//E: text before = "abc"
// character   = "z"
// text after  = "zzz"
//P:
function contamination(text, char){
  if(text.length === 0 || char.length === 0) return "";
  let result = '';
  for(let i = 0; i < text.length; i++){
    result +=char;
  }
   return result; 
}

//Other solutions

function contamination(text, char){
  return char.repeat(text.length)
}

const contamination = (text, char) => char.repeat(text.length);

