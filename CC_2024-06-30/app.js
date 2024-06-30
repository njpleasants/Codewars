//Codewars challenge Is it a palindrome 8kyu
//Write a function that checks if a given string (case insensitive) is a palindrome.
//A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
//P: Will be given a string to check.
//R: Return whether or not the given string is a palindrome.
//E: "Testing for 'aba'", () => assert.strictEqual(isPalindrome("aba"), true)); it("Testing for 'Abba'", () => assert.strictEqual(isPalindrome("Abba"), true)); it("Testing for 'hello'", () => assert.strictEqual(isPalindrome("hello"), false));
//P:
function isPalindrome(x) {
    return x.split('').reverse().join('').toLowerCase() == x.toLowerCase() 
   }

//Other Codewars solutions

const isPalindrome = (x) => {
    return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
  }
  