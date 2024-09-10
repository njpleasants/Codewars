//Codewars challenge FIXME: Replace all dots
//The code provided is supposed replace all the dots . in the specified String str with dashes - But it's not working properly.
// Task
// Fix the bug so we can all go home early.
// Notes
// String str will never be null.
//P: Need to debug the function provided.
//R: Replace all '.' with dashes instead. 
//E:
//P:
//Original 
// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

//Solution
var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  }

//Other solutions

var replaceDots = s=>s.split('.').join('-')

const replaceDots = function (str) {
    return str.replaceAll(".", "-");
  };
  
var replaceDots = function(str) {
    let answer = "";
    for (let i = 0; i < str.length; i++) {
      answer += (str[i] !== ".") ? str[i] : "-";
    }
    return answer;
  }