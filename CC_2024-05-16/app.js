//Capitalization and Mutability
//Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

//P: Will be given a function to debug.
//R: Return the function without errors.
//E: 
//P:
function capitalizeWord(word) {
    word[0].toUpperCase();
    return word;
  }
//debugged
  function capitalizeWord(word) {
    word = word[0].toUpperCase() + word.slice(1);
    return word;
  }

//Other Codewars solutions
const capitalizeWord = word => word[0].toUpperCase()+word.slice(1);

function capitalizeWord(word) {
    var str = word[0].toUpperCase();
    for (let i = 1; i<word.length; i++) {
    str += word[i];
    }
    return str;
  }

function capitalizeWord(word) {
    word = word.split('');
    word[0] = word[0].toUpperCase();
    return word.join('');
  }