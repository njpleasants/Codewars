//Codewars challenge Short Long Short 8kyu
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
//P: You will be given two string of different length but one can be empty.
//R: Return the shortest string then the long string and then the short string again in order as one string. 
//E: ("1", "22") --> "1221" ("22", "1") --> "1221"
//P:
function solution(a, b){
    if(a.length > b.length){
        return b+a+b;
    } else {
        return a+b+a;
    }
  }

//Other Codewars solutions
function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }

const solution = (a, b) => (a.length > b.length) ? b + a + b : a + b + a;
  