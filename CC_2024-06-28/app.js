//Correct the mistakes of the character recognition software 8kyu
//Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.
// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

//P: Will be given digitized text that requires swapping typo numbers for the appropriate letters. 
//R: Return the strings with the correct letters instead of numbers.
//E: ("L0ND0N"),"LONDON");
//P:

function correct(s){
	s = s.split('');
  for (var i = 0; i < s.length; i++) {
    if (s[i] === '5') s[i] = 'S';
    else if (s[i] === '0') s[i] = 'O';
    else if (s[i] === '1') s[i] = 'I';
    }
  return s.join('');
}

//Other Codewars solutions

function correct(string){
    let newString = '';
    for(const char of string){
        if(char === '5'){
            newString += 'S'
        } else if ( char === '0'){
            newString += 'O'
        } else if ( char === '1'){
            newString += 'I'
        } else {
           newString += char;
        }
    }
    return newString;
}

function correct(string){
    return string.replaceAll('0', 'O').replaceAll('1', 'I').replaceAll('5', 'S');
  }
  