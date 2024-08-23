//Codewars challenge Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
//P: Will be given a string that is not empty.
//R: Return the string without exclamation marks except for at the end of the string. 
//E: "Hi!!!"   ---> "Hi!" "!Hi"     ---> "Hi!"
//P:
function remove (string){
        return string.split('!').join('') + '!';
      }

//Other Codewars solutions
function remove(s){
    var str=""
    for (var i=0; i<s.length; ++i)
      if (s[i]!='!')
        str+=s[i];
    return str+'!';
  }

const remove = str => str.replaceAll('!', '') + '!';

function remove(s){
    //coding and coding....
    s = s.split('!');
    return s.concat('!').join('');
    
  }



