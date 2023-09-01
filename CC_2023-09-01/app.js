//L1:Set Alarm 8kyu
//Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.
//P:
//R:
//E:employed | vacation 
//true     | true     => false
//true     | false    => true
//false    | true     => false
//false    | false    => false
//P:
function setAlarm(employed, vacation){
    if (employed == true && vacation == true){
        return false;
    } else if ( employed == true && vacation == false){
        return true;
    } else {
        return false;
    }
}

//Other Codewars solutions

function setAlarm(employed, vacation){
    return employed === true && vacation === false ? true : false
    
    }

const setAlarm = (employed, vacation) => employed && !vacation;

function setAlarm(employed, vacation){
    // employed is a boolean (true/false)
    // vacation is a boolean (true/false)
    // if you are employed and not on vacation 
      if(employed && !vacation){
    //   The function should return true if you are employed and not on vacation :  need to set an alarm
        return true;
      } else {
      //   It should return false otherwise
        return false;
      }
    }
