//Vowel Remover 8kyu
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
//P: Will be given a string with vowels.
//R: Return the string without lowercase vowels. Uppercase vowels can remain. 
//E: "hello"     -->  "hll"
//P:
function shortcut (string) {
    let result = ''
    for(let i = 0; i < string.length; i++) {
    if(string[i] != 'a' && string[i] != 'e' && string[i] != 'i' && string[i] != 'o' && string[i] != 'u') {
        result += string[i]
        }
    }
    return result
}

//Other Codewars solutions
function shortcut (string) {
    return string
      .split('')
      .filter(str => !'aeiou'.includes(str))
      .join('')
  }

function shortcut(str) {
    return str.split('').filter(function(e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1 
    }).join('')
  }

function shortcut(string){
    var vowels = "aeiou";
    var output = "";
    for (var i = 0; i < string.length; i++) {
      if (!(vowels.indexOf(string[i]) > -1)) {
        output += string[i];
      }
    }
    return output;
  }


