//Codewars challenge Unfinished Loop - Bug Fixing #1 8kyu
//Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
//P: Will be given a function that needs to be debugged.
//R: Return the function without the error.
//E:
//P:
function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){ //solution was to add counter++
      newArray.push(counter);
    }
    
    return newArray;
  }
