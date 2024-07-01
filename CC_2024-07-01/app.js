//Codewars challenge Do I get a bonus 8kyu
//It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

////Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

//If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

//Return the total figure the individual will receive as a string prefixed with "£"
//P: Will have two arguments, one an integer and one a boolean.
//R: Return the figure earned based on whether or not you receive a bonus.
//E: (bonusTime(10000, true), '£100000');
//P:
function bonusTime(salary, bonus) {
    if(bonus == true){
        return '£' + (salary * 10)
    }else{
        return '£' + salary;
    }
 }

//Other Codewars solutions

function bonusTime(salary, bonus) {
    return bonus ? `£${10 * salary}` : `£${salary}`;
  }

const bonusTime = (salary, bonus) => `£${salary * (bonus ? 10 : 1)}`;

function bonusTime(salary, bonus) {
    return '£' + salary * (bonus ? 10 : 1);
  }

const bonusTime = (salary, bonus) => bonus ? `£${salary * 10}` : `£${salary}`;