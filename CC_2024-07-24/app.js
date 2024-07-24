//Codewars challenge Super Duper Easy 8kyu
//Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
//P: Will be given a value that can be a number or a string.
//R: Return the given value multiplied by 50 and add 6. If the given value is not a number return "error"
//E: assert.strictEqual(problem("hello"), "Error"); assert.strictEqual(problem(1), 56);
//P:
function problem(x){
    if ( typeof x == 'number' ) {
    return (x * 50) + 6;
  } else {
    return 'Error';
  }
}

//Other Codewars solutions

const problem = x => typeof x === 'string' ? 'Error' : x * 50 + 6;

function problem(x){
    return typeof x === "number" ? x * 50 + 6 : "Error";
  }

  function problem(x){
    if(typeof x === "string"){
      return "Error";
    }
    return (x * 50) + 6;
  }
