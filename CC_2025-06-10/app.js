//Codewars challenge L1: Bartender, drinks! 8kyu
//Complete the function that receives as input a string, and produces outputs according to the following table:
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".
// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

//P: Given a string return the correlating string as a response. Case sensitive.
//R: Return the corresponding string answer. Case sensitive.
//E: 
//P:
function getDrinkByProfession(param) {
  param = param.toLowerCase();
  
  switch(param) {
    case "jabroni": return "Patron Tequila";
    case "school counselor": return "Anything with Alcohol";
    case "programmer": return "Hipster Craft Beer";
    case "bike gang member": return "Moonshine";
    case "politician": return	"Your tax dollars";
    case "rapper": return "Cristal";
    default: return "Beer";
  }
}

//Other solutions

function getDrinkByProfession(param){
  param = param.toLowerCase();
  let res = "Beer";
  if (param == "jabroni") {res = "Patron Tequila"};
  if (param == "school counselor") {res = "Anything with Alcohol"};
  if (param == "programmer") {res = "Hipster Craft Beer"};
  if (param == "bike gang member") {res = "Moonshine"};
  if (param == "politician") {res = "Your tax dollars"};
  if (param == "rapper") {res = "Cristal"};
  return res;
}