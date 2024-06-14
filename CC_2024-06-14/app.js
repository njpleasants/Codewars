//Codewars challenge All Star Code Challenge #18
//Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one. If no occurrences can be found, a count of 0 should be returned.
//P:Will be given a string and a single character.
//R:Return an integer that reflects the number of timesd the single character is used in the string.
//E: ("Hello", "o")  ==>  1
//P:
function strCount(str, letter){  
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter){
            result++
        } 
    } return result;
}

//Other Codewars solutions
function strCount(str, letter){  
    return str.split(letter).length-1
  }

const strCount = (str, letter) => str.split(letter).length - 1;