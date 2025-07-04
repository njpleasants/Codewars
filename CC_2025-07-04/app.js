//Codewars challenge Grasshopper Combine Strings 8kyu
//Create a function named combineNames/combine_names/CombineNames that accepts two parameters (first and last name). The function should return the full name.
//P: Create a function with two parameters that serve as a first name and a last name.
//R: Return the two parameters so they read as a full name.
//E: With "James" as the first name and "Stevens" as the last name should return "James Stevens"
//P:
function combineNames(firstName, lastName){
  return `${firstName} ${lastName}`
}

//Other solutions

const combineNames = (a, b) => `${a} ${b}`;

function combineNames(first, last) {
  return first + " " + last;
}

const combineNames = (fName, lName) => `${fName} ${lName}`;