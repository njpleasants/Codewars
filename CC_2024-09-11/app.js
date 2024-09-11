//Exclamation marks series #1: Remove an exclamation mark from the end of string 8kyu
//Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
//P: Will be given a string that is not empty.
//R: Return the string without an exclamation mark on the end.
//E: "Hi!!!"   ---> "Hi!!"
//P:

    function remove (string) {
        if(string[string.length-1] === "!"){
            return string.slice(0,string.length - 1);
            }else{
                return string;
            }
        }
    
    
//Other solutions

function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
  }

function remove(s){
    return s[s.length - 1] == '!' ? s.slice(0, -1) : s;
  }

function remove (s) {
    let removedString = ''
    for(let i = 0; i < s.length; i++){
      if(i === s.length - 1){
        if(s[i] === '!') {
          removedString += ''
        }else{
          removedString += s[i]
        }
      }else{
        removedString += s[i]
        }
      }
     return removedString
    }

