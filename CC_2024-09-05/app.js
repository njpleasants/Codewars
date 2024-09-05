//Codewars challenge Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence 8kyu
//Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
//P: Will be given a string.
//R: Return string with any vowels replaced by excalamtion marks
//E: replace("ABCDE") === "!BCD!"
//P:
function replace(s){
    let a = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let arr = s.split('')
    for(let i = 0; i < arr.length; i++){
        if(a.includes(arr[i])){
             arr[i] = '!'
        }
    }
    return arr.join('')
  }
  
//Other solutions

function replace(s){
    return s.replace(/[aeoiu]/ig, '!')  
  }

function replace(s){
    var newS = ''
    var vowels = "aAeEiIoOuU"
    for (var i = 0; i < s.length; i++) {
      if (vowels.indexOf(s[i]) === -1) {
        newS += s[i]
      }  else {
        newS += '!'
      }
    }
    return newS
  }

const replace = w => (w.split('').map(e => ['a','e','i','o','u'].includes(e.toLowerCase()) ? '!' : e)).join('');

