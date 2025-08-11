//Codewars challenge Color Ghost 8kyu
//Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

//P: Create a ghost object that returns a random color
//R: Return a random color of the four options for the ghost object. 
//E:
//P:
let Ghost = function() {
  this.color = ['white', 'yellow', 'purple', 'red'][Math.floor(Math.random() * 4)]
};