//Plural 8kyu
//We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

//P: Will be given a number.
//R: Return whether or not the number requires the object to be plural or singular by returning true for plural and false for singular.
//E:
//P:
function plural(n) {
    if(n != 1){
     return true;
    }else{
     return false;
    }
   }

//Other Codewars solutions
const plural = n => n !== 1;

function plural(n) {
    if (n < 1) {
      return true;
    } else if (n === 1) {
      return false;
    } else {
      return true;
    }}

const plural = n => n === 1 ? false : true;