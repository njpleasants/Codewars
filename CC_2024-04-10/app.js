//Codewars challenge Exes and Ohs 7kyu
//Check to see if a string has the same amount of  Xs and Os. The method must return a boolean and be case insensitive. The string can contain any char.
//P:A string will be given but it can contain any character
//R:Return a boolean that reflects whether or not the string contains the same amount of x's and o's
//E:XO("ooxx") => true  XO("xooxx") => false
//P:
function XO(str) {
    //split iterate join boolean? create new array with only Xs and Os?
   str = str.split('');
   return count(str, 'x') === count(str, 'o')
}

function count(str, letter){
    return str.reduce((acc, value) => value.toLowercase() === letter ? acc + 1 : acc, 0);
}
//Solution from Youtube was not accepted. Other Codewars solutions:

function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
  }

