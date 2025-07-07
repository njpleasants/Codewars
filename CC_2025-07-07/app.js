//Codewars challenge Simple validation of a username with regex 8kyu
//Write a simple regex to validate a username. Allowed characters are:
// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).
//P: Write a function that uses regex to validate a username.
//R: Return the validation, true or false.
//E: 
//P:
function validateUsr(username) {
  const res =  /^[a-z\d_]{4,16}$/.test(username)
  return res;
}

//Other solutions

const validateUsr = username => /^[a-z\d_]{4,16}$/.test(username);

function validateUsr(username) {
  return /^[0-9a-z_]{4,16}$/.test(username)
}