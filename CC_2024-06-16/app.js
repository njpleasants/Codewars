//Codewars challenge Is It Even 8kyu
//n this Kata we are passing a number (n) into a function.Your code will determine if the number passed is even (or not).The function needs to return either a true or false.Numbers may be positive or negative, integers or floats.Floats with decimal part non equal to zero are considered UNeven for this kata.
//P:
//R:
//E:
//P:
function testEven(n) {
    if(n % 2 == 0){
       return true;
    } else {
        return false;
    }
}

//Other Codewars solutions
function testEven(n) {
    return n%2===0;
}

function testEven(n) {
    return n % 2 === 0 ? true : false;
  }

  function testEven(n) {
    return (n % 2) == 0;
}

const testEven = n => n % 2 === 0;