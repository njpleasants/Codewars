//Twice as Old 8kyu
/*Your function takes two arguments:
current father's age (years)
current age of his son (years)
Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.*/
//P:Function takes two arguments
//R:Return how many years ago the father was twice as old as his son
//E:twiceAsOld(42,21) , 0)
//P:
function twiceAsOld(dadYearsOld, sonYearsOld) {
    const ageAtBirth = dadYearsOld - sonYearsOld
    const doubleAge = ageAtBirth * 2
    return Math.abs(dadYearsOld - doubleAge)
}

//Other Codewars solutions
function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - sonYearsOld * 2)
  }

const twiceAsOld = (dadYearsOld, sonYearsOld) => Math.abs(dadYearsOld - sonYearsOld * 2);