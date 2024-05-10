//Find the Age Difference Between Youngest and Oldest Family Members 8kyu
/*At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].*/
//P:Will be given an array with numbers
//R:Return an array with the youngest age, oldest age, and the difference between the two.
//E:(differenceInAges([82, 15, 6, 38, 35]), [6, 82, 76]);
//P:
differenceInAges = ages => [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)]
//Had to use youtube for help and did not know spread I prefer this other solution:
function differenceInAges(ages){
    let youngest = ages[0];
    let oldest = ages[0];
    for(i = 0; i < ages.length; i++) {
      if(ages[i] > oldest) {
        oldest = ages[i];
      } else if(ages[i] < youngest) {
        youngest = ages[i];
      }
    }
    return [youngest, oldest, oldest - youngest];
  }

//Other Codewars solutions
function differenceInAges(ages){
    let x = ages.sort((a,b) => a - b)[0]
    let y = ages.sort((a,b) => a - b)[ages.length - 1]
    return [x, y, y - x]
  }
