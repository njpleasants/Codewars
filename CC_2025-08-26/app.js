//Codewars challenge Jaden Casing Strings 7kyu
//Description:
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

//P:
//R:
//E: Not Jaden-Cased: "How can mirrors be real if our eyes aren't real" Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
//P:
/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
     return ;
   }
  }
);
//Answer
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

//Other solutions
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

String.prototype.toJadenCase = function() {
  return this
    .split(" ")
    .map(i => i.replace(i[0], i[0].toUpperCase()))
    .join(" ");
};

