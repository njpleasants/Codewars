//Grasshopper - Messi goals function
//Messi is a soccer player with goals in three leagues: LaLiga, Copa del Rey, Champions. Complete the function to return his total number of goals in all three leagues. Note: the input will always be valid.
//P: Will be given three numbers.
//R: Return the sum of all three numbers.
//E: 5, 10, 2  -->  17
//P:
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals
  }

//Other Codewars solutions

const goals = (a,b,c) => a + b + c;

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return [].reduce.call(arguments, (a, b)=> a + b);
  }