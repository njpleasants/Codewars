//Codewars challenge Determine offspring sex based on genes XX and XY chromosomes 8kyu
//Determine if the sex of the offspring will be male or female based on the X or Y chromosome present in the male's sperm.

//If the sperm contains the X chromosome, return "Congratulations! You're going to have a daughter."; If the sperm contains the Y chromosome, return "Congratulations! You're going to have a son.";
//P: Will be given a parameter of sperm that will dictate the sex of a baby.
//R: Return the appropriate response depending on whether or not the sperm passes an X or Y chromosome determinging boy or girl.
//E: (chromosomeCheck('XY'), "Congratulations! You're going to have a son.")
//P:
function chromosomeCheck(sperm) {
    if(sperm == 'XX'){
      return "Congratulations! You're going to have a daughter.";
    } else if(sperm = 'XY'){
      return "Congratulations! You're going to have a son.";
    }
  }

//Other solutions

function chromosomeCheck(sperm) {
    return `Congratulations! You're going to have a ${sperm === 'XY' ? 'son' : 'daughter'}.`
  }

const chromosomeCheck = sperm =>
    `Congratulations! You're going to have a ${sperm === `XY` ? `son` : `daughter`}.`;

function chromosomeCheck(sperm) {
    return sperm.includes('Y') ?
      "Congratulations! You're going to have a son." : 
      "Congratulations! You're going to have a daughter."
  }