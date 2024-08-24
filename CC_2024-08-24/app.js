//Codewars challenge String Cleaning 8kyu
//Your boss decided to save money by purchasing some cut-rate optical character recognition software for scanning in the text of old novels to your database. At first it seems to capture words okay, but you quickly notice that it throws in a lot of numbers at random places in the text. Your harried co-workers are looking to you for a solution to take this garbled text and remove all of the numbers. Your program will take in a string and clean out all numeric characters, and return a string with spacing and special characters ~#$%^&!@*():;"'.,? all intact.
//P: You will be given a string.
//R: Return the string without numeric characters while preserving the rest of the string.
//E: 'This looks5 grea8t!' -> 'This looks great!'
//P:
function stringClean(s){
    let string = ''
    for (let i = 0; i < s.length; i++) {
      if (s[i] != Number(s[i]) || (s[i] == ' ')) {
        string += s[i]
      }
    }
    return string
  }

//Other Codewars solutions

function stringClean(s){
    return s.split('').filter((n) => n != parseInt(n)).join('');
  }

function stringClean(s){
    return s.split``.filter(s => !Number(s) && s.replace(0, '')).join``

}

function stringClean(s){
    let result = '';
    for(let i=0;i<s.length;i++) {
      if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
      }
    return result;
    }