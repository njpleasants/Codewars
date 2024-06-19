//Codewars challenge Grasshopper - Terminal game move function 8kyu
//In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times. Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
//P:Will move from left to right and roll two dice.
//R:Return the new position as dictated by roll of dice.
//E:(move(2, 5) should equal 12);
//P:
function move (position, roll) {
    return position + (roll * 2)
  }

//Other Codewars solutions

const move = (position, roll) => position + roll * 2
