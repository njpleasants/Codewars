//Codewars challenge Keep up the hoop 8kyu
//Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him. Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message: If Alex gets 10 or more hoops, return the string "Great, now move on to tricks". If he doesn't get 10 hoops, return the string "Keep at it until you get it".
//P: Will use number of times hoop goes around.
//R: Return one of two strings depending on the number of time the hoopp goes around.
//E:
//P:
function hoopCount (n) {
    if(n >= 10){
        return 'Great, now move on to tricks';
    } else {
        return 'Keep at it until you get it';
    }
 }

//Other Codewars solutions

function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }

const hoopCount = n => n < 10 ? 'Keep at it until you get it' : 'Great, now move on to tricks';

function hoopCount(n) {
    return n >= 10 ?
      "Great, now move on to tricks" :
      "Keep at it until you get it";
  }