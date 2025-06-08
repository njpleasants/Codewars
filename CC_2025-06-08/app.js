//Codewars challenge Is There a Vowel in There 8kyu
//Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
//If they are, change the array value to a string of that vowel.
//input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.
//P: Given an array, return if any of the numbers correspond to lower case vowels using character codes. 
//R: Return the corresponding lower case vowel if the corressponding code is in the array.
//E: input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output
//P:
function isVow(a){
  return a.map(code => {
    let char = String.fromCharCode(code);
    if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
        return char;
    }
    return code;
  })
}

//Other solutions

function isVow(a){
const vowels = ['a', 'e', 'i', 'o', 'u'];
return a.map(code => vowels.includes(String.fromCharCode(code)) ? String.fromCharCode(code) : code )
}

function isVow(a){
return a.map(i => {
if (String.fromCharCode(i) === 'a')
return 'a';
else if (String.fromCharCode(i) === 'e')
return 'e';
else if (String.fromCharCode(i) === 'i')
return 'i';
else if (String.fromCharCode(i) === 'o')
return 'o';
else if (String.fromCharCode(i) === 'u')
return 'u';
else 
return i;
})
}

