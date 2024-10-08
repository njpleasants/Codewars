//Codewars challenge Grader 8kyu
//Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

//P: Will be given a number as an argument.
//R: Return the corresponding grade based on the number provided.
//E: grader(1.1) should be "F"
//P:
function grader(score) {
  if(score > 1 || score < 0.6){
    return 'F';
  }else if(score >= 0.9 && score <= 1){
    return 'A';
  }else if(score >= 0.8 && score < 0.9){
    return 'B';
  }else if(score >= 0.7 && score < 0.8){
    return 'C';
  }else{
    return 'D';
  }
}

//Other Codewars solutions
function grader(score) {
    if (score>1||score<0.6) return 'F'
    if (score<0.7) return 'D'
    if (score<0.8) return 'C'
    if (score<0.9) return 'B'
    return 'A'
  }

const grader = s => {
    switch(true) {
      case (s > 1):
        return 'F'
      case (s >= 0.9):
        return 'A'
      case (s >= 0.8):
        return 'B'
      case (s >= 0.7):
        return 'C'
      case (s >= 0.6):
        return 'D'
      default:
        return 'F'
    }
  }

const grader = score =>
    score < 0.6 || score > 1 ? `F` : score < 0.7 ? `D` : score < 0.8 ? `C` : score < 0.9 ? `B` : `A`;
