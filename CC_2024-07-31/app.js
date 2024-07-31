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
  