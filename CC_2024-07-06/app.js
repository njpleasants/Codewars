//Codewars challenge Sort and Star 8kyu
//You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value. The returned value must be a string, and have "***" between each of its letters. You should not remove or add elements from/to the array.
//P: Will be given a list of arrays to be sorted alphabetically.
//R: Return the first value of the array with '***' between each letter of the string
//E: twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//P:
function twoSort(s) {
   s.sort()
   let first = s[0]
    return first.split('').join('***');
}

//Other Codewars solutions
function twoSort(s) {
    return s.sort()[0].split('').join('***');
  }

twoSort = s => s.sort()[0].split('').join('***')
