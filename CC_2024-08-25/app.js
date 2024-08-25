//Codewars challenge Grasshopper - Basic Function Fixer 8kyu
//I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.Can you help me fix the function?
//P: Will be given a function to fix.
//R: Return the function so it always returns the number passed in plus 5.
//E:
//P:
//Original code:
function addFive(num) {
    var total = num + 5
    return num
  }

//Fixed Code
function addFive(num) {
    var total = num + 5
    return total;
  }

//Other solutions

function addFive(num) {
    return num + 5;
  }

const addFive = n => n + 5;