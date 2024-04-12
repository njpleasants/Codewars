//Codewars challenge Beginner Series #4 Cockroach
//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//P:Will be given a speed to convert.
//R:Return speen in cm/second
//E:1.08 --> 30
//P:
function cockroachSpeed(s) {
    let result = Math.floor( s * 1000 * 100 / (60 * 60));
    return result;
  }

//Other Codewars challenge solutions
const cockroachSpeed = s => Math.floor(s / 0.036);

function cockroachSpeed(s) {
    const secsInHour = 3600;
    const centimetersInKilometers = 100000;
    
    return Math.floor((s*centimetersInKilometers)/secsInHour);
}

function cockroachSpeed(s) {
    return Math.floor(s*100000/3600);
  }


