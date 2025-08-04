//Codewars challenge String Templates - Bug Fixing #5 8kyu
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
//P: Given a function with a bug, debug so it returns the appropriate code. 
//R: Return the function with a string that is debugged.
//E:
//P:
function buildString(...template){
  return `I like #{template.join(',')}!`;
}

//Solution

function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

//Other solutions

const buildString = (...template) => `I like ${template.join(', ')}!`;

