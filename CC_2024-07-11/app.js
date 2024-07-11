//Codewars challenge altERnaTIng cAsE <=> ALTerNAtiNG CaSe 8kyu
//Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:
//P: Will be given a string of letters and maybe numbers. 
//R: Return the string changing the original case of the letter. 
//E: "hello world".toAlternatingCase() === "HELLO WORLD"
// "HELLO WORLD".toAlternatingCase() === "hello world"
// "hello WORLD".toAlternatingCase() === "HELLO world"
// "HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
//P:
String.prototype.toAlternatingCase = function () {
    let str = '';
  for(let i = 0; i< this.length; i++){
    if (this[i] == this[i].toLowerCase()){ 
      str += this[i].toUpperCase();
    } else {
      str += this[i].toLowerCase();
    }
  }
  return str;
  }

//Other Codewars solutions

String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}